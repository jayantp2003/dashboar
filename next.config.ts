/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/dashboard", // Replace with your GitHub repo name
  assetPrefix: "/dashboard/",
};

module.exports = nextConfig;
