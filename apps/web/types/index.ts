export type User = {
  email: string
  password: string
  confirmPassword?: string
}

export type ApiUser = {
  username: string
  password: string
}

export type UpdatedUser = {
  email: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export type UpdatedPassword = {
  password: string
  new_password: string
}

export type AccessToken = string | null

export type Todo = {
  id: number
  title: string
  description: string
  complete: boolean
}

export type NewTodo = {
  title: string
  description: string
}

export type ViewMode = 'all' | 'completed' | 'not-completed'
