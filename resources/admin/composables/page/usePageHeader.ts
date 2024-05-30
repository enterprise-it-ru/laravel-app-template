import { defineStore } from "pinia";

interface PageHeader {
  title: string | null,
  secondaryText: string | null
}

export const usePageHeader = defineStore('pageHeader', {
  state: (): PageHeader => {
    return {
      title: null,
      secondaryText: null
    }
  }
})
