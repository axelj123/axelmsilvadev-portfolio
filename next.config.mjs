/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },

  compress: true,

  images: {
    domains: ['example.com', 'avatars.githubusercontent.com','github.com','user-images.githubusercontent.com','i.giphy.com'], 
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },

  reactStrictMode: true,

};

export default nextConfig;
