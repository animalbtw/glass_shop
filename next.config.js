const path = require("path");
/** @type {import('next').NextConfig} */

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    S3_SECRET_KEY: "3732fe838a21c22eb55a975282596b68",
    S3_ACCESS_KEY: "cy44404",
    NEXT_APP_STRAPI_DOMAIN: "",
    NEXT_APP_BACK_DEV: ""
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: "standalone",
};
