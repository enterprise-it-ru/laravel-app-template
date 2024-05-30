import { useBreadcrumbs } from './useBreadcrumbs'

export const useBreadcrumbsPreset = () => {
  const { setItems, add } = useBreadcrumbs()

  function catalog () {
    setItems([
      {
        name: 'Главная',
        url: '/'
      },
      {
        name: 'Каталог',
        url: '/catalog/'
      }
    ])
  }

  function favourites () {
    setItems([
      {
        name: 'Главная',
        url: '/'
      },
      {
        name: 'Избранное',
        url: '/favourites/'
      }
    ])
  }

  return {
    catalog,
    favourites,
    add
  }
}
