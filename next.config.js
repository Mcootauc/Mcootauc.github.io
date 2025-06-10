/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // keep static export
    trailingSlash: true, // optional but avoids some 404s on GH Pages
    images: {
        unoptimized: true, // ⬅️  disables the runtime image API
    },
};

module.exports = nextConfig;
