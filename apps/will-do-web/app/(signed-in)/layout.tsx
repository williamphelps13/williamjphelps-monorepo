import Navbar from 'components/Navbar'

type SignedInLayoutProps = {
  children: React.ReactNode
}

const SignedInLayout = ({ children }: SignedInLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-4">{children}</main>
    </>
  )
}

export default SignedInLayout
