import { defineStore } from "pinia";
export const usePageStore = defineStore(
  'page',
  {
    state: () => {
      return {
        pageNow: 0,
        oldScrollPosition: 0,
        pageType: 'normal',
      }
    }
  },
)