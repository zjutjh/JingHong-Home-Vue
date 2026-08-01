import { defineProvider } from "@nuxt/image/runtime";

export default defineProvider({
  getImage(src) {
    try {
      if (!src || typeof src !== "string") {
        console.error("[cliQR] Invalid src parameter:", src);
        return { url: "" };
      }

      return {
        url: `https://open-api.cli.im/cli-open-platform-service/v1/labelStyle/create?cliT=B215&cliD=${encodeURIComponent(src)}`
      };
    } catch (error) {
      console.error("[cliQR] Error generating QR code URL:", error);
      return { url: "" };
    }
  }
});
