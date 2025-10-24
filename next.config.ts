import stylexPlugin from "@stylexswc/nextjs-plugin";
import type { NextConfig } from "next";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = __dirname;

const withStylex = stylexPlugin({
  rsOptions: {
    aliases: {
      "@/*": [path.join(projectRoot, "src/*")],
    },
    unstable_moduleResolution: {
      type: "commonJS",
    },
    //dev: process.env.NODE_ENV === "development",
    runtimeInjection: false,
    treeshakeCompensation: true,
  },
  extractCSS: false,
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withStylex(nextConfig);
