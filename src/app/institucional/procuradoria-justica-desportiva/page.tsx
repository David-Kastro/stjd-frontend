import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import WoodenGavel from '/public/images/wooden-gavel.png'
import TeamBoard, { AttorneysTeam } from '@/_components/TeamBoard'
import { Member } from '@/lib/types'
import fetchApi from '@/lib/strapi'
import TeamGrid from '@/_components/TeamGrid'

export const revalidate = 10

async function Procuradores() {
  const [members] = await fetchApi<Member[]>({
    endpoint: 'members',
    query: {
      populate: {
        avatar: {
          fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
        },
      },
      filters: {
        cargo: 'Procurador-geral',
      },
      pagination: -1,
    },
  })

  const attorneyLeader = members[0]

  const [teams] = await fetchApi<AttorneysTeam[]>({
    endpoint: 'teams',
    query: {
      populate: {
        leader: {
          populate: {
            avatar: {
              fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
            },
          },
        },
        equipes: {
          populate: {
            avatar: {
              fields: ['name', 'url', 'width', 'height', 'size', 'mime'],
            },
          },
        },
      },
      pagination: -1,
    },
  })

  return (
    <>
      <section>
        <CardTopPage
          title="Procuradoria de Justiça Desportiva"
          description="A Procuradoria do STJD atua para garantir a ordem jurídica e a disciplina desportiva no futebol brasileiro. Cabe a Procuradoria analisar os documentos das partidas organizadas pela CBF e formular as denúncias que tramitam no tribunal."
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
        <div className="mt-8 lg:mt-24">
          <TeamGrid
            teamsData={[{ title: 'Procuradoria', members: [attorneyLeader] }]}
            hideDividers
          />
          <TeamBoard teamsData={teams} />
        </div>
      </section>
    </>
  )
}

export default Procuradores
