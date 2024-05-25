import { EducationData } from 'app/resume/types'

const ResumeEducation = ({
  educationData,
}: {
  educationData: EducationData
}) => {
  return (
    <section className="flex flex-col space-y-4 lg:space-y-8">
      <h2 className="section-heading">Education</h2>
      {educationData.map((education) => (
        <article
          className="space-y-1 lg:space-y-2"
          key={`${education?.organization}-${education?.date}}`}
        >
          <div className="flex justify-between gap-2 lg:gap-4">
            <span className="flex gap-4 lg:gap-8">
              <h3 className="tertiary-heading">
                <a
                  className="link rounded p-0"
                  href={education?.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={`${education?.organization} website`}
                >
                  {education.image && (
                    <img
                      src={education?.image}
                      alt={`${education?.organization} logo`}
                      height={28}
                    />
                  )}
                  {education?.organization}
                </a>
              </h3>
              <p className="normal-body leading-7">{education?.location}</p>
            </span>
            <p className="normal-body leading-7">{education?.date}</p>
          </div>
          <h4 className="important-body">{education?.result}</h4>
          <ul className="ml-4 list-disc">
            {education?.descriptions?.map((description, index) => (
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

export default ResumeEducation
