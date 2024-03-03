'use client'

import Profile from 'components/Profile'
import Link from 'next/link'

const Navbar = () => {
  const avatarLetter = localStorage.getItem('email')?.charAt(0) || 'A'
  const signOut = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('accessToken')
  }
  return (
    <nav className="navbar bg-base-100 shadow-2xl">
      <div className="flex-1">
        <Link className="btn btn-ghost text-2xl" href="/todos">
          Will do
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <div
          className="btn btn-ghost btn-circle avatar placeholder"
          role="button"
          tabIndex={0}
        >
          <div className="bg-neutral text-neutral-content w-10 rounded-full text-2xl">
            {avatarLetter}
          </div>
        </div>
        <ul
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          tabIndex={0}
        >
          <li>
            <button
              onClick={() =>
                (
                  document?.getElementById('profile-modal') as HTMLDialogElement
                )?.showModal()
              }
            >
              Profile
            </button>
          </li>
          <li>
            <Link href="/" onClick={() => signOut()}>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
      <Profile />
    </nav>
  )
}

export default Navbar
