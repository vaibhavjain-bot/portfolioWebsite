// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // ✅ Do not block builds on ESLint errors
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  