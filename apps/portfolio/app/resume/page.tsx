'use client'
import 'devicon/devicon.min.css'

import ThemeButton from 'app/common/ThemeButton'
import ResumeHeader from 'app/resume/components/ResumeHeader'
import ResumeEducation from 'app/resume/components/ResumeEducation'
import ResumeExperience from 'app/resume/components/ResumeExperiences'
import ResumeTechStack from 'app/resume/components/ResumeTechStack'

import {
  educationData,
  experienceData,
  headerData,
  techStackData,
} from 'app/resume/data'

const ResumePage = () => {
  return (
    <main className="container mx-auto px-8 py-16 dark:bg-gray-800 dark:text-white">
      <ThemeButton />
      <ResumeHeader headerData={headerData} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeTechStack techStackData={techStackData} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeExperience experienceData={experienceData} />
      <hr className="my-8 border border-gray-500 lg:my-16" />
      <ResumeEducation educationData={educationData} />
    </main>
  )
}

export default ResumePage
