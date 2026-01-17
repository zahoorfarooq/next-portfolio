# 🚀 Quick Start Guide

## Local Development

### Prerequisites

- Node.js 18+ (recommended 20.x)
- npm or yarn package manager

### Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/zahoorfarooq/next-portfolio.git
cd next-portfolio
```

2. **Install Dependencies**

```bash
npm install
```

3. **Create Environment File**
   Create `.env.local` in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APP_APPWRITE_URL=your_appwrite_url
NEXT_APP_APPWRITE_API_KEY=your_appwrite_api_key
NEXT_PUBLIC_APP_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APP_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APP_APPWRITE_COLLECTION_ID=your_collection_id

# Hashnode Blog Integration
NEXT_PUBLIC_APP_HASHNODE_HOST=your_hashnode_host

# Resume Link
NEXT_APP_RESUME_LINK=https://drive.google.com/file/d/YOUR_FILE_ID/view

# EmailJS Configuration
NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_APP_CONTACT_EMAIL=your_contact_email
```

4. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## Configuration Guide

### 1. Appwrite Setup

- Create an account at [appwrite.io](https://appwrite.io)
- Create a new project
- Set up a database with collection for projects
- Get your credentials and update `.env.local`

### 2. Hashnode Integration

- Go to your Hashnode blog settings
- Copy your host (e.g., `yourblog.hashnode.dev`)
- Update `NEXT_PUBLIC_APP_HASHNODE_HOST` in `.env.local`

### 3. EmailJS Setup

- Sign up at [emailjs.com](https://emailjs.com)
- Create an email service
- Set up email template (use contact form fields)
- Get your Service ID, Template ID, and Public Key
- Update corresponding values in `.env.local`

### 4. Resume Link

- Upload your resume to Google Drive
- Get the shareable link
- Extract the file ID and update `NEXT_APP_RESUME_LINK`

---

## Build & Deploy

### Build Locally

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

**Option 1: Using Vercel CLI**

```bash
npm install -g vercel
vercel
```

**Option 2: GitHub Integration**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project from GitHub
4. Add environment variables in Vercel dashboard
5. Deploy

### Deploy to Other Platforms

**Netlify:**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages:**
Add to `next.config.js`:

```js
const nextConfig = {
  output: "export",
  unoptimizedImages: true,
};
export default nextConfig;
```

---

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## File Structure

```
next-portfolio/
├── src/
│   ├── app/                 # Pages and layouts
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities
│   ├── conf/                # Configuration
│   ├── appwrite/            # Appwrite services
│   └── hashode/             # Hashnode API
├── public/                  # Static assets
├── .env.local               # Environment variables (DO NOT COMMIT)
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
```

---

## Customization

### Change Theme Colors

Edit `tailwind.config.js`:

```js
colors: {
  dark: "#1b1b1b",
  light: "#f5f5f5",
  primary: "#8D4BE0",
  primaryDark: "#7AF8FF",
}
```

### Update Social Links

Edit `src/components/NavBar.jsx` and `src/components/Footer.jsx`:

- Update Twitter, LinkedIn, GitHub, Hashnode URLs

### Modify Content

- `src/app/about/page.js` - About section content
- `src/app/contact/page.js` - Contact page message
- `src/components/Experience.jsx` - Work experience
- `src/components/Education.jsx` - Education history
- `src/components/Skills.jsx` - Technical skills

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Loading

- Ensure `.env.local` is in the root directory
- Restart dev server after updating `.env.local`
- Verify variable names match exactly

### Appwrite Connection Issues

- Check if Appwrite URL is correct
- Verify API key has proper permissions
- Check database and collection IDs

---

## Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Code Splitting**: Dynamic imports for large components
3. **Caching**: Leverage Vercel Edge caching
4. **Analytics**: Monitor with Vercel Speed Insights

---

## SEO Checklist

- [x] Meta descriptions for all pages
- [x] OpenGraph tags configured
- [x] Twitter cards enabled
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Canonical URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

---

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Use Vercel Secrets** for production environment variables
3. **API Keys** - Keep them secure, never expose in client code
4. **CORS** - Configure properly if using external APIs

---

## Support & Help

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com)
- 🎬 [Framer Motion Guide](https://www.framer.com/motion/)
- 📝 [Appwrite Docs](https://appwrite.io/docs)
- 📧 [EmailJS Guide](https://www.emailjs.com/docs/)

---

**Happy coding! 🚀**
