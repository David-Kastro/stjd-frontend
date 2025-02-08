import CardTopPage from '@/_components/CardTopPage'
import React from 'react'
import WoodenGavel from '/public/images/wooden-gavel.png'
import Image from 'next/image'
import ScaleAttorneys from '@/_components/ScaleAttorneys'
import BgEditais from '/public/images/bg-card-editais.svg'
import LogoBlack from '/public/images/logo-stjd-black.svg'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import TeamGrid, { Team } from '@/_components/TeamGrid'

function Auditores() {
  const teams: Team[] = [
    {
      title: 'Pleno',
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
    {
      title: 'Comissões Disciplinares',
      groups: [
        {
          title: '1ª Comissão Disciplinar',
          members: [
            {
              name: 'Marcelo da Rocha Ribeiro Dantas',
              role: 'Presidente',
              image: '/images/profile.jpg',
              bio: 'Marcelo da Rocha Ribeiro Dantas possui grande experiência em direito desportivo e atua como presidente da 1ª Comissão Disciplinar. Sua liderança é essencial para a análise e julgamento de casos relacionados às competições.\n\nCom uma trajetória consolidada na área, ele trabalha para garantir que as decisões tomadas sejam justas e alinhadas às normas regulamentares do esporte.',
            },
            {
              name: 'Guilherme Martorelli',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
              bio: 'Guilherme Martorelli é especialista em governança esportiva e ética. Como vice-presidente da 1ª Comissão Disciplinar, ele contribui para a manutenção da ordem e do respeito às regras dentro das competições.\n\nSeu conhecimento na área jurídica e sua dedicação ao esporte fazem dele um profissional essencial na estrutura organizacional da entidade.',
            },
          ],
        },
        {
          title: '2ª Comissão Disciplinar',
          members: [
            {
              name: 'Ticiano Figueiredo de Oliveira',
              role: 'Presidente',
              image: '/images/profile.jpg',
              bio: 'Ticiano Figueiredo de Oliveira é um advogado renomado no cenário esportivo, atuando como presidente da 2ª Comissão Disciplinar. Seu trabalho envolve a análise criteriosa de processos e a aplicação das normas do setor.\n\nEle se destaca por sua imparcialidade e comprometimento em manter a justiça dentro do ambiente esportivo, garantindo que todas as decisões sejam embasadas nos regulamentos vigentes.',
            },
          ],
        },
      ],
    },
    {
      title: 'Suplentes',
      members: [
        {
          name: 'Antônio Augusto Pires Brandão',
          image: '/images/profile.jpg',
          bio: 'Antônio Augusto Pires Brandão integra a equipe como suplente, trazendo consigo anos de experiência no direito desportivo. Sua atuação contribui para a estruturação de processos disciplinares eficientes e justos.\n\nCom um olhar atento às normas e regulamentos, ele colabora para o desenvolvimento do setor, sempre buscando aperfeiçoar os mecanismos de governança esportiva.',
        },
        {
          name: 'Carlos Eduardo Cardoso',
          image: '/images/profile.jpg',
          bio: 'Carlos Eduardo Cardoso é um profissional dedicado à regulamentação esportiva, atuando como suplente na entidade. Sua experiência no setor jurídico é fundamental para a manutenção da transparência nos processos internos.\n\nEle trabalha ativamente para assegurar que as normas sejam aplicadas corretamente e que os princípios éticos sejam sempre preservados.',
        },
      ],
    },
  ]

  return (
    <>
      <section>
        <CardTopPage
          title="Auditores"
          description="O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão autônomo, previsto no Código Brasileiro de Justiça Desportiva, custeado pela Confederação Brasileira de Futebol (CBF), que discute as legalidades do futebol no Brasil e julga os acontecimentos do esporte."
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
          <TeamGrid teamsData={teams} splitGroupMembersByRole />
        </div>
      </section>
      <section>
        <div className="container relative mt-[6.19rem]">
          <ScaleAttorneys
            title="Escala de Procuradores 2024"
            subtitle="COMPETIÇÕES PROMOVIDAS PELA CBF"
            height="15.6875rem"
            image={BgEditais}
            textbtn="Saiba Mais"
            href=""
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

export default Auditores
