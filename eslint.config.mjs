// @ts-check
import zjutjh from "@zjutjh/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  zjutjh({
    prettier: true
  })
);
