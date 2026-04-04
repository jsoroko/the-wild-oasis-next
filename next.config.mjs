/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ohqcwxnknquoergtzzae.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
// https://ohqcwxnknquoergtzzae.supabase.co
// /storage/v1/object/public/cabin-images/
// 0.3789972950720025-cabin-002.jpg
