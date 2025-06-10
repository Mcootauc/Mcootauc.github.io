/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/my-app',
    output: 'export', // tells Next.js to write static files to /out
    // trailingSlash: true // optional but avoids extra Nginx‑style rewrites
};

export default nextConfig;
