import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { withFluid } from '@fluid-tailwind/tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge(withFluid)
  return twMerge(clsx(inputs))
}

export function dateTimeFormat(
  date: Date | string,
  includeTime:
    | {
        includeTime?: boolean
        includeYear?: boolean
      }
    | boolean = true,
) {
  if (includeTime) {
    if (typeof includeTime === 'object') {
      return new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: includeTime.includeYear ? 'short' : 'long',
        year: includeTime.includeYear ? 'numeric' : undefined,
        hour: includeTime.includeTime ? '2-digit' : undefined,
        minute: includeTime.includeTime ? '2-digit' : undefined,
      })
    }
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
