import { useBreadcrumbsItems } from './useBreadcrumbsItems'
import type { Breadcrumb } from '../../types/Breadcrumbs'

export const useBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbsItems()

  function setItems (items: Breadcrumb[]) {
    breadcrumbs.items = items
  }

  function reset () {
    setItems([])
  }

  function add (item: Breadcrumb) {
    breadcrumbs.items.push(item)
  }

  return {
    breadcrumbs,
    setItems,
    reset,
    add
  }
}
