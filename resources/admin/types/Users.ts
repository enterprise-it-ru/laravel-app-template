export interface UserListItem {
  id: number
  name: string
  active: boolean
  email: string
  role: string
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

export interface UserListPage {
  data: UserListItem[]
  current_page: number
  last_page: number
  total: number
  per_page: number
}
