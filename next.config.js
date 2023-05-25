/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/kaylamaeknight.github.io/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
}