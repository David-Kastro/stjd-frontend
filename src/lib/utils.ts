import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { withFluid } from '@fluid-tailwind/tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge(withFluid)
  return twMerge(clsx(inputs))
}

function parseDate(date: Date | string): Date {
  if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split('-').map(Number)
    return new Date(year, month - 1, day)
  }
  return new Date(date)
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
  const dateObj = parseDate(date)

  if (includeTime) {
    if (typeof includeTime === 'object') {
      return dateObj.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: includeTime.includeYear ? 'short' : 'long',
        year: includeTime.includeYear ? 'numeric' : undefined,
        hour: includeTime.includeTime ? '2-digit' : undefined,
        minute: includeTime.includeTime ? '2-digit' : undefined,
      })
    }

    return dateObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
