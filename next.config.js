/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      worker_threads: false,
    };
    config.module.rules.push(
      {
        test: /\.txt$/i,
        use: 'raw-loader'
      },
      {
        test: /\.xml$/i,
        use: 'raw-loader'
      }
    );

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig