import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import WoodenGavel from '/public/images/wooden-gavel.png'
import TeamBoard, { AttorneysTeam } from '@/_components/TeamBoard'
import { Member } from '@/lib/types'
import fetchApi from '@/lib/strapi'
import TeamGrid from '@/_components/TeamGrid'

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
      populate: '*',
      pagination: -1,
    },
  })

  return (
    <>
      <section>
        <CardTopPage
          title="Procuradores"
          description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
          image={WoodenGavel}
          height={'28.875rem'}
          scrollTo="#members"
        />
        <hr className="mb-0 mt-20 h-[0.125rem] w-full bg-border" />
      </section>
      <section
        id="members"
        className="container relative pt-6 lg:ml-auto lg:mr-[unset] lg:pl-8 lg:before:absolute lg:before:inset-y-0 lg:lg:before:left-4 lg:before:h-full lg:before:w-[2px] lg:before:bg-border min-[2000px]:mr-auto"
      >
        <h1 className="h1 relative before:absolute before:inset-y-0 before:left-[-1rem] before:my-auto before:h-[90%] before:w-[5px] before:rounded-full before:bg-secondary lg:before:left-[-1.05rem]">
          Membros
        </h1>
        <div className="mt-24">
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
