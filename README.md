# SunCart - Find Your Simmer Fashion

SunCart is a modern, responsive Next.js e-commerce storefront built to showcase eyewear, summer products, and skincare tips. The application includes product browsing, detailed product pages, authentication, user profiles, and profile updates.

## Key Features

- Responsive storefront layout with navigation, banner, featured products, and skin care tips
- Product catalog loaded from static JSON (`products.json`)
- Product detail pages with price, stock, rating, description, and category
- User authentication using email/password and Google social login via `better-auth`
- Profile page for logged-in users with image, name, and email display
- Profile update form to change user name and avatar URL
- Tailwind CSS, DaisyUI, and `@heroui/react` UI components for polished styling
- MongoDB-based authentication adapter for persistent user sessions

## Technology Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- DaisyUI
- `better-auth` authentication library
- MongoDB for user storage
- `@heroui/react` UI components
- `react-icons`, `react-toastify`, `react-fast-marquee`

## Project Structure

- `src/app/(main)` - Main storefront layout and home page sections
- `src/app/(auth)` - Authentication pages (`/login` and `/register`)
- `src/app/(other)` - Secondary pages like `/products`, `/product/[id]`, `/profile`, and `/updateProfile`
- `src/app/api/auth/[...all]/route.js` - Auth API route powered by `better-auth`
- `src/components` - Reusable UI components and page sections
- `src/lib/auth.js` - Server-side auth configuration for MongoDB and Google
- `src/lib/auth-client.js` - Client-side auth client setup
- `src/lib/fetchJsonData.js` - Data fetch helpers for products and skincare tips
- `public/products.json` - Product catalog data
- `public/skinCare.json` - Summer skin care tips data

## Application Pages

- `/` - Home page with hero banner, popular products, skincare tips, brand section, and footer
- `/products` - Product listing page
- `/product/[id]` - Product detail page for each item
- `/login` - Sign-in page with email/password and Google auth
- `/register` - User registration page
- `/profile` - Logged-in user profile page
- `/updateProfile` - Profile update form to edit name and avatar

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Riadul-Islam-551/B13-A8-Sun-Cart.git
cd sun-cart
```

2. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the app:

```text
http://localhost:3000
```

## Environment Variables

The application requires these environment variables:

- `NEXT_PUBLIC_BASE_URL` - Base URL for client-side fetch requests
- `MONGODB_URI` - MongoDB connection string for auth persistence
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Run the production server after build
- `npm run lint` - Run ESLint checks

## Authentication Details

SunCart uses `better-auth` to handle:

- Email/password registration and login
- Google social login
- Persistent sessions via MongoDB
- Profile updates through the auth client

The auth API is exposed at:

- `POST /api/auth` and `GET /api/auth`

## Notes

- Product and skincare data are loaded from local JSON files in `public/`
- The home layout composes reusable section components like `Banner`, `PopularProducts`, `SkinCareTips`, `Brands`, and `Footer`
- The project uses client-side React components for auth pages and profile updates

## Deployment

This Next.js project is ready for deployment on platforms like Vercel.

1. Build the app:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

> Ensure environment variables are configured in your deployment settings, especially MongoDB and Google OAuth credentials.

## Contributing

If you want to improve SunCart, feel free to:

- Add new product categories
- Enhance the product search experience
- Improve authentication UX and error handling
- Add shopping cart and checkout flows

## License

This repository does not include a license file. Add a license if you intend to share or open-source the application.
