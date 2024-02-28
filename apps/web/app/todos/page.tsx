'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getTodos } from 'services/todos'

type Todo = {
  id?: number
  title: string
  description: string
  complete: boolean
}

const TodosPage = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      queryClient.setQueryData(['accessToken'], accessToken)
    }
  }, [])

  const accessToken: string | undefined = queryClient.getQueryData([
    'accessToken',
  ])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', accessToken],
    queryFn: () => getTodos(accessToken),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1>Todos</h1>
      {data.map((todo: Todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <ul>
            <li>{todo.id}</li>
            <li>{todo.description}</li>
            <li>{todo.complete ? 'Complete' : 'Incomplete'}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TodosPage
