type ApiUser = {
  username: string
  password: string
}

export const createUser = async (apiUser: ApiUser) => {
  const response = await fetch('http://127.0.0.1:8000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiUser),
  })
  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
  return response.json()
}

export const loginUser = async (apiUser: ApiUser) => {
  const response = await fetch('http://127.0.0.1:8000/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(apiUser),
  })
  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
  return response.json()
}
