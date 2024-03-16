'use client'

import { TechStackData } from 'app/resume/types'
import { useState } from 'react'

const ResumeTechStack = ({
  techStackData,
}: {
  techStackData: TechStackData
}) => {
  const [projectsVisible, setProjectsVisible] = useState('')

  const visibleTechStack = techStackData.find(
    (techStack) => techStack.tech === projectsVisible,
  )
  return (
    <section className="space-y-4 md:space-y-8">
      <h2 className="section-heading">Tech Stack</h2>
      <ul className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-6 md:gap-y-4">
        {techStackData?.map((techStack) => (
          <li key={techStack.tech}>
            <button
              className={`normal-body flex items-center justify-center rounded-full p-2 shadow outline outline-gray-300 transition-shadow hover:shadow-lg focus-visible:outline-4 focus-visible:outline-neutral-500 md:min-w-40 md:p-4 ${projectsVisible === techStack.tech ? 'outline-4 !outline-blue-500' : ''}`}
              title={`Learn more about my experience with ${techStack.tech}`}
              onClick={() => setProjectsVisible(techStack.tech)}
            >
              {techStack?.iconName && (
                <i
                  className={`devicon-${techStack?.iconName}-plain colored mr-2 text-lg md:mr-4 md:text-2xl`}
                ></i>
              )}
              {techStack.tech}
            </button>
          </li>
        ))}
      </ul>
      {projectsVisible && visibleTechStack && (
        <article className="space-y-1 md:space-y-2">
          <h3 className="tertiary-heading">
            {projectsVisible} — Projects and PRs
          </h3>
          <ul className="ml-4 list-disc">
            {visibleTechStack.outputs?.map((output, index) => (
              <li className="normal-body" key={index}>
                {output}
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  )
}

export default ResumeTechStack
