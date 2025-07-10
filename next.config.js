/** @type {import('next').NextConfig} */
const { withNetlify } = require("@netlify/next");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // add domains like 'images.unsplash.com' if needed
  },
};

module.exports = withNetlify(nextConfig);
