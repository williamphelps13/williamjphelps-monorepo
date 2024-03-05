import ResumeHeader from 'app/resume/components/ResumeHeader'
import ResumeEducation from 'app/resume/components/ResumeEducation'
import ResumeExperience from 'app/resume/components/ResumeExperiences'
import ResumeTechStack from 'app/resume/components/ResumeTechStack'

const ResumePage = () => {
  return (
    <main>
      <ResumeHeader />
      <ResumeTechStack />
      <ResumeExperience />
      <ResumeEducation />
    </main>
  )
}

export default ResumePage
