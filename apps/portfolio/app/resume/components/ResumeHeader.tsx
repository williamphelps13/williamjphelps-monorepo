import Image from 'next/image'
import headshot from 'app/resume/images/headshot.jpg'
import locationImage from 'app/resume/images/location.jpg'

const headerData = {
  fullName: 'William Phelps',
  headshotImage: headshot,
  title: 'Software Engineer',
  location: 'Denver, Colorado',
  locationImage: locationImage,
  phone: '7075339586',
  email: 'williamphelps13@gmail.com',
  linkedin: 'linkedin.com/in/williamjphelps',
}

const ResumeHeader = () => {
  const {
    fullName,
    headshotImage,
    title,
    location,
    locationImage,
    phone,
    email,
    linkedin,
  } = headerData
  return (
    <header>
      <h1>{fullName}</h1>
      <Image
        src={headshotImage}
        alt={`${fullName} Headshot`}
        width={150}
        height={150}
      />
      <h2>{title}</h2>
      <address>
        <p aria-label="location">{location}</p>
        <Image
          src={locationImage}
          alt={`${location}`}
          width={150}
          height={150}
        />
        <a href={`tel:+1${phone}`}>{phone}</a>
        <a href={`mailto:${email}`}>{email}</a>
        <a
          href={`https://${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedin}
        </a>
      </address>
    </header>
  )
}

export default ResumeHeader
