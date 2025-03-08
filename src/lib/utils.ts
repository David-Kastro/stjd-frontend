import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { withFluid } from '@fluid-tailwind/tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge(withFluid)
  return twMerge(clsx(inputs))
}

export function dateTimeFormat(date: Date | string, includeTime = true) {
  if (includeTime) {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
