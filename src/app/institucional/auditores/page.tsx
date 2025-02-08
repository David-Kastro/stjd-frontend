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
        },
        {
          name: 'MAXWELL BORGES DE MOURA VIEIRA',
          role: 'Vice Presidente',
          institution: 'Atletas',
          image: '/images/profile.jpg',
        },
        {
          name: 'RODRIGO AMACHE',
          role: 'Vice Presidente Administrativo',
          institution: 'Árbitros',
          image: '/images/profile.jpg',
        },
        {
          name: 'LUIZ FELIPE BLUM ALVES FERREIRA',
          role: 'Diretor de ENAJD',
          institution: 'Clubes',
          image: '/images/profile.jpg',
        },
        {
          name: 'Sérgio Henrique Furtado Coelho Filho',
          role: 'Corregedor Região Sudeste',
          institution: 'OAB',
          image: '/images/profile.jpg',
        },
        {
          name: 'MARCO AURÉLIO DE LIMA CHOY',
          role: 'Corregedor Região Sul',
          institution: 'OAB',
          image: '/images/profile.jpg',
        },
        {
          name: 'MARCELO AUGUSTO F. BELLIZZE',
          role: 'Corregedor Região Centro-Oeste',
          institution: 'Clubes',
          image: '/images/profile.jpg',
        },
        {
          name: 'ANTONIETA DA SILVA PINTO',
          role: 'Corregedora Região Norte',
          institution: 'CBF',
          image: '/images/profile-woman.jpg',
        },
        {
          name: 'MARIANA BARROS BARREIRAS',
          role: 'CBF',
          image: '/images/profile-woman.jpg',
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
            },
            {
              name: 'Guilherme Martorelli',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            { name: 'William Figueiredo', image: '/images/profile.jpg' },
            {
              name: 'Carolina Teixeira Ramo',
              image: '/images/profile-woman.jpg',
            },
            {
              name: 'Alcino Júnior de Macedo Guedes',
              image: '/images/profile.jpg',
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
            },
            {
              name: 'Delmiro Dantas Campos Neto',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            {
              name: 'Ana Luiza de Oliveira Rail',
              image: '/images/profile-woman.jpg',
            },
            {
              name: 'Luiz Gabriel Batista Neves',
              image: '/images/profile.jpg',
            },
            {
              name: 'Felipe Tadeu Moreira Lima do Rego Barros',
              image: '/images/profile.jpg',
            },
          ],
        },
        {
          title: '3ª Comissão Disciplinar',
          members: [
            {
              name: 'Adriene Silveira Hassen',
              role: 'Presidente',
              image: '/images/profile-woman.jpg',
            },
            {
              name: 'Rafael Bozzano',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            { name: 'Pedro Gonet Branco', image: '/images/profile.jpg' },
            {
              name: 'George Suetônio Ramalho Júnior',
              image: '/images/profile.jpg',
            },
            { name: 'José Maria Philomeno', image: '/images/profile.jpg' },
          ],
        },
        {
          title: '4ª Comissão Disciplinar',
          members: [
            {
              name: 'Salvio Dino Júnior',
              role: 'Presidente',
              image: '/images/profile.jpg',
            },
            {
              name: 'Caio Carvalho Barros',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            { name: 'Juliana Camões', image: '/images/profile-woman.jpg' },
            { name: 'Gustavo Favero Vaughn', image: '/images/profile.jpg' },
            { name: 'Gabriel Fonseca', image: '/images/profile.jpg' },
          ],
        },
        {
          title: '5ª Comissão Disciplinar',
          members: [
            {
              name: 'Paulo Ronaldo CEO de Carvalho',
              role: 'Presidente',
              image: '/images/profile.jpg',
            },
            {
              name: 'Lucas Brandão',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            { name: 'Raoni Lacerda Vita', image: '/images/profile.jpg' },
            {
              name: 'Renata Baldez Mendonça',
              image: '/images/profile-woman.jpg',
            },
            { name: 'Ramon Rocha Santos', image: '/images/profile.jpg' },
          ],
        },
        {
          title: '6ª Comissão Disciplinar',
          members: [
            {
              name: 'José Cardoso Dutra Júnior',
              role: 'Presidente',
              image: '/images/profile.jpg',
            },
            {
              name: 'Jorge Octavio Lavocat Galvão',
              role: 'Vice Presidente',
              image: '/images/profile.jpg',
            },
            {
              name: 'Aline Gonçalves Jatahy',
              image: '/images/profile-woman.jpg',
            },
            { name: 'Rodrigo Steinmann Bayer', image: '/images/profile.jpg' },
            {
              name: 'Eduardo Xible Salles Ramos',
              image: '/images/profile.jpg',
            },
          ],
        },
      ],
    },
    {
      title: 'Suplentes',
      members: [
        { name: 'Antônio Augusto Pires Brandão', image: '/images/profile.jpg' },
        { name: 'Carlos Eduardo Cardoso', image: '/images/profile.jpg' },
        { name: 'João Gabriel Maffei', image: '/images/profile.jpg' },
        {
          name: 'José Luiz Cavalcanti Ferreira de Souza',
          image: '/images/profile.jpg',
        },
        { name: 'Marcelo Doval Mendes', image: '/images/profile.jpg' },
        { name: 'Mateus Resende Vilela', image: '/images/profile.jpg' },
        { name: 'Pedro Perdiz de Jesus', image: '/images/profile.jpg' },
        { name: 'Thiago Peleja Vizeu Lima', image: '/images/profile.jpg' },
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
