This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Styled Components** for styling with theme support
- **Framer Motion** for animations
- **React Hook Form** with **Yup** validation
- **React Slick** for carousels
- **Date-fns** for date handling
- **ESLint** and **Prettier** for code quality
- **Husky** and **lint-staged** for pre-commit hooks
- **Sass** support
- Absolute imports configured with `@/` prefix

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coconut-beach-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── styles/                 # Global styles and theme
│   ├── theme.ts           # Styled-components theme
│   ├── globalStyles.ts    # Global CSS-in-JS styles
│   └── styled.d.ts        # TypeScript definitions
└── ...
```

## Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Styling

This project uses styled-components with a comprehensive theme system. The theme includes:

- Color palette
- Typography settings
- Breakpoints for responsive design
- Shadow presets
- Spacing system

## Form Validation

Forms are built using react-hook-form with Yup schema validation for robust form handling and validation.

## Image Optimization

Use Next.js built-in Image component for optimized images with automatic WebP conversion, lazy loading, and blur placeholders.

## Pre-commit Hooks

Husky and lint-staged are configured to run linting and formatting checks before commits to ensure code quality.

## Visual Testing

For visual regression testing, consider using:
- Figma frames for design reference
- PixelPerfect browser extension for pixel-perfect comparisons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
