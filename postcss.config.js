const path = require("path");
const projectRoot = __dirname;

module.exports = {
  plugins: {
    "@stylexswc/postcss-plugin": {
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      useCSSLayers: true,
      rsOptions: {
        aliases: {
          "@/*": [path.join(projectRoot, "src/*")],
        },
        unstable_moduleResolution: {
          type: "commonJS",
        },
        //dev: process.env.NODE_ENV === "development",
        treeshakeCompensation: true,
        enableMediaQueryOrder: true,
      },
    },
    autoprefixer: {
      flexbox: "no-2009",
    },
    ...(process.env.NODE_ENV === "production" && {
      "postcss-flexbugs-fixes": {},
      "postcss-preset-env": {
        stage: 3,
        features: {
          //"custom-properties": false,
        },
      },
    }),
  },
};
