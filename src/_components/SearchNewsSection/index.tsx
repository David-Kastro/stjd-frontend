'use client'
import { Search, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BasicFilters } from '@/_server-actions/get-basic-query'

function SearchNewsSection({
  filters,
  hasFilters,
}: {
  filters: BasicFilters
  hasFilters: boolean
}) {
  const [formData, setFormData] = useState({
    ano: filters.ano || 'todos',
    mes: filters.mes || 'todos',
    headline: filters.headline || '',
  })

  // Atualiza o estado quando os filtros mudam (útil para navegação back/forward)
  useEffect(() => {
    setFormData({
      ano: filters.ano || 'todos',
      mes: filters.mes || 'todos',
      headline: filters.headline || '',
    })
  }, [filters.ano, filters.mes, filters.headline])

  const handleResetFilters = () => {
    setFormData({ ano: 'todos', mes: 'todos', headline: '' })
    if (window) {
      window.location.href = '/comunicacao/noticias#pageFilters'
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formDataObj = new FormData(form)

    // Remove campos vazios da URL
    const params = new URLSearchParams()

    const ano = formDataObj.get('ano') as string
    const mes = formDataObj.get('mes') as string
    const headline = formDataObj.get('headline') as string

    if (ano && ano !== 'todos') params.set('ano', ano)
    if (mes && mes !== 'todos') params.set('mes', mes)
    if (headline && headline.trim() !== '')
      params.set('headline', headline.trim())

    const queryString = params.toString()
    const url = queryString
      ? `/comunicacao/noticias?${queryString}#pageFilters`
      : '/comunicacao/noticias#pageFilters'

    window.location.href = url
  }

  return (
    <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
      <div className="mx-auto max-w-[100.0625rem] rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
        <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
          <Search />
          <h1 className="text-[1.25rem] font-bold">Filtrar Notícias</h1>
        </div>
        <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-wrap items-center gap-[0.69rem] px-[2.19rem]"
        >
          <Select
            value={formData.ano}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, ano: value }))
            }
            name="ano"
          >
            <SelectTrigger className="h-[3.75rem] w-full rounded-[0.8125rem] lg:w-[15rem]">
              <SelectValue placeholder="Escolha o Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os anos</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={formData.mes}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, mes: value }))
            }
            name="mes"
          >
            <SelectTrigger className="h-[3.75rem] w-full rounded-[0.8125rem] lg:w-[8.875rem]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os meses</SelectItem>
              <SelectItem value="01">Janeiro</SelectItem>
              <SelectItem value="02">Fevereiro</SelectItem>
              <SelectItem value="03">Março</SelectItem>
              <SelectItem value="04">Abril</SelectItem>
              <SelectItem value="05">Maio</SelectItem>
              <SelectItem value="06">Junho</SelectItem>
              <SelectItem value="07">Julho</SelectItem>
              <SelectItem value="08">Agosto</SelectItem>
              <SelectItem value="09">Setembro</SelectItem>
              <SelectItem value="10">Outubro</SelectItem>
              <SelectItem value="11">Novembro</SelectItem>
              <SelectItem value="12">Dezembro</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-full max-w-[22.375rem]">
            <Input
              name="headline"
              value={formData.headline}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, headline: e.target.value }))
              }
              placeholder="Pesquisar por nome"
              className="h-[3.75rem] w-full rounded-[0.8125rem]"
            />
          </div>

          {hasFilters && (
            <Button type="button" variant="ghost" onClick={handleResetFilters}>
              <X />
              Limpar Filtros
            </Button>
          )}
          <Button
            type="submit"
            className="h-[3.75rem] w-full rounded-[4.625rem] text-[1.25rem] lg:ml-[2rem] lg:w-[15.375rem]"
          >
            Pesquisar
          </Button>
        </form>
      </div>
    </section>
  )
}

export default SearchNewsSection
