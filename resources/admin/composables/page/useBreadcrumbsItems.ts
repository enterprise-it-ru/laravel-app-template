import type { Breadcrumb } from '../../types/Breadcrumbs'
import { defineStore } from "pinia";

interface UseBreadcrumbsItems {
  items: Breadcrumb[]
}

export const useBreadcrumbsItems = defineStore('breadcrumbs', {
  state(): UseBreadcrumbsItems {
    return {
      items: []
    }
  },
})
