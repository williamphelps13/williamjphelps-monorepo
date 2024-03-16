import Image from 'next/image'
import company1Image from 'app/resume/images/company-2.jpg'
import company2Image from 'app/resume/images/company-2.jpg'

const experiences = [
  {
    company: 'Webscale Networks',
    image: company1Image,
    link: 'https://www.webscale.com/',
    location: 'Boulder, Colorado',
    date: 'Nov 2021 – Present',
    title: 'Software Engineer',
    descriptions: [
      'Webscale is a cloud platform with a mission to streamline or automate the biggest challenges facing e-commerce companies today by empowering them with prescriptive analytics, performance optimizations, and edge security.',
      'Collaborated with stakeholders, authored requirements, and played a pivotal role in translating designs into robust frontend implementations using Typescript, Svelte, and SCSS, ensuring the delivery of high-quality software.',
    ],
  },
  {
    company: 'Boulder Wine Merchant',
    image: company2Image,
    link: 'https://www.boulderwine.com/',
    location: 'Boulder, Colorado',
    date: 'Feb 2017 – March 2021',
    title: 'Manager, Buyer, and Certified Sommelier',
    descriptions: [
      'Developed my leadership skills and ability to drive revenue through team management and customer satisfaction.',
      'These transferable skills, combined with my technical expertise as a Software Engineer, enable me to deliver exceptional software solutions while prioritizing user satisfaction and business goals.',
    ],
  },
]

const ResumeExperience = () => {
  return (
    <section>
      <h2>Experiences</h2>
      {experiences.map(
        ({ company, link, image, location, date, title, descriptions }) => (
          <article key={`${company}-${date}}`}>
            <h3>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {company}
              </a>
            </h3>
            <Image src={image} alt={`${company}`} width={150} height={150} />
            <p>{location}</p>
            <p>{date}</p>
            <h4>{title}</h4>
            <ul>
              {descriptions?.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </article>
        ),
      )}
    </section>
  )
}

export default ResumeExperience
