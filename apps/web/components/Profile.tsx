import { XMarkIcon } from '@heroicons/react/16/solid'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { updatePassword } from 'services/user'
import { AccessToken, UpdatedPassword, UpdatedUser } from 'types'

const useUpdatePassword = (onSuccess: () => void) => {
  const updateMutation = useMutation({
    mutationFn: (obj: {
      accessToken: AccessToken
      updatedPassword: UpdatedPassword
    }) => updatePassword(obj.accessToken, obj.updatedPassword),
    onSuccess: () => {
      if (onSuccess) onSuccess()
    },
  })
  return updateMutation
}

const getStoredEmail = () => {
  const storedEmail = localStorage.getItem('email')
  return storedEmail ? storedEmail : ''
}

const Profile = () => {
  const [accessToken, setAccessToken] = useState<AccessToken>(null)
  const [email, setEmail] = useState(getStoredEmail)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<UpdatedUser>({ defaultValues: { email: email } })

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
    setEmail(localStorage.getItem('email') as string)
  }, [])

  const onSuccess = () => {
    reset()
  }

  const updatePassword = useUpdatePassword(onSuccess)

  const onSubmit: SubmitHandler<UpdatedUser> = (updatedUser) => {
    console.log('updatedUser', updatedUser)
    const updatedPassword: UpdatedPassword = {
      password: updatedUser.currentPassword,
      new_password: updatedUser.newPassword,
    }
    updatePassword.mutate({ accessToken, updatedPassword })
  }
  return (
    <dialog className="modal" id="profile-modal">
      <div className="modal-box">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">My profile</h2>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              className="input input-bordered"
              disabled
              placeholder="Email address"
              type="readonly"
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
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              placeholder="Current password"
              type="password"
              {...register('currentPassword', { required: true })}
            />
            <span className="text-error h-6 px-1">
              {errors.currentPassword && (
                <span className="text-xs">
                  {errors.currentPassword.message}
                </span>
              )}
            </span>
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              placeholder="New password"
              type="password"
              {...register('newPassword', {
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
              {errors.newPassword && (
                <span className="text-xs">{errors.newPassword.message}</span>
              )}
            </span>
          </div>
          <div className="form-control">
            <input
              className="input input-bordered"
              placeholder="Confirm new password"
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value) =>
                  value === watch('newPassword') ||
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
          </div>
          <div className="flex flex-grow justify-end">
            <button className="btn btn-neutral" type="submit">
              Change
            </button>
          </div>
        </form>
      </div>
      <form className="modal-backdrop" method="dialog">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Profile
