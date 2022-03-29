/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
require("dotenv").config('./env.local');

module.exports = {
  nextConfig,
  images: {
    domains: ['i.imgur.com'],
  },
  env: {
    MAP_API: process.env.MAP_API
  }
}
