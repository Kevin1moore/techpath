const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, password, career_interest, skill_level, time_commitment } = req.body;

    if (!name || !email || !password || !career_interest || !skill_level || !time_commitment) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `
            INSERT INTO users (name, email, password, career_interest, skill_level, time_commitment)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.query(query, [name, email, hashedPassword, career_interest, skill_level, time_commitment], (err) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ success: false, message: 'Email already exists.' });
                }
                console.error('Database error during signup:', err);
                return res.status(500).json({ success: false, message: 'Database error.' });
            }

            console.log(`User registered: ${name} (${email})`);
            res.status(201).json({
                success: true,
                message: 'User registered successfully!',
                user: {
                    name,
                    career_interest: career_interest.replace(/\s+/g, '-').toLowerCase()
                },
                redirectUrl: '/general-dashboard.html',
            });
        });
    } catch (error) {
        console.error('Server error during signup:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error('Database error during login:', err);
                return res.status(500).json({ success: false, message: 'Database error.' });
            }

            if (results.length === 0) {
                return res.status(404).json({ success: false, message: 'User not found.' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ success: false, message: 'Invalid password.' });
            }

            console.log(`User logged in: ${user.name} (${user.email})`);

            // Send user details and redirect to general dashboard
            res.status(200).json({
                success: true,
                message: 'Login successful!',
                user: {
                    name: user.name,
                    career_interest: user.career_interest,
                },
                redirectUrl: '/general-dashboard.html',
            });
        });
    } catch (error) {
        console.error('Server error during login:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});


// GET Profile Data
router.get('/profile-data', (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ success: false, message: 'Username is required.' });
    }

    const query = 'SELECT name, email, skill_level, time_commitment FROM users WHERE name = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Database error fetching profile data:', err);
            return res.status(500).json({ success: false, message: 'Database error.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        res.json(results[0]);
    });
});

// PUT Update Profile
router.put('/update-profile', (req, res) => {
    const { name, email, skill_level, time_commitment } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const updates = [];
    if (name) updates.push(`name = '${name}'`);
    if (skill_level) updates.push(`skill_level = '${skill_level}'`);
    if (time_commitment) updates.push(`time_commitment = '${time_commitment}'`);

    if (updates.length === 0) {
        return res.status(400).json({ success: false, message: 'No fields to update.' });
    }

    const query = `UPDATE users SET ${updates.join(', ')} WHERE email = ?`;

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Database error during profile update:', err);
            return res.status(500).json({ success: false, message: 'Database error.' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        res.status(200).json({ success: true, message: 'Profile updated successfully!' });
    });
});

module.exports = router;
