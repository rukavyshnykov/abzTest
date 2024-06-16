import { MouseEvent } from 'react'

export const AnchorScroll = (e: MouseEvent<HTMLButtonElement>, id: string) => {
  const element = document.getElementById(id)

  e.preventDefault()
  element && element.scrollIntoView({ behavior: 'smooth' })
}
