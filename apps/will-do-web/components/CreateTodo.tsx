import { XMarkIcon } from '@heroicons/react/16/solid'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createTodo } from 'services/todos'
import { AccessToken, NewTodo } from 'types'

const useCreateTodo = (onSuccess: () => void) => {
  const queryClient = useQueryClient()
  const createMutation = useMutation({
    mutationFn: (obj: { accessToken: AccessToken; newTodo: NewTodo }) =>
      createTodo(obj.accessToken, obj.newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      if (onSuccess) onSuccess()
    },
  })
  return createMutation
}

const CreateTodo = ({ accessToken }: { accessToken: AccessToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewTodo>()

  const resetForm = () => {
    reset()
  }

  const createTodo = useCreateTodo(resetForm)

  const onSubmit: SubmitHandler<NewTodo> = (newTodo) => {
    createTodo.mutate({ accessToken, newTodo })
  }
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">New to do</h2>
        <label
          className="btn btn-sm btn-circle btn-ghost"
          htmlFor="create-todo-drawer"
        >
          <XMarkIcon className="h-6 w-6" />
        </label>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            className="input input-bordered"
            placeholder="Title"
            type="text"
            {...register('title', {
              required: 'Title is required',
              maxLength: {
                value: 40,
                message: 'Title must be less than 40 characters',
              },
            })}
          />
          <span className="text-error h-6 px-1">
            {errors.title && (
              <span className="text-xs">{errors.title.message}</span>
            )}
          </span>
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            {...register('description', {
              required: 'Description is required',
              maxLength: {
                value: 120,
                message: 'Description must be less than 120 characters',
              },
            })}
          />
          <span className="text-error h-6 px-1">
            {errors.description && (
              <span className="text-xs">{errors.description.message}</span>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <button className="btn" onClick={resetForm}>
            Clear
          </button>
          <button className="btn btn-neutral" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateTodo
