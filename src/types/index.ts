import type { ReactNode } from "react"

export interface Section {
  id: string
  title?: string | null
  subtitle?: ReactNode
  content?: string | null
  showButton?: boolean
  buttonText?: string
  isHero?: boolean
  isContacts?: boolean
}

export interface SectionProps extends Section {
  isActive: boolean
}
