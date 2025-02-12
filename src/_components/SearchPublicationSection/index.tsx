import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function SearchPublicationSection() {
  return (
    <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] pb-[1.5rem] pt-[1.44rem]">
      <form role="search">
        <div className="flex items-center gap-[0.56rem] px-[2.19rem]">
          <Search aria-hidden="true" />
          <h1 className="text-[1.25rem] font-bold">Pesquisa Geral</h1>
        </div>
        <hr className="my-[1.5rem] h-[0.125rem] bg-[#C2C2C2]" />
        <div className="relative flex justify-between gap-[0.69rem] px-[2.19rem]">
          <div className="w-full max-w-xl">
            <Input
              placeholder="Procurar..."
              className="h-[3.75rem] w-full rounded-[0.8125rem] pl-4 focus-visible:!outline-none focus-visible:!ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button className="p ml-[4rem] h-[3.75rem] w-[15.375rem] rounded-[4.625rem] text-[1.25rem]">
            Pesquisar
          </Button>
        </div>
      </form>
    </section>
  )
}

export default SearchPublicationSection
