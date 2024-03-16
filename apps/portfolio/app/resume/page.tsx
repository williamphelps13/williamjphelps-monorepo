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

const ResumePage = () => {
  return (
    <main className="space-y-4 px-8 py-4 md:space-y-8 md:px-16 md:py-12">
      <ResumeHeader headerData={headerData} />
      <hr />
      <ResumeTechStack techStackData={techStackData} />
      <hr />
      <ResumeExperience experienceData={experienceData} />
      <hr />
      <ResumeEducation educationData={educationData} />
    </main>
  )
}

export default ResumePage
