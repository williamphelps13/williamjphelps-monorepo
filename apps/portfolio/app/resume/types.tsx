export type HeaderData = {
  fullName: string
  headshotImage?: string
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
  image?: string
  location?: string
  date?: string
  title?: string
  descriptions?: string[]
}

export type ExperienceData = Experience[]

type Education = {
  organization?: string
  link?: string
  image?: string
  location?: string
  date?: string
  result?: string
  descriptions?: string[]
}

export type EducationData = Education[]
