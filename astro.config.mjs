// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://kyoma102.github.io" : undefined,
  base: isProd ? "/my-blog" : undefined,
});
