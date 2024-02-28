'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getTodos } from 'services/todos'

type Todo = {
  id?: number
  title: string
  description: string
  complete: boolean
}

function useTodos() {
  const queryClient = useQueryClient()
  const accessToken: string | undefined = queryClient.getQueryData([
    'accessToken',
  ])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', accessToken],
    queryFn: () => getTodos(accessToken),
  })

  return { data, isLoading, isError }
}

const TodosPage = () => {
  const { data, isLoading, isError } = useTodos()

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
