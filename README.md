# LaunchBit.in

> The Launchpad for Your Next Big Idea

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)](https://tailwindcss.com/)

LaunchBit is a comprehensive platform that empowers founders to transform their innovative ideas into AI-powered Minimum Viable Products (MVPs). We specialize in building and optimizing products using machine learning, intelligent workflows, and modern development frameworks.

## 🚀 Features

- **AI-Powered MVP Development**: Transform ideas into intelligent, scalable products
- **Workflow Automation**: Streamline business processes with intelligent automation
- **LLM-Driven Applications**: Build applications powered by Large Language Models
- **API Integration**: Seamless integration with third-party services and APIs
- **Architecture Design**: Scalable and maintainable system architecture
- **DevOps Solutions**: Complete deployment and infrastructure management
- **Digital Marketing**: Comprehensive marketing strategies for product launch

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.5** - React framework for production
- **TypeScript 5.0** - Type-safe JavaScript
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Motion** - Animation library for React
- **Clsx** - Utility for constructing className strings

### Backend & APIs
- **Next.js API Routes** - Built-in API functionality
- **Resend** - Email service for contact forms

### Development Tools
- **Prettier** - Code formatting with import sorting
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS post-processor

### Fonts & Icons
- **Geist Sans & Mono** - Modern font family
- **Playfair Display** - Elegant serif font for headings
- **Tabler Icons** - Beautiful icon library

## 📁 Project Structure

```
LaunchBit.in/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo.png
│   ├── meta_image.png
│   └── work/              # Portfolio images
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── [pages]/      # Legal pages (ToS, Privacy, etc.)
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Reviews.tsx
│   │   ├── Services.tsx
│   │   └── Work.tsx
│   ├── lib/              # Utility functions
│   │   ├── seo.ts       # SEO configuration
│   │   └── utils.ts     # Utility functions
│   └── styles/
│       └── globals.css   # Global styles
├── next.config.ts         # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
├── env-example           # Environment variables template
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gargmegham/LaunchBit.git
   cd LaunchBit.in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env-example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette
- **Primary**: Yellow to Amber gradient (`from-yellow-500 to-amber-500`)
- **Background**: Black (`bg-black`)
- **Text**: White with opacity variations
- **Accents**: White with transparency for borders and highlights

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Geist Sans (sans-serif)
- **Code**: Geist Mono (monospace)

### Components
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Glassmorphism effects with backdrop blur
- Animated stars and gradient spotlights

## 🌟 Key Features Breakdown

### Hero Section
- Dynamic animated starfield background
- Gradient spotlight effects
- Responsive typography scaling
- Brand carousel with smooth scrolling
- Call-to-action buttons

### Services Section
- Comprehensive service offerings
- Interactive service cards
- Detailed descriptions of technical capabilities

### Portfolio Section
- Showcase of past work and client projects
- Visual portfolio gallery
- Client testimonials and reviews

### Contact System
- Integrated contact form
- Email service integration with Resend
- Calendly integration for scheduling calls

## 📧 Contact Integration

The contact form uses Resend for email delivery. To set up:

1. Sign up for a [Resend account](https://resend.com)
2. Get your API key
3. Add it to your environment variables
4. Configure the contact form in `src/app/api/contact/route.ts`

## 🔧 Configuration

### SEO Configuration
SEO settings are centralized in `src/lib/seo.ts`:
- Meta tags and Open Graph data
- Twitter Card configuration
- Structured data for search engines
- Canonical URLs

### Next.js Configuration
- Development indicators disabled
- TypeScript strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm run start`
3. Configure your hosting platform to serve the application

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and type checking
6. Submit a pull request

### Code Style
- Follow existing code style and conventions
- Use TypeScript for type safety
- Keep components focused and reusable
- Write descriptive commit messages

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

Please report security vulnerabilities to meghamgarg@gmail.com. See our [Security Policy](SECURITY.md) for more details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Tabler Icons](https://tabler-icons.io/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

- **Email**: meghamgarg@gmail.com
- **Website**: [https://launchbit.in](https://launchbit.in)

---

<div align="center">
  <p>Built with ❤️ by the LaunchBit team</p>
  <p>© 2024 LaunchBit. All rights reserved.</p>
</div>