import { UpdatedPassword } from 'types'

export const updatePassword = async (accessToken: string | null, updatedPassword: UpdatedPassword) => {
  console.log('updatedPass', updatedPassword)
  const response = await fetch('http://127.0.0.1:8000/user/password', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPassword),
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
}