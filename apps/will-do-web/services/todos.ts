import { NewTodo,Todo } from 'types'

export const getAllTodos = async (accessToken: string | null, search: string) => {
  const encodedSearch = encodeURIComponent(search);
  const url = `http://127.0.0.1:8000/todos?search=${encodedSearch}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`);
  }

  return await response.json();
}

export const getCompletedTodos = async (accessToken: string | null, search: string) => {
  const encodedSearch = encodeURIComponent(search);
  const response = await fetch(`http://127.0.0.1:8000/todos/?completed=true&search=${encodedSearch}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`);
  }

  return await response.json();
}

export const getNotCompletedTodos = async (accessToken: string | null, search: string) => {
  const encodedSearch = encodeURIComponent(search);
  const response = await fetch(`http://127.0.0.1:8000/todos/?completed=false&search=${encodedSearch}`, {
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

export const updateTodo = async (accessToken: string | null, updatedTodo: Todo) => {
  const response = await fetch(`http://127.0.0.1:8000/todo/${updatedTodo.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
}

export const deleteTodo = async (accessToken: string | null, id: number) => {
  const response = await fetch(`http://127.0.0.1:8000/todo/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
}


export const createTodo = async (accessToken: string | null, newTodo: NewTodo) => {
  const response = await fetch('http://127.0.0.1:8000/todo', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...newTodo, complete: false}),
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
}

