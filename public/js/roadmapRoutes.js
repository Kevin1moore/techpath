const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'roadmap_generator'
};

// Create database pool
const pool = mysql.createPool(dbConfig);

// Helper class for roadmap generation
class RoadmapGenerator {
  constructor(userData) {
    this.careerPath = userData.careerPath;
    this.currentLevel = userData.currentLevel;
    this.timeCommitment = userData.timeCommitment;
    this.interests = userData.interests || [];
    this.experience = userData.experience;
  }

  async generateRoadmap() {
    const baseRoadmap = careerRoadmaps[this.careerPath];
    if (!baseRoadmap) {
      throw new Error('Career path not found');
    }

    const customizedRoadmap = this.customizeRoadmap(baseRoadmap);
    return this.formatRoadmap(customizedRoadmap);
  }

  customizeRoadmap(baseRoadmap) {
    const levels = ['beginner', 'intermediate', 'advanced'];
    const startIndex = levels.indexOf(this.currentLevel);
    const relevantLevels = levels.slice(startIndex);

    return {
      title: baseRoadmap.title,
      levels: relevantLevels.map(level => ({
        level,
        ...this.adjustForTimeCommitment(baseRoadmap[level])
      })),
      totalEstimate: this.calculateTotalTime(relevantLevels.map(l => baseRoadmap[l]))
    };
  }

  adjustForTimeCommitment(levelData) {
    const timeMultiplier = {
      'full-time': 1,
      'part-time': 2,
      'casual': 3
    }[this.timeCommitment];

    return {
      ...levelData,
      timeEstimate: this.adjustTime(levelData.timeEstimate, timeMultiplier)
    };
  }

  formatRoadmap(roadmap) {
    return {
      careerPath: roadmap.title,
      userLevel: this.currentLevel,
      estimatedCompletion: roadmap.totalEstimate,
      roadmap: roadmap.levels.map(level => ({
        level: level.level,
        timeEstimate: level.timeEstimate,
        requiredSkills: level.mustLearn,
        optionalSkills: level.recommended,
        resources: level.resources,
        mentors: level.mentors
      }))
    };
  }
}

// API Endpoints
router.post('/generate-roadmap', async (req, res) => {
  try {
    const { userId, careerPath, currentLevel, timeCommitment, interests, experience } = req.body;

    // Validate input
    if (!userId || !careerPath || !currentLevel || !timeCommitment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate roadmap
    const generator = new RoadmapGenerator({
      careerPath,
      currentLevel,
      timeCommitment,
      interests,
      experience
    });

    const roadmap = await generator.generateRoadmap();

    // Store in database
    const conn = await pool.getConnection();
    try {
      await conn.query(
        'INSERT INTO user_roadmaps (user_id, career_path, roadmap_data, created_at) VALUES (?, ?, ?, NOW())',
        [userId, careerPath, JSON.stringify(roadmap)]
      );

      // Update user profile
      await conn.query(
        'UPDATE users SET current_roadmap = ? WHERE id = ?',
        [careerPath, userId]
      );

      res.json({
        success: true,
        roadmap
      });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Roadmap generation error:', error);
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
});

// Get user's roadmap
router.get('/roadmap/:userId', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        'SELECT roadmap_data FROM user_roadmaps WHERE user_id = ? ORDER BY created_at DESC LIMIT 1',
        [req.params.userId]
      );

      if (rows.length === 0) {
        return res.status(404).json({ error: 'Roadmap not found' });
      }

      res.json({ roadmap: JSON.parse(rows[0].roadmap_data) });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    res.status(500).json({ error: 'Failed to fetch roadmap' });
  }
});

// Update progress
router.post('/update-progress', async (req, res) => {
  try {
    const { userId, skill, completed } = req.body;
    
    const conn = await pool.getConnection();
    try {
      await conn.query(
        'INSERT INTO skill_progress (user_id, skill_name, completed, updated_at) VALUES (?, ?, ?, NOW()) ON DUPLICATE KEY UPDATE completed = ?, updated_at = NOW()',
        [userId, skill, completed, completed]
      );

      res.json({ success: true });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

module.exports = router;