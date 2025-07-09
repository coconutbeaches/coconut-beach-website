# Coconut Beach Resort Website

A modern, responsive website for Coconut Beach Resort built with Next.js 15, TypeScript, and Styled Components. This project features a complete booking system, image galleries, and comprehensive testing infrastructure.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Styled Components** with comprehensive theming system
- **Framer Motion** for smooth animations and transitions
- **React Hook Form** with **Yup** validation for robust form handling
- **Optimized Images** with Next.js Image component (WebP/AVIF support)
- **Responsive Design** with mobile-first approach
- **Accessibility** features with ARIA compliance
- **SEO Optimization** with meta tags and structured data
- **Performance Monitoring** with Lighthouse CI
- **Visual Regression Testing** with Cypress
- **Component Library** with Storybook
- **Pre-commit Hooks** for code quality
- **CI/CD Pipeline** with GitHub Actions

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🛠️ Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd coconut-beach-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_SITE_URL=https://your-site-url.com
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Code Quality
- `npm run lint` - Run ESLint for code linting
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without making changes

### Testing
- `npm run test` - Run unit tests with Vitest
- `npm run test:storybook` - Run Storybook component tests
- `npm run test:e2e` - Run end-to-end tests with Cypress
- `npm run test:e2e:open` - Open Cypress test runner
- `npm run test:visual` - Run visual regression tests
- `npm run test:performance` - Run performance tests
- `npm run test:lighthouse` - Run Lighthouse performance audit
- `npm run test:responsive` - Run responsive design tests
- `npm run test:ui` - Run all UI tests (Storybook + responsive)

### Documentation
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 🏗️ Project Structure

```
coconut-beach-website/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── .husky/                 # Git hooks
├── .storybook/            # Storybook configuration
├── cypress/               # E2E and visual regression tests
├── public/
│   └── images/            # Static images and assets
├── scripts/               # Utility scripts
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/
│   │   ├── api/           # API routes
│   │   ├── bungalows/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # Reusable UI components
│   │   ├── Layout/        # Layout components
│   │   ├── BookingWidget.tsx
│   │   ├── BungalowsCarousel.tsx
│   │   ├── ContactForm.tsx
│   │   ├── HeroSlider.tsx
│   │   └── OptimizedImage.tsx
│   ├── content/           # Content management
│   │   ├── bungalows.json
│   │   └── policies.md
│   ├── hooks/             # Custom React hooks
│   │   ├── useFocusTrap.ts
│   │   ├── useKeyboardNavigation.ts
│   │   └── useScroll.ts
│   ├── lib/               # Utility libraries
│   │   ├── content.ts
│   │   └── images.ts
│   ├── stories/           # Storybook stories
│   └── styles/            # Styling system
│       ├── theme.ts       # Design tokens
│       ├── globalStyles.ts
│       └── responsive.ts
├── next.config.js         # Next.js configuration
├── package.json
├── tailwindcss.config.js
├── tsconfig.json
└── vitest.config.ts
```

## 🎨 Architecture Decisions

### Frontend Architecture
- **Next.js App Router**: Chosen for better performance, built-in SEO optimization, and modern React features
- **TypeScript**: Ensures type safety and better developer experience
- **Styled Components**: Provides component-scoped styling with dynamic theming support
- **Component-driven Development**: Each UI component is isolated, tested, and documented in Storybook

### State Management
- **React Hook Form**: Lightweight form state management with excellent performance
- **Custom Hooks**: Encapsulate complex logic for reusability and testability
- **Context API**: Used sparingly for global state (theme, user preferences)

### Styling Strategy
- **CSS-in-JS**: Styled Components for component-level styling
- **Design System**: Centralized theme with consistent tokens for colors, typography, and spacing
- **Responsive Design**: Mobile-first approach with breakpoint-based media queries
- **Accessibility**: ARIA compliance and keyboard navigation support

### Image Optimization
- **Next.js Image Component**: Automatic optimization, lazy loading, and modern format support
- **WebP/AVIF Support**: Automatic format selection based on browser support
- **Responsive Images**: Multiple sizes generated for different screen densities

### Performance Optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Regular monitoring of bundle sizes
- **Caching Strategy**: Aggressive caching for static assets
- **CDN Integration**: Optimized for Vercel Edge Network

### Testing Strategy
- **Unit Tests**: Vitest for component and utility function testing
- **Integration Tests**: Storybook for component integration testing
- **E2E Tests**: Cypress for user flow testing
- **Visual Regression**: Automated screenshot comparison
- **Performance Tests**: Lighthouse CI for continuous performance monitoring

## 🔧 Environment Variables

### Development (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (Vercel)
```env
NEXT_PUBLIC_API_URL=https://api.coconutbeachresort.com
NEXT_PUBLIC_SITE_URL=https://coconutbeachresort.com
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub:**
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

2. **Configure Vercel Project:**
- Connect GitHub repository
- Set environment variables in Vercel dashboard
- Enable automatic deployments

3. **Environment Variables in Vercel:**
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`
- Any additional API keys or secrets

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔍 Quality Assurance

### Code Quality
- **ESLint**: Configured with Next.js and accessibility rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking
- **Husky**: Pre-commit hooks for quality gates

### Testing Coverage
- Unit tests for all utility functions
- Component tests for UI components
- Integration tests for user flows
- Visual regression tests for UI consistency
- Performance tests for optimization

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast validation

## 🔮 Future Work

### Short-term (Next 1-2 sprints)
- [ ] Implement booking system backend integration
- [ ] Add multi-language support (i18n)
- [ ] Enhanced image gallery with zoom functionality
- [ ] Social media integration
- [ ] Newsletter subscription system

### Medium-term (Next 3-6 months)
- [ ] Progressive Web App (PWA) features
- [ ] Advanced booking calendar with availability
- [ ] Customer review and rating system
- [ ] Integration with payment gateways
- [ ] Admin dashboard for content management
- [ ] Advanced analytics and user tracking

### Long-term (6+ months)
- [ ] Mobile app development (React Native)
- [ ] AI-powered chatbot for customer support
- [ ] Advanced personalization features
- [ ] Integration with hotel management systems
- [ ] Multi-property support
- [ ] Advanced reporting and analytics dashboard

### Technical Improvements
- [ ] Implement micro-frontends architecture
- [ ] Add GraphQL for better API management
- [ ] Implement advanced caching strategies
- [ ] Add monitoring and observability tools
- [ ] Performance optimization with Edge functions
- [ ] Enhanced security with CSP headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run test && npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow the existing code style and patterns
- Write tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the [documentation](./docs)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- All contributors who helped build this project
- Design inspiration from modern resort websites
