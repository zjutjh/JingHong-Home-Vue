import { defineProvider } from "@nuxt/image/runtime";

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { baseURL }) {
    try {
      if (!src || typeof src !== "string") {
        console.error("[cubeImage] Invalid src parameter:", src);
        return { url: "" };
      }

      if (!baseURL) {
        try {
          baseURL = useRuntimeConfig().public.cubeBaseURL;
        } catch (error) {
          console.error("[cubeImage] Failed to get runtime config:", error);
          return { url: "" };
        }
      }

      if (!baseURL) {
        console.error("[cubeImage] Missing baseURL configuration");
        return { url: "" };
      }

      return { url: baseURL + encodeURIComponent(src.slice(1)) };
    } catch (error) {
      console.error("[cubeImage] Error generating image URL:", error);
      return { url: "" };
    }
  }
});
