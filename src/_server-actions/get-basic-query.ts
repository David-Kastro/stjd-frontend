'use server'

/**
 * @typedef {Object} Filters
 * @property {string | string[] | undefined} [categoria]
 * @property {string | string[] | undefined} [ano]
 * @property {string | string[] | undefined} [mes]
 * @property {string | string[] | undefined} [tipo]
 */

export type BasicFilters = {
  titulo?: string
  categoria?: string
  ano?: string
  mes?: string
  tipo?: string
  id?: string
  documentId?: string
  slug?: string
}

export async function getBasicQuery(
  filters: BasicFilters,
  queryOverride?: Record<string, any>,
) {
  const filterYear = filters.ano
    ? filters.ano
    : filters.mes
      ? new Date().getFullYear()
      : null

  let start = filterYear ? `${filterYear}-01-01` : null
  let end = filterYear ? `${Number(filterYear) + 1}-01-01` : null

  if (filters.mes) {
    const monthPlusOne = Number(filters.mes) + 1
    const nextMonth = monthPlusOne > 12 ? 1 : monthPlusOne
    const necessaryZero = nextMonth < 10 ? '0' : ''
    const year = Number(filterYear)
    const nextYear = monthPlusOne > 12 ? year + 1 : year

    start = `${year}-${filters.mes}-01`
    end = `${nextYear}-${necessaryZero}${nextMonth}-01`
  }

  const queryFilters = {
    ...(filters.categoria ? { categoria: filters.categoria } : {}),
    ...(filters.tipo ? { tipo: filters.tipo } : {}),
    ...(start && end ? { data: { $gte: start, $lt: end } } : {}),
    ...(queryOverride || {}),
    ...(filters.id ? { id: filters.id } : {}),
    ...(filters.documentId ? { documentId: filters.documentId } : {}),
    ...(filters.slug ? { slug: filters.slug } : {}),
    ...(filters.titulo ? { titulo: { $containsi: filters.titulo } } : {}),
  }

  return queryFilters
}
