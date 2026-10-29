import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Direct model URL aliases from keymotors.in
      { source: '/curvv', destination: '/models/curvv' },
      { source: '/curvv-ev', destination: '/models/curvv-ev' },
      { source: '/nexon', destination: '/models/nexon' },
      { source: '/nexon-ev', destination: '/models/nexon-ev' },
      { source: '/harrier', destination: '/models/harrier' },
      { source: '/harrier-ev', destination: '/models/harrier-ev' },
      { source: '/safari', destination: '/models/safari' },
      { source: '/punch', destination: '/models/punch' },
      { source: '/punch-ev', destination: '/models/punch-ev' },
      { source: '/altroz', destination: '/models/altroz' },
      { source: '/tiago', destination: '/models/tiago' },
      { source: '/tiago-ev', destination: '/models/tiago-ev' },
      { source: '/tigor', destination: '/models/tigor' },
      { source: '/tigor-ev', destination: '/models/tigor-ev' },
      { source: '/sierra', destination: '/models/sierra' },
      { source: '/sierra-ev', destination: '/models/sierra-ev' },
      { source: '/aeris', destination: '/models/aeris' },

      // Direct showroom and service center URL aliases from keymotors.in
      { source: '/showroom-:slug', destination: '/outlets/:slug' },
      { source: '/service-center-:slug', destination: '/outlets/:slug' },
    ];
  },
};

export default nextConfig;
