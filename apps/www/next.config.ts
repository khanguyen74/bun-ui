import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/docs',
        destination: '/docs/components',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
