export const getTodos = async (accessToken: string | undefined) => {
  const response = await fetch('http://127.0.0.1:8000/', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }

  return await response.json()
}
