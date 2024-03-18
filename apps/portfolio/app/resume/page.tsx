'use client'

import ResumeHeader from 'app/resume/components/ResumeHeader'
import ResumeEducation from 'app/resume/components/ResumeEducation'
import ResumeExperience from 'app/resume/components/ResumeExperiences'
import ResumeTechStack from 'app/resume/components/ResumeTechStack'
import 'devicon/devicon.min.css'

import {
  educationData,
  experienceData,
  headerData,
  techStackData,
} from 'app/resume/data'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'hooks'

const ResumePage = () => {
  const [theme, toggleTheme] = useTheme()
  return (
    <main className="container mx-auto px-8 py-16 dark:bg-gray-800 dark:text-white">
      <button className="link absolute right-2 top-2" onClick={toggleTheme}>
        {theme === 'light' ?
          <MoonIcon className="size-8 lg:size-12" />
        : <SunIcon className="size-8 lg:size-12" />}
      </button>
      <ResumeHeader headerData={headerData} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeTechStack techStackData={techStackData} theme={theme} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeExperience experienceData={experienceData} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeEducation educationData={educationData} />
    </main>
  )
}

export default ResumePage
