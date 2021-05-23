const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const customConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer({ ...defaultConfig, ...customConfig});
};