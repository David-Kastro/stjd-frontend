import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import WoodenGavel from '/public/images/wooden-gavel.png'
import Image from 'next/image'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import BgEditais from '/public/images/bg-card-editais.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import TeamGrid, { Team } from '@/_components/TeamGrid'
import fetchApi from '@/lib/strapi'
import { Member } from '@/lib/types'

const orgaoCodes: Record<string, string> = {
  ENJD: 'Escola Nacional de Justiça Desportiva',
}

export const revalidate = 10

async function Correge() {
  const [corregedor] = await fetchApi<Member[]>({
    endpoint: 'members',
    query: {
      populate: {
        avatar: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        cargo: 'Diretor da Escola Nacional',
      },
      sort: 'createdAt:asc',
      pagination: -1,
    },
  })
  const attorneyLeader = corregedor[0]

  const [members] = await fetchApi<Member[]>({
    endpoint: 'members',
    query: {
      populate: {
        avatar: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        cargo: {
          $ne: 'Diretor da Escola Nacional',
        },
      },
      sort: 'createdAt:asc',
      pagination: {
        page: 1,
        pageSize: 200,
      },
    },
  })
  const membersGrouped = () => {
    return Object.keys(orgaoCodes)
      .map((key) => {
        const group = members.filter((member) => member.orgao.startsWith(key))
        console.log('group', group)
        if (!group.length) {
          return null
        }

        return {
          title: '',
          members: group,
        }
      })
      .filter(Boolean) as Team[]
  }

  const teams = membersGrouped()

  return (
    <>
      <section>
        <CardTopPage
          title="Escola Nacional de Justiça Desportiva"
          description="Criada pelo STJD em 2014, a ENAJD como objetivo divulgar a Justiça Desportiva, promover cursos, palestras e publicações, além de buscar maior interação com os tribunais, federações, clubes e advogados."
          image={WoodenGavel}
          scrollTo="#members"
          imagePosition="topRight"
        />
        <hr className="mb-0 mt-20 h-[0.125rem] w-full bg-border" />
      </section>
      <section
        id="members"
        className="min-[2000px]:mr-auto container relative pt-6 lg:ml-auto lg:mr-[unset] lg:pl-8 lg:before:absolute lg:before:inset-y-0 lg:lg:before:left-4 lg:before:h-full lg:before:w-[2px] lg:before:bg-border"
      >
        <h1 className="h1 relative before:absolute before:inset-y-0 before:left-[-1rem] before:my-auto before:h-[90%] before:w-[5px] before:rounded-full before:bg-secondary lg:before:left-[-1.05rem]">
          Membros
        </h1>
        <div className="mt-24">
          <TeamGrid
            teamsData={[{ title: '', members: [attorneyLeader] }]}
            hideDividers
          />
          <TeamGrid teamsData={teams} splitGroupMembersByRole />
        </div>
      </section>
      <section>
        <div className="container relative mt-[6.19rem]">
          <ScaleAttorneys
            title="Estatísticas"
            subtitle="Prestação de Contas"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href="/estatisticas"
          />
        </div>
        <div className="container relative -z-[1] pt-[7.81rem]">
          <div className="pb-[7.94rem]">
            <Image src={LogoBlack} alt="LogoBlack" className="mx-auto" />
          </div>
          <div className="absolute -left-20 bottom-0">
            <Image src={BgFundoMembers} alt="BgFundoMembers" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Correge
