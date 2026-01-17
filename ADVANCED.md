# 📚 Advanced Features & Best Practices

## Performance Optimization Techniques

### 1. Image Optimization

```jsx
import Image from 'next/image';

// ✅ Good - Uses Next.js Image optimization
<Image
  src={image}
  alt="Description"
  width={600}
  height={400}
  priority={true}  // For above-the-fold images
  loading="lazy"   // For below-the-fold
/>

// ❌ Bad - Regular HTML img tag
<img src={image} alt="Description" />
```

### 2. Component Code Splitting

```jsx
import dynamic from "next/dynamic";

// Only loads component when needed
const AnimatedComponent = dynamic(() => import("./AnimatedComponent"), {
  loading: () => <div>Loading...</div>,
});
```

### 3. Async Components

```jsx
// Server-side rendering of async data
export default async function MyComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

---

## SEO Best Practices

### 1. Meta Tags

```jsx
export const metadata = {
  title: "Page Title - Site Name",
  description: "Unique description (150-160 chars)",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    image: "og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
  },
};
```

### 2. Structured Data

```jsx
// Add in layout or page component
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  jobTitle: "DevOps Engineer",
  image: "profile.jpg",
};
```

### 3. XML Sitemap

```js
// src/app/sitemap.js
export default function sitemap() {
  return [
    { url: "https://domain.com", priority: 1 },
    { url: "https://domain.com/about", priority: 0.8 },
  ];
}
```

---

## Database Integration Patterns

### Appwrite Query Examples

```javascript
import { Query } from "appwrite";

// Get all projects with specific fields
const response = await database.listDocuments(databaseId, collectionId, [
  Query.select(["title", "description"]),
]);

// Filter by status
[Query.equal("status", ["published"])][
  // Sort by date
  Query.orderDesc("createdAt")
][
  // Paginate results
  (Query.limit(10), Query.offset(0))
];
```

### Error Handling Pattern

```javascript
try {
  const data = await fetchData();
  setData(data);
  setError(null);
} catch (err) {
  console.error("Error:", err);
  setError("User-friendly error message");
  setData(fallbackData);
} finally {
  setLoading(false);
}
```

---

## Form Validation with Zod

### Basic Schema

```jsx
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "Name too short"),
  message: z.string().min(10, "Message too short"),
});

// In component
const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { email: "", name: "", message: "" },
});
```

### Custom Validation

```jsx
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
```

---

## Animation Patterns with Framer Motion

### 1. Scroll-triggered Animations

```jsx
import { motion, useInView } from "framer-motion";

export function AnimatedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

### 2. Staggered Children

```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" animate="visible">
  {items.map((i) => (
    <motion.div key={i} variants={item} />
  ))}
</motion.div>;
```

---

## Dark Mode Implementation

### Tailwind Dark Mode

```jsx
// In tailwind.config.js
darkMode: ("class", // Uses 'dark' class on html element
  (
    // In components
    <div className="bg-light dark:bg-dark text-dark dark:text-light">
      Content
    </div>
  ));
```

### Theme Switcher Hook

```jsx
// src/components/hooks/useThemeSwitcher.jsx
import { useEffect, useState } from "react";

export default function useThemeSwitcher(defaultMode) {
  const [mode, setMode] = useState(defaultMode);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
}
```

---

## API Routes (if needed)

### Create API Route

```javascript
// src/app/api/contact/route.js
export async function POST(request) {
  try {
    const data = await request.json();

    // Validate data
    // Process request

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

---

## Deployment Optimization

### Build Configuration

```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ["example.com"],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  productionBrowserSourceMaps: false,
};
```

### Vercel Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_APP_APPWRITE_URL": "@appwrite_url",
    "NEXT_PUBLIC_APP_APPWRITE_PROJECT_ID": "@appwrite_project_id"
  }
}
```

---

## Monitoring & Analytics

### Vercel Speed Insights

```jsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
}
```

### Google Analytics (Optional)

```jsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

---

## Testing Patterns

### Unit Test Example (with Jest)

```javascript
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

### E2E Test Example (with Playwright)

```javascript
import { test, expect } from "@playwright/test";

test("portfolio homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/Zahoor Farooq/);
  await expect(page.locator("header")).toBeVisible();
});
```

---

## Environmental Variables Management

### Development

```bash
.env.local              # Local secrets (not committed)
.env.example            # Template for required vars
```

### Production (Vercel)

1. Go to Project Settings
2. Environment Variables
3. Add `NEXT_PUBLIC_*` and secret vars
4. Redeploy for changes to take effect

---

## Common Optimizations Checklist

- [x] Code splitting with dynamic imports
- [x] Image optimization with Next.js Image
- [x] Meta tags and SEO optimization
- [x] Lazy loading components
- [x] Error boundaries
- [x] Loading states
- [x] Mobile responsiveness
- [ ] Implement caching strategies
- [ ] Add service worker for PWA
- [ ] Set up continuous integration

---

## Resources for Further Learning

### Performance

- [Web Vitals Guide](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/learn/seo/introduction-to-seo)

### Deployment

- [Vercel Best Practices](https://vercel.com/docs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

### Security

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

---

**Your portfolio is now optimized and ready for production!** 🎯✨
