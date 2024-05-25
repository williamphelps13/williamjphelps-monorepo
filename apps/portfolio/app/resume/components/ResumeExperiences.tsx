import { ExperienceData } from 'app/resume/types'

const ResumeExperience = ({
  experienceData,
}: {
  experienceData: ExperienceData
}) => {
  return (
    <section className="flex flex-col space-y-4 lg:space-y-8">
      <h2 className="section-heading">Experiences</h2>
      {experienceData.map((experience) => (
        <article
          className="space-y-1 lg:space-y-2"
          key={`${experience?.organization}-${experience?.date}}`}
        >
          <div className="flex justify-between gap-2 lg:gap-4">
            <span className="flex gap-4 lg:gap-8">
              <h3 className="tertiary-heading">
                <a
                  className="link rounded p-0"
                  href={experience?.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={`${experience?.organization} website`}
                >
                  {experience.image && (
                    <img
                      src={experience?.image}
                      alt={`${experience?.organization} logo`}
                      height={28}
                    />
                  )}
                  {experience?.organization}
                </a>
              </h3>
              <p className="normal-body leading-7">{experience?.location}</p>
            </span>
            <p className="normal-body leading-7">{experience?.date}</p>
          </div>
          <h4 className="important-body">{experience?.title}</h4>
          <ul className="ml-4 list-disc">
            {experience?.descriptions?.map((description, index) => (
              <li className="normal-body" key={index}>
                {description}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default ResumeExperience
