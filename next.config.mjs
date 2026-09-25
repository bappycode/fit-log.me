/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Workout images come from the FitLog API, which hosts them on img.magnific.com
    remotePatterns: [{ protocol: "https", hostname: "img.magnific.com" }],
  },
};

export default nextConfig;
