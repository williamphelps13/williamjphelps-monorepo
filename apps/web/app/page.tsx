'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createUser, loginUser } from 'services/auth'

type User = {
  email: string
  password: string
  confirmPassword?: string
}

const useCreateUser = (onSuccess: () => void) => {
  const queryClient = useQueryClient()
  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.setQueryData(['userEmail'], data.email)
      queryClient.setQueryData(['accessToken'], data.access_token)
      if (onSuccess) onSuccess()
    },
  })
  return createMutation
}

const useLoginUser = (onSuccess: () => void) => {
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(['userEmail'], data.email)
      queryClient.setQueryData(['accessToken'], data.access_token)
      if (onSuccess) onSuccess()
    },
  })
  return loginMutation
}

const CreateOrLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<User>()
  const [createMode, setCreateMode] = useState(true)
  const router = useRouter()

  const onSuccess = () => {
    router.push('/todos')
  }

  const createUser = useCreateUser(onSuccess)
  const loginUser = useLoginUser(onSuccess)

  const onSubmit: SubmitHandler<User> = (user) => {
    const apiUser = {
      username: user.email,
      password: user.password,
    }
    if (createMode) {
      createUser.mutate(apiUser)
    } else {
      loginUser.mutate(apiUser)
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="m-16">
        <div
          className="tabs tabs-boxed border-primary mb-16 border"
          role="tablist"
        >
          <button
            className={`tab ${createMode ? 'tab-active' : ''}`}
            onClick={() => setCreateMode(true)}
            role="tab"
          >
            Create account
          </button>
          <button
            className={`tab ${createMode ? '' : 'tab-active'}`}
            onClick={() => setCreateMode(false)}
            role="tab"
          >
            Login
          </button>
        </div>
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <h1 className="text-6xl font-bold">Will do</h1>
            <p>
              "Will do" is your go-to app for simplifying your daily tasks,
              offering a user-friendly interface to effortlessly manage your
              to-do list.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body gap-0" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="mb-6 text-4xl font-bold">
                {createMode ? 'Create account' : 'Login'}
              </h2>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              <span className="text-error h-6 px-1">
                {errors.email && (
                  <span className="text-xs">{errors.email.message}</span>
                )}
              </span>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  validate: {
                    containsDigit: (value) =>
                      /[0-9]/.test(value) ||
                      'Password must contain at least one digit',
                    containsLower: (value) =>
                      /[a-z]/.test(value) ||
                      'Password must contain at least one lowercase letter',
                    containsUpper: (value) =>
                      /[A-Z]/.test(value) ||
                      'Password must contain at least one uppercase letter',
                  },
                })}
              />
              <span className="text-error h-6 px-1">
                {errors.password && (
                  <span className="text-xs">{errors.password.message}</span>
                )}
              </span>
              {createMode && (
                <>
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Confirm password"
                    type="password"
                    {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: (value) =>
                        value === watch('password') ||
                        'The passwords do not match',
                    })}
                  />
                  <span className="text-error h-6 px-1">
                    {errors.confirmPassword && (
                      <span className="text-xs">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </span>
                </>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  {createMode ? 'Create account' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrLoginPage
