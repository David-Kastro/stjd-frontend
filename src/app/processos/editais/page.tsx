import fetchApi from '@/lib/strapi'
import EditaisTemplate from './editais-template'
import { Edital } from '@/lib/types'
import { BasicFilters, getBasicQuery } from '@/_server-actions/get-basic-query'
import { Metadata } from 'next'

export const revalidate = 10

export const metadata: Metadata = {
  title: 'Editais | STJD | Superior Tribunal de Justiça Desportiva',
  description: 'Editais do Superior Tribunal de Justiça Deportiva',
  keywords: ['stjd', 'editais stjd', 'edital stjd'],
}

const PAGE_SIZE = 10

async function Editais({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const filters = resolvedSearchParams as BasicFilters

  const query = await getBasicQuery(filters)

  const paginaParam = Array.isArray(resolvedSearchParams.pagina)
    ? resolvedSearchParams.pagina[0]
    : resolvedSearchParams.pagina
  const currentPage = Math.max(1, Number(paginaParam) || 1)

  const [editais, meta] = await fetchApi<Edital[]>({
    endpoint: 'notices',
    query: {
      sort: 'data:desc',
      fields: ['id', 'titulo', 'subtitulo', 'tipo', 'data'],
      populate: ['documento'],
      filters: query,
      pagination: {
        pageSize: PAGE_SIZE,
        page: currentPage,
      },
    },
  })

  const pageCount = meta?.pagination?.pageCount ?? 1

  return (
    <EditaisTemplate
      filters={filters}
      editais={editais}
      currentPage={currentPage}
      pageCount={pageCount}
    />
  )
}

export default Editais
