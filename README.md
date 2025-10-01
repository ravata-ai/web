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
├── server.js           # Node.js server for waitlist handling
├── package.json         # Node.js dependencies and scripts
├── waitlist.json       # JSON file storing waitlist submissions
├── robots.txt          # SEO robots file
├── sitemap.xml         # XML sitemap for search engines
└── README.md           # Project documentation
```

## 📝 Waitlist Functionality

The website includes a fully functional waitlist system:

- **Form Validation**: Client-side validation for name and email
- **JSON Storage**: All submissions are stored in `waitlist.json`
- **Duplicate Prevention**: Prevents duplicate email submissions
- **Real-time Feedback**: Success/error notifications for users
- **Admin Stats**: API endpoint to view waitlist statistics

### API Endpoints

- `POST /api/waitlist` - Submit waitlist form
- `GET /api/waitlist/stats` - Get waitlist statistics (admin)

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with gradient accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Interactive Elements**: Hover effects, scroll animations, and form validation
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Getting Started

### Option 1: Deploy to GitHub Pages (Recommended)

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
   - Select "GitHub Actions" as source
   - Your site will be available at `https://YOUR-USERNAME.github.io/airavata-web-page/`

3. **Configure Formspree** (Optional)
   - Sign up at [Formspree.io](https://formspree.io)
   - Update form action in `index.html` with your Formspree endpoint

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
   - Waitlist submissions will be stored in `waitlist.json`

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
   - Note: Waitlist form requires Formspree configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

1. **Hero Section**: Compelling headline with call-to-action
2. **Features**: Six key benefits of the MCP platform
3. **How It Works**: Three-step process explanation
4. **Pricing**: Three-tier pricing structure
5. **Contact**: Waitlist signup form with contact information

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
- **Phone**: +1 (555) 123-4567
- **Website**: https://airavata.dev

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ for the future of API development.