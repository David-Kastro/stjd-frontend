import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import WoodenGavel from '/public/images/wooden-gavel.png'
import TeamGrid, { Member } from '@/_components/TeamGrid'
import TeamBoard, { AttorneysTeam } from '@/_components/TeamBoard'

function Procuradores() {
  const attorneyGeneral: Member = {
    name: 'Paulo Emílio Dantas Nazaré',
    role: 'Procurador Geral',
    image: '/images/profile.jpg',
    bio: 'Paulo Emílio Dantas Nazaré é um profissional dedicado à regulamentação esportiva, atuando como suplente na entidade. Sua experiência no setor jurídico é fundamental para a manutenção da transparência nos processos internos.\n\nEle trabalha ativamente para assegurar que as normas sejam aplicadas corretamente e que os princípios éticos sejam sempre preservados.',
  }

  const teamsData: AttorneysTeam[] = [
    {
      nome: 'Equipe Gabriel Andrade de Santana',
      leader: {
        nome: 'Gabriel Andrade de Santana',
        orgao: 'P - Procuradoria',
        associacao: 'CBF',
        cargo: 'Subprocurador-geral',
        bio: '#Tomale\n\nquer mais? Toma mais',
        avatar: '/images/profile.jpg',
      },
      equipes: [
        {
          nome: 'Anderson da Silva Oliveira',
          orgao: 'P - Procuradoria',
          associacao: 'OAB',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'André Medeiros',
          orgao: 'P - Procuradoria',
          associacao: 'CBF',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'Anderson da Silva Oliveira',
          orgao: 'P - Procuradoria',
          associacao: 'OAB',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'André Medeiros',
          orgao: 'P - Procuradoria',
          associacao: 'CBF',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'Anderson da Silva Oliveira',
          orgao: 'P - Procuradoria',
          associacao: 'OAB',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'André Medeiros',
          orgao: 'P - Procuradoria',
          associacao: 'CBF',
          cargo: 'Procurador',
          bio: 'Procurador',
          avatar: '/images/profile.jpg',
        },
      ],
    },
    {
      nome: 'Equipe Eduardo Araújo Rocha Ximenes',
      leader: {
        nome: 'Eduardo Araújo Rocha Ximenes',
        orgao: 'P - Procuradoria',
        associacao: 'Atletas',
        cargo: 'Subprocurador-Geral',
        bio: 'Sub-procurador',
        avatar: '/images/profile.jpg',
      },
      equipes: [
        {
          nome: 'João Marcos Guimarães Siqueira',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'teste',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'Bárbara Maués Freire',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'Teste',
          avatar: '/images/profile-woman.jpg',
        },
        {
          nome: 'João Marcos Guimarães Siqueira',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'teste',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'Bárbara Maués Freire',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'Teste',
          avatar: '/images/profile-woman.jpg',
        },
        {
          nome: 'João Marcos Guimarães Siqueira',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'teste',
          avatar: '/images/profile.jpg',
        },
        {
          nome: 'Bárbara Maués Freire',
          orgao: 'P - Procuradoria',
          associacao: 'Clubes',
          cargo: 'Procurador',
          bio: 'Teste',
          avatar: '/images/profile-woman.jpg',
        },
      ],
    },
  ]

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
            teamsData={[{ title: 'Procuradoria', members: [attorneyGeneral] }]}
            hideDividers
          />
          <TeamBoard teamsData={teamsData} />
        </div>
      </section>
    </>
  )
}

export default Procuradores
