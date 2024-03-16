import { XMarkIcon } from '@heroicons/react/20/solid'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo, updateTodo } from 'services/todos'
import { AccessToken, Todo } from 'types'

type TodoCardProps = {
  accessToken: AccessToken
  todo: Todo
}

const TodoCard = ({ accessToken, todo }: TodoCardProps) => {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (obj: { accessToken: AccessToken; updatedTodo: Todo }) =>
      updateTodo(obj.accessToken, obj.updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const onCheck = () => {
    const updatedTodo = { ...todo, complete: !todo.complete }
    updateMutation.mutate({ accessToken, updatedTodo })
  }

  const deleteMutation = useMutation({
    mutationFn: (obj: { accessToken: AccessToken; id: number }) =>
      deleteTodo(obj.accessToken, obj.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const onDelete = () => {
    const id = todo.id
    deleteMutation.mutate({ accessToken, id })
  }

  return (
    <div
      className="card bg-base-100 flex-row items-center shadow-2xl"
      key={todo.id}
    >
      <div className="card-body flex-row items-center gap-8">
        <input
          checked={todo.complete}
          className="checkbox checkbox-lg"
          onChange={onCheck}
          type="checkbox"
        />
        <div className="flex flex-grow flex-col gap-2">
          <h2 className="card-title">{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
        <button className="btn btn-square h-8 min-h-8 w-8" onClick={onDelete}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
export default TodoCard
