import { dateTimeFormat } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import PublicationsCarousel from '../PublicationsCarousel'
import ListEditais from '../ListEditais'
import SearchNewsSection from '../SearchNewsSection'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import { Edital, News, Publication } from '@/lib/types'
import SearchPublicationSection from '../SearchPublicationSection'
import { MarkedContent } from '../marked-content'

interface Props {
  articleData: News | Publication
  readMoreData: News[] | Publication[]
  editais: Edital[]
}

function Article({ articleData, editais, readMoreData }: Props) {
  return (
    <main className="mt-24">
      <section className="container flex items-stretch justify-center gap-5 border-l border-border">
        <article className="flex w-1/2 flex-col gap-16 rounded-[1.375rem] bg-[#E1E1E1] p-8">
          <Image
            src={articleData.imagem.url}
            alt={articleData.imagem.name}
            width={810}
            height={456}
            className="aspect-video w-full rounded-[1.25rem]"
          />
          <div className="flex flex-col gap-4">
            <h1 className="h1 relative before:absolute before:left-[-1rem] before:top-2 before:my-auto before:h-[90%] before:w-[5px] before:rounded-full before:bg-secondary lg:before:left-[-1.05rem] lg:before:max-h-7">
              {articleData.headline}
            </h1>
            <p className="text-sm font-normal leading-4 text-[#A1A1A1]">
              {dateTimeFormat(articleData.data_publicacao)}
            </p>

            <MarkedContent content={articleData.corpo} />
          </div>
        </article>
        <aside className="flex w-1/2 flex-col gap-16">
          {readMoreData.length > 0 && (
            <section className="relative rounded-[1.375rem] bg-[#E1E1E1] py-4">
              <PublicationsCarousel
                articles={readMoreData}
                itemsPerSlide={4}
                gridCustomClass="grid-cols-1"
                controlsCustomClass="right-2 top-8"
                type={articleData.tipo === 'Notícia' ? 'Notícia' : 'Publicação'}
              />
            </section>
          )}
          {editais.length > 0 && (
            <section className="px-8">
              <ListEditais editais={editais} />
            </section>
          )}
        </aside>
      </section>
      <section className="container border-l border-border pb-16 pt-12">
        <hr className="mb-12 h-[0.125rem] rounded-full border-0 bg-secondary" />
        {articleData.tipo === 'Notícia' ? (
          <SearchNewsSection />
        ) : (
          <SearchPublicationSection />
        )}
      </section>
      <hr className="h-[0.125rem] rounded-full border-0 bg-border" />
      <section className="container border-l border-border">
        <div className="py-[7.94rem]">
          <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
        </div>
      </section>
    </main>
  )
}

export default Article
