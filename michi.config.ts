import type { ServerConfigFactory } from "@michijs/dev-server";

export const config: ServerConfigFactory = () => ({
    esbuildOptions: {
        outdir: "assets/js",
    }
});

export default config;