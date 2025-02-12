import { Search } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function SearchNewsSection() {
  return (
    <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
      <form role="search">
        <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
          <Search aria-hidden="true" />
          <h1 className="text-[1.25rem] font-bold">Pesquisar Notícias</h1>
        </div>
        <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
        <div className="relative flex gap-[0.69rem] px-[2.19rem]">
          <Select>
            <SelectTrigger className="h-[3.75rem] w-[15rem] rounded-[0.8125rem]">
              <SelectValue placeholder="Escolha o Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[3.75rem] w-[8.875rem] rounded-[0.8125rem]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Janeiro">Janeiro</SelectItem>
              <SelectItem value="Fevereiro">Fevereiro</SelectItem>
              <SelectItem value="Março">Março</SelectItem>
              <SelectItem value="Abril">Abril</SelectItem>
              <SelectItem value="Maio">Maio</SelectItem>
              <SelectItem value="Junho">Junho</SelectItem>
              <SelectItem value="Julho">Julho</SelectItem>
              <SelectItem value="Agosto">Agosto</SelectItem>
              <SelectItem value="Setembro">Setembro</SelectItem>
              <SelectItem value="Outubro">Outubro</SelectItem>
              <SelectItem value="Novembro">Novembro</SelectItem>
              <SelectItem value="Dezembro">Dezembro</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-full max-w-[22.375rem]">
            <Input
              placeholder="Pesquisar por nome"
              className="h-[3.75rem] w-full rounded-[0.8125rem]"
            />
          </div>

          <Button className="p ml-auto h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
            Pesquisar
          </Button>
        </div>
      </form>
    </section>
  )
}

export default SearchNewsSection
