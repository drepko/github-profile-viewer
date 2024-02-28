/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'shared-lib', 'config'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
