'use server'

/**
 * @typedef {Object} Filters
 * @property {string | string[] | undefined} [categoria]
 * @property {string | string[] | undefined} [ano]
 * @property {string | string[] | undefined} [mes]
 * @property {string | string[] | undefined} [tipo]
 */

export type BasicFilters = {
  categoria?: string
  ano?: string
  mes?: string
  tipo?: string
}

export async function getBasicQuery(
  filters: BasicFilters,
  queryOverride?: Record<string, any>,
) {
  const filterYear = filters.ano || new Date().getFullYear()

  let start = `${filterYear}-01-01`
  let end = `${Number(filterYear) + 1}-01-01`

  if (filters.mes) {
    const monthPlusOne = Number(filters.mes) + 1
    const nextMonth = monthPlusOne > 12 ? 1 : monthPlusOne
    const necessaryZero = nextMonth < 10 ? '0' : ''
    const year = nextMonth > 12 ? Number(filterYear) + 1 : Number(filterYear)

    start = `${year}-${filters.mes}-01`
    end = `${year}-${necessaryZero}${nextMonth}-01`
  }

  const queryFilters = {
    ...(filters.categoria ? { categoria: filters.categoria } : {}),
    ...(filters.tipo ? { tipo: filters.tipo } : {}),
    ...(start && end ? { data: { $gte: start, $lt: end } } : {}),
    ...(queryOverride || {}),
  }

  return queryFilters
}
