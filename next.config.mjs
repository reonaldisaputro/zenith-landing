import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
{
        protocol: "https",
        hostname: "staging-mifta-digital.my.id",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
domains: ["img.youtube.com"],
  },
 experimental: {
    metadataBase: new URL("https://staging-mifta-digital.my.id"),
  },
};

export default withNextIntl(nextConfig);
