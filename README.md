# Rynhard Andries Bruwer - Professional Portfolio

Welcome to my professional portfolio website! This is a modern, responsive portfolio showcasing my experience as a SAFe® 5.1 Certified Scrum Master, Agile Project Manager, and AI Enthusiast.

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging scroll animations and transitions
- **Professional Sections** - Home, About, Experience, Skills, Certifications, Contact
- **Experience Timeline** - Visual representation of career progression
- **Skills Showcase** - Organized by categories (Agile, Tools, Cloud, Leadership)
- **Contact Form** - Easy way for recruiters and clients to reach out
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Fast Performance** - Minimal dependencies, optimized loading

## 📋 Portfolio Sections

### 1. **Navigation Bar**
- Sticky navigation with smooth scrolling to all sections
- Active state highlighting based on scroll position
- Clean, professional design

### 2. **Hero Section**
- Professional introduction with title and subtitle
- Key value proposition
- Call-to-action buttons to explore work and get in touch

### 3. **About Section**
- Professional summary and career overview
- Key statistics (years of experience, projects, clients)
- Qualifications and professional background

### 4. **Experience Section**
- Timeline-based visualization of career progression
- Detailed role descriptions and accomplishments
- Client information and technology stack
- All 6 major positions from current role back to Lanseria

### 5. **Skills Section**
- Organized by categories:
  - Agile & Delivery Frameworks
  - Tools & Platforms
  - Data, Cloud & Technical
  - Leadership & Management
- Checkmark-style presentation for easy scanning

### 6. **Certifications Section**
- SAFe® 5.1 Certified Scrum Master
- Scrum Master Certification
- Recent AI and cloud certifications
- All professional development credentials

### 7. **Industries & Interests**
- Industries served (Telecommunications, Banking, Insurance, Healthcare)
- AI interests and modern technology focus
- Languages (Afrikaans & English)

### 8. **Contact Section**
- Contact form for inquiries (powered by Formspree)
- Direct contact information:
  - Email: rynsbruwer@outlook.com
  - Phone: +27 84 038 1675
  - Location: South Africa
  - Availability: Remote, Hybrid, Relocation, On-Site
- Social media links (LinkedIn, GitHub)

### 9. **Footer**
- Copyright information
- Link to GitHub repository source

## 🎨 Customization Guide

### 1. **Set Up Contact Form**

The contact form uses **Formspree** for free form handling:

1. Visit [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form in Formspree
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

After setup, form submissions will be sent to your email.

### 2. **Update Personal Information**

Already customized with:
- ✅ Name: Rynhard Andries Bruwer
- ✅ Professional titles and roles
- ✅ Contact information
- ✅ Social media links
- ✅ All 6 major work positions
- ✅ Skills and certifications
- ✅ Industries and interests

### 3. **Modify Content** (if needed)

Edit `index.html` to update:
- Professional summary
- Experience descriptions
- Skills categories
- Certifications

### 4. **Customize Colors** (Optional)

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main purple */
    --secondary-color: #764ba2;    /* Dark purple */
    --accent-color: #f5576c;       /* Pink accent */
    --text-color: #2d3436;         /* Dark text */
    --text-light: #636e72;         /* Light gray text */
    --bg-color: #ffffff;           /* White background */
    --bg-light: #f8f9fa;           /* Light gray bg */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (1200px+)
- **Tablet**: Adjusted grid (769px - 1199px)
- **Mobile**: Single column (481px - 768px)
- **Small Mobile**: Extra-small optimizations (≤480px)

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Gradients, Flexbox, CSS Grid
- **JavaScript** - Smooth scrolling, animations, form validation
- **Formspree** - Form backend service

## 🌐 Live Deployment

Your portfolio is automatically deployed at:
```
https://Ryns917.github.io
```

Every push to the repository automatically updates your live portfolio!

## 📚 How to Use

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Ryns917/Ryns917.github.io.git
cd Ryns917.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
npx http-server
```

3. Visit `http://localhost:8000`

### Making Changes

1. Edit HTML, CSS, or JavaScript files
2. Save changes
3. Commit and push:
```bash
git add .
git commit -m "Update portfolio with [change description]"
git push origin main
```

4. Changes go live automatically on GitHub Pages!

## 💡 Best Practices

1. **Keep Content Fresh**
   - Update experience section as you progress
   - Add new certifications and skills
   - Update LinkedIn and GitHub links

2. **Optimize for Performance**
   - Minimize CSS and JavaScript (for production)
   - Compress any images used
   - Monitor page load speed

3. **Test Responsiveness**
   - Test on multiple devices
   - Use Chrome DevTools mobile emulation
   - Test on actual mobile devices

4. **SEO Optimization**
   - Update meta description
   - Use semantic HTML
   - Submit sitemap to Google Search Console

5. **Professional Presentation**
   - Proofread all content
   - Ensure consistent formatting
   - Use professional tone
   - Keep colors coordinated

## 🔒 Privacy & Security

- No sensitive personal information should be stored in repository
- Email is displayed but protected by Formspree
- Phone number is clickable but not crawlable
- GitHub repo is public but contains no sensitive data

## 📊 Analytics (Optional)

To track visitor statistics:

1. Add Google Analytics to `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Form Not Sending?
- Verify Formspree form ID is correct
- Check email for Formspree verification link
- Test form submission in browser console

### Styles Not Loading?
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `styles.css` is in root directory
- Check CSS file path in HTML

### Responsive Issues?
- Test with browser DevTools (F12)
- Check viewport meta tag in HTML
- Verify media queries in CSS

## 📧 Contact & Support

For technical support, feel free to reach out through the portfolio contact form or direct message on LinkedIn.

## 📄 License

This portfolio template is open source. Feel free to use it as inspiration for your own professional portfolio!

---

**Portfolio Built with ❤️ | SAFe® 5.1 Certified | AI Enthusiast**

**Last Updated**: January 2025