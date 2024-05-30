import { useBreadcrumbs } from './useBreadcrumbs'

export const useBreadcrumbsPreset = () => {
  const { setItems, add } = useBreadcrumbs()

  function users () {
    setItems([
      {
        name: 'Пользователи',
        url: '/admin/users/'
      }
    ])
  }

  return {
    users,
    add
  }
}
