const headerData = {
  fullName: 'William Phelps',
  title: 'Software Engineer',
  location: 'Denver, Colorado',
  phone: '7075339586',
  email: 'williamphelps13@gmail.com',
  linkedin: 'linkedin.com/in/williamjphelps',
}

const ResumeHeader = () => {
  const { fullName, title, location, phone, email, linkedin } = headerData
  return (
    <header>
      <h1>{fullName}</h1>
      <h2>{title}</h2>
      <address>
        <p aria-label="location">{location}</p>
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
