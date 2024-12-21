const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
// Default Route for Root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/web-development-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/web-development-dashboard.html'));
});
app.get('/roadmap', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/roadmap-view.html'));
});

app.get('/create-roadmap', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/create-roadmap.html'));
});

app.get('/resources', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/resource.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/profile.html'));
});
app.get('/learning', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/learning.html'));
});
// Serve HTML Pages
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'));
});

app.get('/general-dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/general-dashboard.html'));
});

// Career Dashboards
app.get('/dashboard-web-development', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/web-development-dashboard.html'));
});

app.get('/dashboard-cybersecurity', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cybersecurity-dashboard.html'));
});
app.get('/dashboard-cloud-engineering', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cloud-engineering-dashboard.html'));
});

app.get('/dashboard-ai-&-machine-learning', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ai-and-machine-learning-dashboard.html'));
});

// Use Authentication Routes
app.use(authRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
