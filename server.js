const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Path to the JSON file for storing waitlist data
const WAITLIST_FILE = path.join(__dirname, 'waitlist.json');

// Initialize waitlist file if it doesn't exist
if (!fs.existsSync(WAITLIST_FILE)) {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify([], null, 2));
}

// API endpoint to handle waitlist form submissions
app.post('/api/waitlist', (req, res) => {
    try {
        const { name, email, company, message } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({
                error: 'Name and email are required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Please enter a valid email address'
            });
        }

        // Read existing waitlist data
        let waitlistData = [];
        try {
            const fileContent = fs.readFileSync(WAITLIST_FILE, 'utf8');
            waitlistData = JSON.parse(fileContent);
        } catch (error) {
            console.error('Error reading waitlist file:', error);
            waitlistData = [];
        }

        // Check if email already exists
        const existingEntry = waitlistData.find(entry => entry.email === email);
        if (existingEntry) {
            return res.status(409).json({
                error: 'Email already exists in waitlist',
                message: 'You are already on our waitlist!'
            });
        }

        // Create new waitlist entry
        const newEntry = {
            id: Date.now().toString(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            company: company ? company.trim() : '',
            message: message ? message.trim() : '',
            timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress
        };

        // Add to waitlist
        waitlistData.push(newEntry);

        // Write back to file
        fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlistData, null, 2));

        console.log(`New waitlist entry: ${name} (${email})`);

        // Return success response
        res.status(201).json({
            success: true,
            message: 'Successfully joined the waitlist!',
            data: {
                id: newEntry.id,
                name: newEntry.name,
                email: newEntry.email
            }
        });

    } catch (error) {
        console.error('Error processing waitlist submission:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Something went wrong. Please try again.'
        });
    }
});

// API endpoint to get waitlist statistics (for admin purposes)
app.get('/api/waitlist/stats', (req, res) => {
    try {
        const fileContent = fs.readFileSync(WAITLIST_FILE, 'utf8');
        const waitlistData = JSON.parse(fileContent);

        res.json({
            total: waitlistData.length,
            recent: waitlistData.slice(-10), // Last 10 entries
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error reading waitlist stats:', error);
        res.status(500).json({ error: 'Failed to read waitlist data' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Airavata server running on port ${PORT}`);
    console.log(`Waitlist data will be stored in: ${WAITLIST_FILE}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
