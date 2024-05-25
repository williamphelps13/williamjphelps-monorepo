import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-sea-foam-medium font-sans text-white">
      <header className="mx-auto flex min-w-full max-w-5xl flex-col items-center px-8 pt-8">
        <h1>
          <a
            className="hover:text-lilac-medium flex items-center gap-4 text-xl transition-all"
            href="index.html"
          >
            William Phelps
          </a>
        </h1>
        <nav className="mt-2 flex flex-col items-center gap-2">
          <ul className="flex items-center">
            <li>
              <a
                className="hover:bg-sea-foam-light hover:text-lilac-medium block rounded-md px-6 py-2 font-mono transition-all"
                href="/reusable-react/index.html"
              >
                Component Library
              </a>
            </li>
            <li>
              <a
                className="hover:bg-sea-foam-light hover:text-lilac-medium block rounded-md px-6 py-2 font-mono transition-all"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                href="/resume"
                className="hover:bg-sea-foam-light hover:text-lilac-medium block rounded-md px-6 py-2 font-mono transition-all"
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                className="hover:bg-sea-foam-light hover:text-lilac-medium block rounded-md px-6 py-2 font-mono transition-all"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4"
                href="https://www.linkedin.com/in/williamjphelps/"
                target="_blank"
              >
                <span className="sr-only">My LinkedIn Page</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4"
                href="https://github.com/williamphelps13"
                target="_blank"
              >
                <span className="sr-only">My Github Page</span>
              </a>
            </li>
          </ul>
          <a
            className="bg-lilac-medium hover:bg-lilac-light flex w-28 items-center justify-center rounded-md px-4 py-2 font-mono shadow-sm transition-all hover:shadow-md"
            href="resume.html"
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex flex-col items-center gap-8 px-8 py-16">
          <div className="text-center">
            <h2 className="mb-8 font-mono">
              Hi, my name is
              <div className="font-sans text-4xl">William Phelps.</div>
            </h2>
            <h3 className="mb-16 text-xl">
              I create user interfaces and experiences.
            </h3>
            <div className="flex flex-col gap-4">
              <p>I'm a frontend developer with a fundamentals first focus.</p>
              <p>
                Currently, I'm working in Boulder, Colorado at Coa Solutions.
              </p>
            </div>
          </div>
          <img
            className="w-72 rounded-lg shadow-lg"
            src="./img/headshot.jpg"
            alt="headshot"
          />
        </section>

        <div className="from-sea-foam-light to-lilac-medium h-1 bg-gradient-to-r"></div>

        <section className="bg-deep-sea-foam mx-auto flex flex-col items-center gap-8 px-8 py-16">
          <h2 className="text-xl">My projects</h2>
          <div className="flex flex-col gap-8"></div>
        </section>

        <div className="from-sea-foam-light to-lilac-medium h-1 bg-gradient-to-r"></div>

        <section className="bg-lilac-medium mx-auto flex flex-col items-center gap-4 px-8 py-16">
          <h2 className="text-xl">Contact me</h2>
          <p>
            I'm always interested in hearing about new projects, mentorship
            opportunities, or ways to contribute to our tech community.
          </p>
          <a
            className="rounded-md bg-white px-4 py-2 font-mono text-black transition-all"
            href="mailto:williamphelps13@gmail.com"
          >
            Email me
          </a>
        </section>
      </main>

      <footer className="flex flex-col items-center bg-black py-8 text-white">
        <h2 className="flex flex-col items-center text-xl">
          <div>William Phelps</div>
          <div>&middot;</div>
          <div>Frontend Developer</div>
        </h2>
        <ul className="mb-8 mt-4 flex gap-12">
          <li>
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/williamjphelps/"
              target="_blank"
            >
              <span className="sr-only">My LinkedIn Page</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center"
              href="https://github.com/williamphelps13"
              target="_blank"
            >
              <span className="sr-only">My Github Page</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center"
              href="mailto:williamphelps13@gmail.com"
            >
              <span className="sr-only">Email Me</span>
            </a>
          </li>
        </ul>
        <p>
          <small>&copy; 2023 William Phelps. All rights reserved.</small>
        </p>
      </footer>
    </div>
  )
}

export default Home
