/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['www.southampton.ac.uk', 'www.carpemundi.com.br'],
  },
}
