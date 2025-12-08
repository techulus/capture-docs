import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.capture.page',
      },
      {
        protocol: 'https',
        hostname: 'edge.capture.page',
      },
    ],
  },
};

export default withMDX(config);
