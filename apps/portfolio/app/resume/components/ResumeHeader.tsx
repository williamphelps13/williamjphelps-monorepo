import Image from 'next/image'
import { HeaderData } from 'app/resume/types'
import {
  AtSymbolIcon,
  ComputerDesktopIcon,
  HomeModernIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { Lobster } from 'next/font/google'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

const ResumeHeader = ({ headerData }: { headerData: HeaderData }) => {
  return (
    <header className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
      {headerData.headshotImage && (
        <Image
          alt={`${headerData?.fullName} Headshot`}
          className="rounded-lg shadow lg:hidden"
          src={headerData?.headshotImage}
          width={80}
        />
      )}
      <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-12">
        <h1 className={`primary-heading ${lobster.className}`}>
          {headerData?.fullName}
        </h1>
        <h2 className="secondary-heading">{headerData?.title}</h2>
      </div>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
        {headerData.headshotImage && (
          <Image
            alt={`${headerData?.fullName} Headshot`}
            className="hidden rounded-xl shadow lg:block"
            src={headerData?.headshotImage}
            width={160}
          />
        )}
        <address className="important-body flex flex-wrap justify-center gap-1 not-italic lg:flex-col lg:gap-2">
          <a
            aria-label={`Google Map of my location - ${headerData?.location}`}
            className="link"
            href="https://maps.app.goo.gl/azE8h8KAhx715SG5A"
            rel="noopener noreferrer"
            target="_blank"
          >
            <HomeModernIcon className="mr-2 inline size-4 lg:mr-4 lg:size-6" />
            {headerData?.location}
          </a>
          <a className="link" href={`tel:+1${headerData?.phone}`}>
            <PhoneIcon className="mr-2 inline size-4 lg:mr-4 lg:size-6" />
            {headerData?.phone}
          </a>
          <a className="link" href={`mailto:${headerData?.email}`}>
            <ComputerDesktopIcon className="mr-2 inline size-4 lg:mr-4 lg:size-6" />
            {headerData?.email}
          </a>
          <a
            aria-label="Link to my LinkedIn account"
            className="link"
            href={`https://${headerData?.linkedin}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <AtSymbolIcon className="mr-2 inline size-4 lg:mr-4 lg:size-6" />
            {headerData?.linkedin}
          </a>
        </address>
      </div>
    </header>
  )
}

export default ResumeHeader
