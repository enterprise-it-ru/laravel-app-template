import { usePageHeader } from './usePageHeader'
import { useBreadcrumbs } from './useBreadcrumbs'
import { useBreadcrumbsPreset } from './useBreadcrumbsPreset'

export const usePage = () => {
  const pageHeader = usePageHeader()
  const breadcrumbs = useBreadcrumbs()
  const breadcrumbsPreset = useBreadcrumbsPreset()

  function setTitle (title: string) {
    pageHeader.title = title
  }

  function setSecondaryText (secondaryText: string) {
    pageHeader.secondaryText = secondaryText
  }

  function resetAll () {
    breadcrumbs.reset()
    pageHeader.title = null
    pageHeader.secondaryText = null
  }

  return {
    pageHeader,
    breadcrumbs,
    breadcrumbsPreset,
    setTitle,
    setSecondaryText,
    resetAll
  }
}
