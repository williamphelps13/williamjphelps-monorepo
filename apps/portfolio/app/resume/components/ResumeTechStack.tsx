const techStack = [
  'JavaScript',
  'TypeScript',
  'React / Next.js',
  'Svelte / SvelteKit',
  'REST',
  'Cypress',
  'Jest',
  'Storybook',
  'CSS / SCSS / Tailwind',
  'UI / UX',
  'Figma',
  'Git / Github',
]

const ResumeTechStack = () => {
  return (
    <section>
      <h2>Tech Stack</h2>
      <ul>
        {techStack.map((tech) => (
          <li key={tech}>
            <button title={`Learn more about my experience with ${tech}`}>
              {tech}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResumeTechStack
