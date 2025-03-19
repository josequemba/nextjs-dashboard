import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // Keep this outside `redirects`
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/ui/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/:path*', // This covers all sub-routes like /dashboard/invoices, /dashboard/customers
        destination: '/ui/dashboard/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;