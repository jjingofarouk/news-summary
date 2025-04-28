# News Summarizer

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000.svg)](https://news-summarizer.vercel.app) [![GitHub Repo](https://img.shields.io/badge/GitHub_Repo-jjingofarouk/news--summary-181717.svg)](https://github.com/jjingofarouk/news-summary)

**News Summarizer** is a Next.js 14 Progressive Web App (PWA) that transforms news consumption by delivering concise, AI-powered article summaries. Built with TypeScript for type safety, Tailwind CSS for a vibrant gradient UI (#5b21b6 to #9333ea), and Framer Motion for fluid animations, this full-stack project integrates Upstash Redis for caching and Vercel Analytics for performance tracking. Designed to be mobile-first, WCAG-compliant, and globally scalable, News Summarizer empowers users to stay informed efficiently in a fast-paced world.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

News Summarizer combines AI innovation with a user-centric design to deliver a seamless news consumption experience:

- **AI-Powered Summarization**: Generate short, medium, or detailed summaries of articles using advanced AI algorithms.
- **Progressive Web App**: Installable on mobile and desktop with offline support via Next.js 14.
- **Dark Mode**: Toggle between light and dark themes with `next-themes` for enhanced usability.
- **Responsive Design**: Mobile-first UI with Tailwind CSS, ensuring accessibility across devices.
- **Interactive Animations**: Smooth transitions and hover effects powered by Framer Motion.
- **High-Performance Caching**: Fast data retrieval with Upstash Redis.
- **Analytics Integration**: Track usage with Vercel Analytics for performance optimization.
- **WCAG Compliance**: Accessible UI with `@heroicons/react` icons and semantic HTML.
- **Comprehensive Pages**: Includes Home, Features, Pricing, API, Blog, Guides, FAQ, About, Contact, Privacy, and a custom 404 page.

## Screenshots

Explore the UI of News Summarizer through these screenshots, hosted in the repository:

- **Home**: [home.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/home.png)
- **Features**: [features.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/features.png), [features2.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/features2.png)
- **Pricing**: [pricing.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/pricing.png), [pricing2.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/pricing2.png)
- **API**: [api.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/api.png)
- **Blog**: [blog.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/blog.png)
- **Guides**: [guides.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/guides.png)
- **FAQ**: [faq.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/faq.png)
- **About**: [about.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/about.png)
- **Contact**: [contact.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/contact.png), [contact2.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/contact2.png)
- **Privacy**: [privacy.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/privacy.png)
- **404 Page**: [not-found.png](https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/not-found.png)

## Technologies

News Summarizer leverages a modern JavaScript ecosystem:

### Frontend
- **JavaScript**: Core language for dynamic functionality.
- **TypeScript 4.9.4**: Ensures type safety and robust code.
- **React 18.2.0**: Component-based architecture for the UI.
- **Next.js 14**: Server-side rendering, static generation, and PWA support.
- **Tailwind CSS 3.2.4**: Utility-first CSS for responsive, gradient-driven styling (#5b21b6 to #9333ea).
- **Framer Motion 9.0.1**: Smooth animations and transitions.
- **@heroicons/react 2.0.18**: Accessible SVG icons for intuitive UI.
- **next-themes 0.2.1**: Seamless dark mode toggling.
- **react-hot-toast 2.4.0**: Elegant notification system.
- **@next/font 13.1.5**: Loads the Inter font for a modern aesthetic.

### Backend
- **Node.js**: Runtime for server-side logic.
- **Upstash Redis 1.20.0**: High-performance caching for API responses.
- **Vercel Analytics 0.1.8**: Usage tracking for performance optimization.

### Development Tools
- **Prettier 2.8.3**: Code formatting with `prettier-plugin-tailwindcss` 0.2.2.
- **Autoprefixer 10.4.12 & PostCSS 8.4.18**: CSS processing for Tailwind.
- **TypeScript ESLint**: Linting for code quality.
- **Vercel**: Deployment platform with CI/CD pipelines.

## Installation

Follow these steps to set up News Summarizer locally:

### Prerequisites
- **Node.js**: Version 18.x or higher.
- **npm**: Version 8.x or higher (comes with Node.js).
- **Git**: For cloning the repository.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jjingofarouk/news-summary.git
   cd news-summary
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs all dependencies listed in `package.json`.

3. **Set Up Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Add necessary environment variables (e.g., for Upstash Redis or Vercel Analytics). Example:
     ```env
     UPSTASH_REDIS_URL=your_redis_url
     UPSTASH_REDIS_TOKEN=your_redis_token
     NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
     ```
   - Contact the repository owner for specific keys or refer to Upstash and Vercel documentation.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```
   This generates an optimized production build and starts the server.

## Usage

1. **Access the App**:
   - Visit [https://news-summarizer.vercel.app](https://news-summarizer.vercel.app) for the live demo.
   - Or run locally at `http://localhost:3000` after setup.

2. **Summarize Articles**:
   - On the Home page, enter a news article URL in the input field to generate an AI-powered summary.
   - Choose summary length (short, medium, detailed) via settings.

3. **Explore Features**:
   - Navigate to the Features page to learn about summarization, saving, and API integration.
   - Check the Pricing page for plan details (Free, Pro, Enterprise).
   - Visit the Blog, Guides, and FAQ for additional resources.

4. **Contact Support**:
   - Use the Contact page to submit inquiries via the form or connect via social links (Twitter, GitHub, LinkedIn).

5. **API Integration**:
   - Developers can explore the API page for documentation on integrating News Summarizer’s RESTful API.

## Project Structure

```bash
news-summary/
├── public/
│   ├── assets/
│   │   ├── projects-screenshots/
│   │   │   ├── news-summarizer/
│   │   │   │   ├── home.png
│   │   │   │   ├── features.png
│   │   │   │   ├── features2.png
│   │   │   │   ├── pricing.png
│   │   │   │   ├── pricing2.png
│   │   │   │   ├── api.png
│   │   │   │   ├── blog.png
│   │   │   │   ├── guides.png
│   │   │   │   ├── faq.png
│   │   │   │   ├── about.png
│   │   │   │   ├── contact.png
│   │   │   │   ├── contact2.png
│   │   │   │   ├── privacy.png
│   │   │   │   ├── not-found.png
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SlideShow.tsx
│   ├── pages/
│   │   ├── index.tsx        # Home
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   ├── api.tsx
│   │   ├── blog.tsx
│   │   ├── guides.tsx
│   │   ├── faq.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── privacy.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
├── .env.local              # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── prettier.config.js
├── README.md
```

## Contributing

Contributions are welcome! To contribute to News Summarizer:

1. **Fork the Repository**:
   - Click the "Fork" button on [https://github.com/jjingofarouk/news-summary](https://github.com/jjingofarouk/news-summary).

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/news-summary.git
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**:
   - Follow the coding style (Prettier, TypeScript).
   - Ensure WCAG compliance for UI changes.
   - Add tests if applicable (not currently implemented but encouraged).

5. **Commit Changes**:
   ```bash
   git commit -m "Add your feature description"
   ```

6. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**:
   - Go to the original repository and submit a PR with a clear description of your changes.

8. **Code Review**:
   - Address feedback from maintainers to ensure quality.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/jjingofarouk/news-summary/blob/main/LICENSE) file for details.

## Contact

For inquiries, feedback, or support:

- **Email**: [support@news-summarizer.com](mailto:support@news-summarizer.com)
- **GitHub Issues**: [https://github.com/jjingofarouk/news-summary/issues](https://github.com/jjingofarouk/news-summary/issues)
- **Social Links**:
  - Twitter: [https://twitter.com/jjingofarouk](https://twitter.com/jjingofarouk)
  - GitHub: [https://github.com/jjingofarouk](https://github.com/jjingofarouk)
  - LinkedIn: [https://linkedin.com/in/jjingofarouk](https://linkedin.com/in/jjingofarouk)

---

Built with ❤️ by [jjingofarouk](https://github.com/jjingofarouk). Explore the live app at [https://news-summarizer.vercel.app](https://news-summarizer.vercel.app) and join the mission to redefine news consumption!


---

### Notes on README and Code

1. **README Content**:
   - **Comprehensive**: Covers project overview, features, screenshots with full GitHub links, technologies, installation, usage, project structure, contribution guidelines, license, and contact info.
   - **Image Links**: Uses raw GitHub URLs for images (e.g., `https://github.com/jjingofarouk/news-summary/blob/main/public/assets/projects-screenshots/news-summarizer/home.png`), assuming they’re in the `public` folder.
   - **Professional Tone**: Matches the style of modern open-source projects with badges, clear sections, and actionable instructions.
   - **Social Links**: Placeholder Twitter and LinkedIn links for `jjingofarouk`. Update with your actual profiles if different.
   - **Environment Variables**: Mentions `.env.local` for Upstash Redis and Vercel Analytics, with a note to contact the owner for keys (as these are sensitive).

2. **Code Fixes**:
   - Ensured consistency in naming (`News Summarizer` throughout).
   - Fixed URL typo in `live`.
   - Corrected `<SlideShow>` syntax and added relevant images (e.g., `features2.png`, `pricing2.png`, `contact2.png`).
   - Updated `screenshots` array to include new images referenced in slideshows.
   - Improved grammar and flow in descriptions for clarity.

3. **Adding the README**:
   - Save the README content as `README.md` in the root of your `news-summary` repository.
   - Commit and push:
     ```bash
     git add README.md
     git commit -m "Add comprehensive README for News Summarizer"
     git push origin main
     ```

4. **Image Hosting**:
   - Ensure all images listed in `screenshots` exist in `/public/assets/projects-screenshots/news-summarizer/`. If not, take screenshots of the live app (`https://news-summarizer.vercel.app`) and add them.
   - Push images to GitHub:
     ```bash
     git add public/assets/projects-screenshots/news-summarizer/*
     git commit -m "Add screenshot images for News Summarizer"
     git push origin main
     ```

5. **Next Steps**:
   - Verify the live app URL (`https://news-summarizer.vercel.app`) and GitHub repo (`https://github.com/jjingofarouk/news-summary`) are correct.
   - Update social links in the README if needed.
   - Test the app locally (`npm run dev`) to ensure images load correctly in the `<SlideShow>` component.
   - If you need help with specific setup (e.g., environment variables, Vercel deployment), provide more details, and I’ll assist!

Let me know if you need further refinements or additional sections in the README!