import { defineProvider } from "@nuxt/image/runtime";

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { baseURL }) {
    try {
      if (!(baseURL ||= useRuntimeConfig().public.cubeBaseURL)) {
        console.error("[cubeImage] Missing baseURL configuration");
        return { url: "" };
      }

      return { url: baseURL + src.slice(1) };
    } catch (error) {
      console.error("[cubeImage] Error generating image URL:", error);
      return { url: "" };
    }
  }
});
