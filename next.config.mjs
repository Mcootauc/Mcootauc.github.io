/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // tells Next.js to write static files to /out
    // trailingSlash: true // optional but avoids extra Nginx‑style rewrites
};

export default nextConfig;
