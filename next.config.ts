import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  // Checked separately by the project scripts; avoids Next's duplicate checker on Node 24.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
