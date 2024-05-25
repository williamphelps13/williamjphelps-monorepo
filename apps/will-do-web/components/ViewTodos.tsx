'use client'

import { useQuery } from '@tanstack/react-query'
import TodoCard from 'components/TodoCard'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useState } from 'react'
import {
  getAllTodos,
  getCompletedTodos,
  getNotCompletedTodos,
} from 'services/todos'
import { AccessToken, Todo, ViewMode } from 'types'

const getStoredViewMode = () => {
  const storedViewMode = localStorage.getItem('viewMode')
  return storedViewMode ? (storedViewMode as ViewMode) : 'not-completed'
}

const ViewTodos = ({ accessToken }: { accessToken: AccessToken }) => {
  const [viewMode, setViewMode] = useState<ViewMode>(getStoredViewMode)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('viewMode', viewMode)
  }, [viewMode])

  const debounceSearch = useCallback(
    debounce((nextValue) => setDebouncedSearch(nextValue), 500),
    [],
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(e.target.value)
    debounceSearch(value)
  }

  const getTodos = () => {
    if (viewMode === 'all') {
      return getAllTodos(accessToken, debouncedSearch)
    } else if (viewMode === 'not-completed') {
      return getNotCompletedTodos(accessToken, debouncedSearch)
    } else if (viewMode === 'completed') {
      return getCompletedTodos(accessToken, debouncedSearch)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', accessToken, viewMode, debouncedSearch],
    queryFn: () => getTodos(),
    enabled: !!accessToken,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div
          className="tabs tabs-boxed min-w-72 max-w-md flex-grow shadow-2xl"
          role="tablist"
        >
          <button
            className={`tab ${viewMode === 'not-completed' ? 'tab-active' : ''}`}
            onClick={() => setViewMode('not-completed')}
            role="tab"
          >
            Will do
          </button>
          <button
            className={`tab ${viewMode === 'completed' ? 'tab-active' : ''}`}
            onClick={() => setViewMode('completed')}
            role="tab"
          >
            Done
          </button>
          <button
            className={`tab ${viewMode === 'all' ? 'tab-active' : ''}`}
            onClick={() => setViewMode('all')}
            role="tab"
          >
            All todos
          </button>
        </div>
        <div className="flex flex-grow justify-end gap-4">
          <input
            className="input input-bordered flex-grow md:max-w-sm"
            onChange={handleSearchChange}
            placeholder="Search"
            type="text"
            value={search}
          />
          <label
            className="drawer-button btn btn-primary"
            htmlFor="create-todo-drawer"
          >
            Create todo
          </label>
        </div>
      </div>
      <div className="space-y-2 shadow-2xl">
        {!data?.length && debouncedSearch ?
          <p className="text-lg">No matches to this search</p>
        : !data?.length && !debouncedSearch ?
          <p className="text-lg">
            {viewMode === 'not-completed' ?
              "No 'Will do' todos yet. Create one!"
            : viewMode === 'completed' ?
              "No 'Done' todos. You got this!"
            : 'No todos yet. Create one!'}
          </p>
        : data?.map((todo: Todo) => (
            <TodoCard accessToken={accessToken} key={todo.id} todo={todo} />
          ))
        }
      </div>
    </div>
  )
}

export default ViewTodos
