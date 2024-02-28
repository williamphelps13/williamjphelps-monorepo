'use client'

import { useQuery } from '@tanstack/react-query'
import { getTodos } from 'services/todos'

type Todo = {
  id?: number
  title: string
  description: string
  complete: boolean
}
const useAllTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}

const TodosPage = () => {
  const { data, isLoading, isError } = useAllTodos()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error displaying todos</div>
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
