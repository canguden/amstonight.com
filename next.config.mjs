/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  }
}

export default config
