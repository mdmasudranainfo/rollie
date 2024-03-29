/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://getmicrojobs.com",
    GROUP_ID: "4",
  },
  images: {
    domains: [
      "cdn.shopify.com",
      "flagcdn.com",
      "www.rollienation.com",
      "cld.accentuate.io",
      "cdn-images.farfetch-contents.com",
      "getmicrojobs.com",
      "127.0.0.1",
    ],
  },
};

export default nextConfig;
