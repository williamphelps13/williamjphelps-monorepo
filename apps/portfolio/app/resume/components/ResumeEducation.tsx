import Image from 'next/image'
import education1Image from 'app/resume/images/education-2.jpg'
import education2Image from 'app/resume/images/education-2.jpg'
import education3Image from 'app/resume/images/education-3.jpg'

const education = [
  {
    organization: 'Turing School of Software and Design',
    image: education1Image,
    link: 'https://turing.edu/',
    location: 'Denver, CO',
    year: '2021',
    result:
      'Front End Software Engineer - JavaScript, TypeScript, React, REST, CSS, HTML, Cypress, Git/Github',
    details: [
      '1500hr, 7 month project-based program; collaborated with 1 to 5 team members on 12 projects',
    ],
  },
  {
    organization: 'California State University, Long Beach',
    image: education2Image,
    link: 'https://www.csulb.edu/',
    location: 'Long Beach, CA',
    year: '2013',
    result:
      'Pre-Med earning a Bachelor of Arts in World Literature, Minor in Chemistry; 3.7 GPA',
    details: [
      'Technical Courses Include: Calc I & II, Physics I & II, Gen Chem I & II, O-Chem I & II',
    ],
  },
  {
    organization: 'AWS',
    image: education3Image,
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    year: '2023',
    result: 'Cloud Practitioner Certification',
  },
]

const ResumeEducation = () => {
  return (
    <section>
      <h2>Education and Certifications</h2>
      {education.map(
        ({ organization, link, image, location, result, year, details }) => (
          <article key={`${organization}-${year}}`}>
            <h3>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {organization}
              </a>
            </h3>
            <Image
              src={image}
              alt={`${organization}`}
              width={150}
              height={150}
            />
            <p>{location}</p>
            <p>{year}</p>
            <h4>{result}</h4>
            <ul>
              {details?.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
          </article>
        ),
      )}
    </section>
  )
}

export default ResumeEducation
