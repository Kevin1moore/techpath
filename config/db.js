const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',      // Cloudways Public IP
    user: 'root',           // Correct database username from Cloudways
    password: '',    // Correct password (verify spelling carefully)
    database: 'techpath',       // Correct database name from Cloudways
    connectTimeout: 60000        // Increase timeout
};

let db;

function handleDisconnect() {
    db = mysql.createConnection(dbConfig);

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err.message);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        } else {
            console.log('✅ Database connected successfully!');
        }
    });

    db.on('error', (err) => {
        console.error('❌ Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('🔄 Reconnecting to database...');
            handleDisconnect();
        } else {
            throw err;
        }
    });

    // Keep-Alive Query
    setInterval(() => {
        db.query('SELECT 1', (err) => {
            if (err) console.error('⚠️ Keep-alive query failed:', err.message);
            else console.log('✅ Keep-alive query sent');
        });
    }, 60000); // Run every 60 seconds
}

handleDisconnect();

module.exports = db;
