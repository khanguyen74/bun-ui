import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/docs/components",
        destination: "/docs/components/button",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
