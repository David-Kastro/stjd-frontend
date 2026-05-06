'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  currentPage: number
  pageCount: number
  paramKey?: string
  hash?: string
  className?: string
}

function getPageItems(
  currentPage: number,
  pageCount: number,
): (number | 'ellipsis')[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }

  const items: (number | 'ellipsis')[] = [1]
  if (currentPage > 3) items.push('ellipsis')

  const start = Math.max(2, currentPage - 1)
  const end = Math.min(pageCount - 1, currentPage + 1)
  for (let i = start; i <= end; i++) items.push(i)

  if (currentPage < pageCount - 2) items.push('ellipsis')
  items.push(pageCount)
  return items
}

function Pagination({
  currentPage,
  pageCount,
  paramKey = 'pagina',
  hash,
  className,
}: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (pageCount <= 1) return null

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page <= 1) params.delete(paramKey)
    else params.set(paramKey, String(page))
    const qs = params.toString()
    return `${pathname}${qs ? `?${qs}` : ''}${hash ? `#${hash}` : ''}`
  }

  const isFirst = currentPage <= 1
  const isLast = currentPage >= pageCount

  const itemBase =
    'flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full text-[0.95rem] font-bold shadow-sm transition-colors duration-300 ease-in-out lg:h-[2.75rem] lg:w-[2.75rem]'

  const items = getPageItems(currentPage, pageCount)

  return (
    <nav
      aria-label="Paginação"
      className={cn(
        'my-[2rem] flex items-center justify-center gap-[0.5rem] lg:my-[3rem] lg:gap-[0.75rem]',
        className,
      )}
    >
      <Link
        href={isFirst ? '#' : buildHref(currentPage - 1)}
        aria-label="Página anterior"
        aria-disabled={isFirst}
        tabIndex={isFirst ? -1 : undefined}
        className={cn(
          itemBase,
          'bg-[#E1E1E1] text-[#2E2E2E] hover:bg-white hover:text-[#BD995D]',
          isFirst && 'pointer-events-none opacity-40',
        )}
      >
        <ChevronLeft className="size-5" />
      </Link>

      {items.map((p, idx) =>
        p === 'ellipsis' ? (
          <span
            key={`pagination_ellipsis_${idx}`}
            aria-hidden
            className="flex h-[2.5rem] w-[1.5rem] items-center justify-center text-[0.95rem] font-bold text-[#2E2E2E]"
          >
            …
          </span>
        ) : (
          <Link
            key={`pagination_page_${p}`}
            href={buildHref(p)}
            aria-current={p === currentPage ? 'page' : undefined}
            className={cn(
              itemBase,
              p === currentPage
                ? 'border-[2px] border-[#BD995D] bg-white text-[#2E2E2E]'
                : 'bg-[#E1E1E1] text-[#2E2E2E] hover:bg-white hover:text-[#BD995D]',
            )}
          >
            {p}
          </Link>
        ),
      )}

      <Link
        href={isLast ? '#' : buildHref(currentPage + 1)}
        aria-label="Próxima página"
        aria-disabled={isLast}
        tabIndex={isLast ? -1 : undefined}
        className={cn(
          itemBase,
          'bg-[#E1E1E1] text-[#2E2E2E] hover:bg-white hover:text-[#BD995D]',
          isLast && 'pointer-events-none opacity-40',
        )}
      >
        <ChevronRight className="size-5" />
      </Link>
    </nav>
  )
}

export default Pagination
