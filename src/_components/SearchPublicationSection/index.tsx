import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function SearchPublicationSection() {
  return (
    <section className="mx-auto w-full rounded-[1.375rem] bg-[#E1E1E1] py-[1.5rem]">
      <form role="search">
        <div className="flex items-center gap-[0.5rem] px-4 lg:px-[2.19rem]">
          <Search aria-hidden="true" />
          <h1 className="text-[1.25rem] font-bold">Pesquisa Geral</h1>
        </div>
        <hr className="my-4 h-[0.125rem] bg-[#C2C2C2] lg:my-[1.5rem]" />
        <div className="relative flex flex-col justify-between gap-4 px-4 lg:flex-row lg:px-[2.19rem]">
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
