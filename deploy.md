# GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `airavata-web-page` (or your preferred name)
3. Make it public for free GitHub Pages hosting

### 2. Upload Your Code
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Airavata website"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/airavata-web-page.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 4. Configure Formspree (Optional)
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
   ```

## 🌐 Your Live Website

Once deployed, your website will be available at:
- `https://YOUR-USERNAME.github.io/airavata-web-page/`
- Or with custom domain: `https://airavata.app` (if configured)

## 📝 Form Handling

The website uses Formspree for form submissions:
- **Free Tier**: 50 submissions per month
- **Automatic Email**: Submissions sent to your email
- **No Server Required**: Perfect for GitHub Pages

## 🔧 Custom Domain (Optional)

To use a custom domain like `airavata.app`:

1. **Update CNAME file**:
   ```bash
   echo "airavata.app" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**:
   - Add CNAME record: `www` → `YOUR-USERNAME.github.io`
   - Add A record: `@` → `185.199.108.153` (GitHub Pages IP)

3. **Update GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Add custom domain: `airavata.app`

## 🎯 Features Included

- ✅ Responsive design
- ✅ Torquoise theme with Airavata elephant
- ✅ Form handling with Formspree
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Mobile-friendly

## 🚀 Automatic Updates

Every time you push to the `main` branch:
1. GitHub Actions automatically builds the site
2. Deploys to GitHub Pages
3. Your website updates automatically

## 📊 Analytics (Optional)

Add Google Analytics by updating the `<head>` section in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Site not loading**: Check if GitHub Pages is enabled in repository settings
2. **Form not working**: Verify Formspree configuration
3. **Styling issues**: Ensure all CSS files are committed
4. **Custom domain not working**: Check DNS settings and CNAME file

### Support:
- GitHub Pages documentation: https://docs.github.com/en/pages
- Formspree documentation: https://formspree.io/help
