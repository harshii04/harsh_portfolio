/** @type {import('next').NextConfig} */
const withOffline = require("next-offline");
const nextConfig = withOffline({
  reactStrictMode: true,
});

module.exports = nextConfig;
