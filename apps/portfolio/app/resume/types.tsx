import { StaticImageData } from 'next/image'

export type HeaderData = {
  fullName: string
  headshotImage?: StaticImageData
  title?: string
  location?: string
  phone?: string
  email?: string
  linkedin?: string
}

type TechStack = {
  tech: string
  iconName: string
  outputs?: string[]
}

export type TechStackData = TechStack[]

type Experience = {
  organization?: string
  link?: string
  image?: StaticImageData
  location?: string
  date?: string
  title?: string
  descriptions?: string[]
}

export type ExperienceData = Experience[]

type Education = {
  organization?: string
  link?: string
  image?: StaticImageData
  location?: string
  date?: string
  result?: string
  descriptions?: string[]
}

export type EducationData = Education[]
