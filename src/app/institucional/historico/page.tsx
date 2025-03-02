import CardTopPage from '@/_components/CardTopPage'
import TeamGrid from '@/_components/TeamGrid'
import React from 'react'
import Clock from '/public/images/clock.png'

function Historico() {
  const teams: any = [
    {
      title: '',
      members: [
        {
          name: 'LUÍS OTÁVIO VERÍSSIMO TEIXEIRA',
          role: 'Presidente',
          institution: 'Atletas',
          image: '/images/profile.jpg',
          bio: 'Luís Otávio Veríssimo Teixeira possui ampla experiência na gestão esportiva, atuando há anos no setor. Como presidente, ele lidera iniciativas estratégicas para o desenvolvimento da entidade e aprimoramento das políticas internas.\n\nAlém de sua atuação institucional, ele é reconhecido por sua capacidade de articulação entre diferentes segmentos do esporte. Seu trabalho visa fortalecer as relações entre atletas, clubes e federações, promovendo um ambiente de maior transparência e profissionalismo.',
        },
        {
          name: 'MAXWELL BORGES DE MOURA VIEIRA',
          role: 'Vice Presidente',
          institution: 'Atletas',
          image: '/images/profile.jpg',
          bio: 'Maxwell Borges de Moura Vieira é um dos principais responsáveis pela gestão da entidade, ocupando o cargo de vice-presidente. Ele desempenha um papel fundamental na definição de estratégias e na implementação de projetos voltados ao desenvolvimento do esporte.\n\nCom uma trajetória consolidada na área esportiva, Maxwell tem se destacado pela sua visão inovadora e por seu compromisso com a integridade e o crescimento sustentável das competições e dos atletas.',
        },
        {
          name: 'RODRIGO AMACHE',
          role: 'Vice Presidente Administrativo',
          institution: 'Árbitros',
          image: '/images/profile.jpg',
          bio: 'Rodrigo Amache atua na coordenação administrativa da entidade, sendo responsável pela estruturação dos processos internos e pela supervisão de diferentes áreas, incluindo a arbitragem.\n\nSeu trabalho é essencial para garantir que a entidade funcione de maneira eficiente, promovendo melhorias contínuas na gestão dos recursos e na capacitação dos profissionais envolvidos no esporte.',
        },
        {
          name: 'LUIZ FELIPE BLUM ALVES FERREIRA',
          role: 'Diretor de ENAJD',
          institution: 'Clubes',
          image: '/images/profile.jpg',
          bio: 'Luiz Felipe Blum Alves Ferreira desempenha um papel central como Diretor da Escola Nacional da Justiça Desportiva (ENAJD). Sua experiência e conhecimento jurídico são fundamentais para a evolução das práticas disciplinares no esporte.\n\nAlém de seu trabalho na ENAJD, ele também atua como Corregedor da Região Nordeste, garantindo que as normas e regulamentos sejam aplicados de forma justa e eficaz em todo o território.',
        },
        {
          name: 'Sérgio Henrique Furtado Coelho Filho',
          role: 'Corregedor Região Sudeste',
          institution: 'OAB',
          image: '/images/profile.jpg',
          bio: 'Sérgio Henrique Furtado Coelho Filho é um advogado altamente qualificado com atuação em direito desportivo e regulatório. Como corregedor da Região Sudeste, ele assegura o cumprimento das diretrizes disciplinares e jurídicas dentro do setor esportivo.\n\nSua atuação é pautada na ética e na transparência, contribuindo para um ambiente mais equilibrado e justo para todas as partes envolvidas nas competições.',
        },
      ],
    },
  ]

  return (
    <>
      <section id="#members">
        <CardTopPage
          title="Auditores"
          description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
          image={Clock}
          height="lg:h-[28.875rem]"
          scrollTo="#members"
          customClassImage="-right-20 top-[-8rem] max-w-[45rem]"
        />
        <hr className="mb-0 mt-20 h-[0.125rem] w-full bg-border" />
      </section>
      <section
        id="members"
        className="container relative pt-6 lg:ml-auto lg:mr-[unset] lg:pl-8 min-[2000px]:mr-auto"
      >
        <h1 className="h1 relative before:absolute before:inset-y-0 before:left-[-1rem] before:my-auto before:h-[90%] before:w-[5px] before:rounded-full before:bg-secondary lg:before:left-[-1.05rem]">
          Antigos Membros
        </h1>
        <div className="mt-24">
          <TeamGrid teamsData={teams} />
        </div>
      </section>
    </>
  )
}

export default Historico
