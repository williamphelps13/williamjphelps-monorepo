const LoginPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
        <div className="max-w-2xl space-y-8 text-center lg:text-left">
          <h1 className="text-6xl font-bold">Will do</h1>
          <h2 className="text-4xl font-bold">Login</h2>
          <p>
            "Will do" is your go-to app for simplifying your daily tasks,
            offering a user-friendly interface to effortlessly manage your to-do
            list.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="email"
                required
                type="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="password"
                required
                type="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
