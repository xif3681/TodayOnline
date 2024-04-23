const { join } = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  output: "standalone",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
  serverRuntimeConfig: {
    apiKey:
      "42b1a830e2e42f2bf900a650ce5598c7-22193bd61dcb8fd2aff28c2a7f6560d854ae785f26abb94c1e2dbe5dee6e36929f4eede3544ac7d8",
    appName: "TODAYONLINE",
    appId: "app_dev_0c1a4810ea094ed9aaf0cbd7fec00640",
    host: "https://tripgroup999.com",
    WebSiteName: "TODAYONLINE",
    Logo: "",
    WebSiteDescription: "Blog Service",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
