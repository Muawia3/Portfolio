# 🚀 Professional Portfolio - Muawia

A modern, responsive, and feature-rich portfolio website built with React, featuring smooth animations, elegant UI, and professional design.

## ✨ Features

- **🎨 Modern Design**: Clean and professional UI with gradient effects and glassmorphism
- **⚡ Smooth Animations**: Beautiful animations powered by Framer Motion
- **📱 Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **🎯 Interactive Components**: Engaging user experience with hover effects and transitions
- **📧 Contact Form**: Integrated EmailJS for seamless communication
- **🔄 Smooth Scrolling**: Navigation with smooth scroll behavior
- **💼 Projects Showcase**: Filter projects by category (Web Development, AI)
- **📊 Skills Display**: Animated progress bars showing skill proficiency
- **🎓 Experience Timeline**: Clean timeline layout for education and experience

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- Framer Motion (animations)
- React Icons
- React Scroll (smooth scrolling)
- React Type Animation (typing effects)
- React Intersection Observer (scroll animations)

### Styling
- CSS3 with modern features
- Flexbox & Grid
- Custom animations
- Responsive design

### Tools
- EmailJS (contact form)
- ESLint (code quality)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup EmailJS** (Optional - for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update credentials in `src/components/Contact.jsx`:
     ```javascript
     await emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       formRef.current,
       'YOUR_PUBLIC_KEY'
     );
     ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.jsx`)
   - Modify your bio and background
   - Update education and skills

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills
   - Adjust proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`)
   - Replace placeholder projects with your actual projects
   - Update images, descriptions, and links

5. **Experience Section** (`src/components/Experience.jsx`)
   - Add your education history
   - Update work experience
   - Add certifications

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update email and phone number
   - Configure EmailJS credentials

### Change Colors

Main color scheme is defined in CSS files using:
- Primary: `#00f2ff` (Cyan)
- Secondary: `#b300ff` (Purple)
- Background: `#0a0a23` (Dark Blue)

Update these in respective CSS files to change the theme.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

## 📱 Sections Overview

1. **Home/Hero**: Eye-catching landing section with animated text
2. **About**: Introduction and background information
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio of your work with filtering
5. **Experience**: Education and work history timeline
6. **Contact**: Get in touch form with EmailJS integration
7. **Footer**: Social links and additional information

## 🎯 Features to Add (Optional)

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Testimonials
- [ ] More project details (modal)
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Multilingual support

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Contact

For any queries, reach out at: your.email@example.com

---

Made with ❤️ using React & Framer Motion
