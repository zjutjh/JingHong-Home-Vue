import { defineProvider } from "@nuxt/image/runtime";

export default defineProvider({
  getImage(src) {
    try {
      if (!src || typeof src !== "string") {
        console.error("[wechatOpen] Invalid src parameter:", src);
        return { url: "" };
      }

      return {
        url: `https://open.weixin.qq.com/qr/code?username=${src.slice(1)}`
      };
    } catch (error) {
      console.error("[wechatOpen] Error generating image URL:", error);
      return { url: "" };
    }
  }
});
