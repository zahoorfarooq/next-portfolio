# 🚀 Zahoor Farooq - DevOps Engineer Portfolio

A modern, interactive portfolio website showcasing DevOps expertise, full-stack development projects, and technical blog posts. Built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion** for smooth animations.

## ✨ Features

- **🎨 Modern Design** - Clean, responsive UI with dark/light mode support
- **⚡ Smooth Animations** - Framer Motion animations for engaging interactions
- **📱 Mobile Responsive** - Fully optimized for all device sizes
- **🔗 Real-time Blog Integration** - Hashnode API integration for live blog posts
- **📧 Contact Form** - EmailJS integration for direct messaging
- **🗄️ Project Management** - Appwrite database integration for dynamic projects
- **⚙️ DevOps Focus** - Showcases Docker, Kubernetes, AWS, CI/CD pipelines
- **📈 Performance Optimized** - Vercel Analytics & Speed Insights integrated
- **🎯 SEO Ready** - Optimized metadata and structured data

## 🛠️ Tech Stack

### Core

- **Framework**: Next.js 14.0.3
- **Runtime**: React 18
- **Styling**: Tailwind CSS 3.3.0
- **Animations**: Framer Motion 10.18.0

### UI Components

- Shadcn UI components
- Radix UI primitives
- Custom components library

### Backend & Services

- **CMS/Database**: Appwrite 13.0.1
- **Email**: EmailJS 4.2.0
- **Blog Platform**: Hashnode API
- **Analytics**: Vercel Analytics & Speed Insights

### Form & Validation

- React Hook Form 7.51.0
- Zod 3.22.4 (schema validation)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended 20.x)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/zahoorfarooq/next-portfolio.git
cd next-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_APPWRITE_URL=your_appwrite_url
NEXT_APP_APPWRITE_API_KEY=your_appwrite_api_key
NEXT_PUBLIC_APP_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APP_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APP_APPWRITE_COLLECTION_ID=your_collection_id

NEXT_PUBLIC_APP_HASHNODE_HOST=your_hashnode_host
NEXT_APP_RESUME_LINK=your_resume_link

NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_APP_CONTACT_EMAIL=your_contact_email
```

4. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📂 Project Structure

```
src/
├── app/                    # Next.js pages & layouts
│   ├── page.js            # Home page
│   ├── about/             # About section
│   ├── projects/          # Projects showcase
│   ├── blogs/             # Blog listing
│   ├── contact/           # Contact form
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── skeletons/         # Loading skeletons
│   ├── hooks/             # Custom React hooks
│   └── *.jsx              # Feature components
├── lib/                   # Utility functions
├── conf/                  # Configuration
├── appwrite/              # Appwrite services
└── hashode/               # Hashnode API integration
```

## 🎯 Pages

- **Home** (`/`) - Hero section with CTA buttons
- **About** (`/about`) - Bio, skills, experience, education with tabs
- **Projects** (`/projects`) - Featured and recent projects
- **Blogs** (`/blogs`) - Latest posts from Hashnode
- **Contact** (`/contact`) - Contact form with validation

## 🔧 Key Components

- `AnimatedText` - Text animation on scroll
- `AnimatedNumber` - Number counter animation
- `Skills` - Interactive skill showcase with floating elements
- `Experience` - Timeline of work experience
- `Education` - Education history timeline
- `ContactMeForm` - Validated contact form
- `NavBar` - Responsive navigation with mobile menu
- `FeaturedProject` - Showcase featured projects
- `FeaturedBlog` - Highlight top blog posts

## 📊 Environment Variables

All environment variables are configured in `.env.local` and referenced through `src/conf/conf.js`.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Deploy to Other Platforms

```bash
npm run build
npm start
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js`:

```js
colors: {
  dark: "#1b1b1b",
  light: "#f5f5f5",
  primary: "#8D4BE0",
  primaryDark: "#7AF8FF",
}
```

### Fonts

Modify `src/app/layout.js` to change the font family from Montserrat.

## 🐛 Known Issues & Future Improvements

- [ ] Add blog search functionality
- [ ] Implement project filtering
- [ ] Add testimonials section
- [ ] Create admin panel for content management
- [ ] Add dark mode transitions
- [ ] Implement pagination for blogs

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

- **Email**: Your contact email
- **LinkedIn**: https://www.linkedin.com/in/zahoorfarooq/
- **GitHub**: https://github.com/zahoorfarooq/
- **Twitter**: https://www.twitter.com/ZFarooq624/
- **Blog**: https://zahoorfarooq.hashnode.dev/

---

**Built with ❤️ by Zahoor Farooq**
