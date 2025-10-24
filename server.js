require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Email configuration - Using Gmail SMTP (free)
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Alternative: Use SendGrid (free tier: 100 emails/day)
// const transporter = nodemailer.createTransporter({
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'apikey',
//         pass: process.env.SENDGRID_API_KEY || 'your-sendgrid-api-key'
//     }
// });

// Alternative: Use Mailgun (free tier: 5,000 emails/month)
// const transporter = nodemailer.createTransporter({
//     host: 'smtp.mailgun.org',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.MAILGUN_SMTP_USER || 'your-mailgun-smtp-user',
//         pass: process.env.MAILGUN_SMTP_PASS || 'your-mailgun-smtp-password'
//     }
// });

// Verify email configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('Email configuration error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// API endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Name, email, and message are required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Please enter a valid email address'
            });
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: 'contact@airavata.app',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log(`Contact form submission from: ${name} (${email})`);

        // Return success response
        res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Something went wrong. Please try again.'
        });
    }
});


// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Airavata server running on port ${PORT}`);
    console.log(`Contact form submissions will be sent to: contact@airavata.app`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
