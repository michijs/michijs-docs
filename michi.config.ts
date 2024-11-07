import type { ServerConfigFactory } from "@michijs/dev-server";

export const config: ServerConfigFactory = () => ({
  esbuildOptions: {
    outdir: "jekyll-src/assets/js",
  },
});

export default config;
