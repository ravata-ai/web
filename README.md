# Airavata - MCP Server Platform

A stealth mode SaaS platform that supercharges your APIs by building Model Context Protocol (MCP) server context around them.

## 🚀 Features

- **Intelligent Context**: Build context-aware APIs that understand your data patterns
- **Lightning Fast**: Optimize API performance with intelligent caching and routing
- **Secure by Design**: Enterprise-grade security with automatic threat detection
- **Easy Integration**: Drop-in solution that works with existing APIs
- **Analytics & Insights**: Deep insights into API usage patterns
- **Scalable Architecture**: Auto-scaling infrastructure that grows with demand

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Fonts**: Inter font family for optimal readability
- **Icons**: Font Awesome 6.0
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

```
web-page/
├── index.html          # Main landing page
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and interactions
├── server.js           # Node.js server for contact form handling
├── package.json         # Node.js dependencies and scripts
├── robots.txt          # SEO robots file
├── sitemap.xml         # XML sitemap for search engines
└── README.md           # Project documentation
```

## 📝 Contact Form Functionality

The website includes a fully functional contact form system:

- **Form Validation**: Client-side validation for name, email, and message
- **Email Integration**: All submissions are sent to contact@airavata.app
- **Real-time Feedback**: Success/error notifications for users
- **Secure Submission**: Server-side validation and email sending

### API Endpoints

- `POST /api/contact` - Submit contact form

### Email Configuration

The server supports multiple free email services. Choose one option:

#### Option 1: Gmail (Free - Recommended)
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Setup steps:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password (not your regular password)
3. Use the App Password in EMAIL_PASS

#### Option 2: SendGrid (Free tier: 100 emails/day)
1. Sign up at [SendGrid](https://sendgrid.com)
2. Get your API key from Settings → API Keys
3. Uncomment the SendGrid configuration in server.js
4. Set environment variable:
```bash
SENDGRID_API_KEY=your-sendgrid-api-key
```

#### Option 3: Mailgun (Free tier: 5,000 emails/month)
1. Sign up at [Mailgun](https://mailgun.com)
2. Get SMTP credentials from your dashboard
3. Uncomment the Mailgun configuration in server.js
4. Set environment variables:
```bash
MAILGUN_SMTP_USER=your-mailgun-smtp-user
MAILGUN_SMTP_PASS=your-mailgun-smtp-password
```

#### Option 4: Any SMTP Server
You can use any SMTP server by modifying the transporter configuration in server.js.

### Setting Environment Variables

#### For Local Development:
Create a `.env` file in the project root:
```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=3000
```

**Note**: Make sure to add `.env` to your `.gitignore` file to keep your credentials secure!

#### For Production Deployment:
- **Heroku**: Use `heroku config:set EMAIL_USER=your-email@gmail.com`
- **Vercel**: Add environment variables in project settings
- **Netlify**: Add environment variables in site settings
- **Railway**: Add environment variables in project settings

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with gradient accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Interactive Elements**: Hover effects, scroll animations, and form validation
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Getting Started

### Option 1: Deploy to GitHub Pages (Recommended for Static Sites)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Airavata website"
   git remote add origin https://github.com/YOUR-USERNAME/airavata-web-page.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch" → main branch
   - Your site will be available at `https://YOUR-USERNAME.github.io/airavata-web-page/`

3. **Configure Contact Form with Formspree** (Free for GitHub Pages)
   - Sign up at [Formspree.io](https://formspree.io) (free tier: 50 submissions/month)
   - Create a new form and get your form ID
   - Update the form action in `index.html`:
     ```html
     <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```
   - Update the success redirect URL in the hidden `_next` field
   - Formspree will send emails to contact@airavata.app automatically

### Alternative Solutions for GitHub Pages:

#### Option A: Netlify Forms (Free)
1. Deploy to [Netlify](https://netlify.com) instead of GitHub Pages
2. Add `netlify` attribute to form: `<form netlify>`
3. Netlify automatically handles form submissions
4. Free tier: 100 submissions/month

#### Option B: EmailJS (Free)
1. Sign up at [EmailJS](https://emailjs.com)
2. Connect your email service (Gmail, Outlook, etc.)
3. Use JavaScript to send emails directly from the browser
4. Free tier: 200 emails/month

#### Option C: Netlify Functions (Free)
1. Deploy to Netlify
2. Create serverless functions for email handling
3. Use the same Node.js code but as serverless functions
4. Free tier: 125,000 function invocations/month

## 🚀 Quick Setup for GitHub Pages + Formspree

### Step-by-Step Guide:

1. **Sign up for Formspree** (2 minutes)
   - Go to [formspree.io](https://formspree.io)
   - Sign up with your email
   - Create a new form
   - Copy your form ID (looks like `xpwgkqyz`)

2. **Update your website** (1 minute)
   - Replace `YOUR_FORM_ID` in `index.html` with your actual form ID
   - Update the `_next` URL to your GitHub Pages URL

3. **Deploy to GitHub Pages** (3 minutes)
   - Push your code to GitHub
   - Enable GitHub Pages in repository settings
   - Your site is live!

4. **Configure Formspree** (1 minute)
   - In Formspree dashboard, set the email to `contact@airavata.app`
   - Test the form - you'll receive emails instantly!

**Total setup time: ~7 minutes** ⚡

### Option 2: Local Development with Server

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the server**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

3. **Access the website**
   - Open `http://localhost:3000` in your browser
   - Contact form submissions will be sent to contact@airavata.app

### Option 3: Static Files Only

1. **Open in browser**
   ```bash
   # Using Python's built-in server
   python -m http.server 8000

   # Or using Node.js
   npx serve .
   ```

2. **Access the website**
   - Open `http://localhost:8000` in your browser
   - Note: Contact form requires server setup for email functionality

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

1. **Hero Section**: Compelling headline with call-to-action
2. **Features**: Six key benefits of the MCP platform
3. **How It Works**: Three-step process explanation
4. **Pricing**: Three-tier pricing structure
5. **Contact**: Contact form with email integration

## 🔧 Customization

### Colors
The website uses a consistent color palette:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Text: `#1a1a1a` (Dark Gray)
- Background: `#ffffff` (White)

### Typography
- Font Family: Inter
- Weights: 300, 400, 500, 600, 700

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags for social sharing
- XML sitemap for search engines
- Robots.txt for crawler guidance
- Fast loading with optimized assets

## 🚀 Deployment

The website is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable in repository settings
- **AWS S3**: Upload files to S3 bucket
- **Cloudflare Pages**: Connect repository

## 📞 Contact

- **Email**: hello@airavata.dev
- **Website**: https://airavata.app

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ for the future of API development.
