/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/personal-portfolio' : '',
    output: 'export', // tells Next.js to write static files to /out
    // trailingSlash: true // optional but avoids extra Nginx‑style rewrites
};

export default nextConfig;
