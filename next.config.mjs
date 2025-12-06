/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    qualities:[100],
    remotePatterns:[
      {
        protocol:'https',
        hostname:"miro.medium.com",
      },
      {
        protocol:'https',
        hostname:"encrypted-tbn0.gstatic.com",
      },
      {
        protocol:'https',
        hostname:"lh3.googleusercontent.com"
      }
    ]
  },
};

export default nextConfig;
