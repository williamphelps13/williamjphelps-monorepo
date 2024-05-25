'use client'

import CreateTodo from 'components/CreateTodo'
import ViewTodos from 'components/ViewTodos'
import { useEffect, useState } from 'react'
import { AccessToken } from 'types'

const TodosPage = () => {
  const [accessToken, setAccessToken] = useState<AccessToken>(null)

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
  }, [])
  return (
    <div className="drawer drawer-end">
      <input
        className="drawer-toggle"
        id="create-todo-drawer"
        type="checkbox"
      />
      <div className="drawer-content">
        <ViewTodos accessToken={accessToken} />
      </div>
      <div className="drawer-side">
        <label
          aria-label="close sidebar"
          className="drawer-overlay"
          htmlFor="create-todo-drawer"
        ></label>
        <div className="bg-base-200 text-base-content min-h-full w-96 p-4">
          <CreateTodo accessToken={accessToken} />
        </div>
      </div>
    </div>
  )
}

export default TodosPage
