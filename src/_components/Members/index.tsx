import React from 'react'
import { ChevronLeft, Users } from 'lucide-react'

import Image from 'next/image'
import BgFundoMembers from '/public/images/bg-fundo-members.svg'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Member } from '@/lib/types'
import CustomImage from '../CustomImage'
// const members = [
//   {
//     cargo: 'Presidente',
//     nome: 'Luís Otávio Veríssimo Teixeira',
//     foto: '/images/luis-otavio.svg',
//   },
//   {
//     cargo: 'Vice Presidente',
//     nome: 'Maxwell Borges de Moura Vieira',
//     foto: '/images/max-borges.svg',
//   },
//   {
//     cargo: 'Vice Presidente Administrativo',
//     nome: 'Rodrigo Aiache',
//     foto: '/images/max-borges.svg',
//   },
//   {
//     cargo: 'Diretor da ENAJD',
//     nome: 'Luiz Felipe Bulus Alves Ferreira',
//     foto: '/images/max-borges.svg',
//   },
// ]
function Members({
  thinBorder,
  members,
}: {
  thinBorder?: boolean
  members: Member[]
}) {
  return (
    <section
      className={cn(
        'container relative',
        thinBorder && 'border-l border-border',
      )}
    >
      <div
        className={cn(
          'relative z-20 border-[#B0B0B0] pb-[5rem] pt-[4.94rem] lg:border-l-[2px] lg:pb-[7.81rem]',
          thinBorder && 'border-none',
        )}
      >
        <div className="mx-auto max-w-[80.0625rem] rounded-[1.375rem] pt-[3.38rem] lg:bg-[#E1E1E1]">
          <div className="flex items-center gap-[1.5rem] lg:pl-[5rem]">
            <h1 className="flex items-center gap-[0.56rem] text-[1.25rem] font-bold">
              <Users />
              Membros
            </h1>
            <hr className="hidden h-[0.125rem] w-full bg-secondary lg:block" />
          </div>
          <div className="mt-[3.75rem] flex flex-wrap justify-center gap-[1rem] lg:flex-nowrap lg:justify-between lg:gap-0 lg:px-[6.31rem]">
            {members.map((member, index) => (
              <div key={index} className="max-w-[10rem] lg:max-w-[10.4375rem]">
                <div>
                  {member?.avatar ? (
                    <CustomImage
                      src={member.avatar.url}
                      alt={member.nome}
                      width={167}
                      height={167}
                      className="aspect-square w-full transform rounded-[10px] object-cover object-top transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                  ) : (
                    <Image
                      src={'/images/profile.jpg'}
                      alt={member.nome}
                      width={167}
                      height={167}
                      className="aspect-square w-full transform rounded-[10px] object-cover object-top transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                  )}
                  <p className="mt-[1.5rem] text-[0.85rem] font-bold leading-[1.03rem] text-secondary lg:text-base">
                    {member.cargo}
                  </p>
                  <h2 className="mt-[0.31rem] text-[0.85rem] font-bold uppercase leading-[1.21rem] text-[#3A3A3C] lg:text-base">
                    {member.nome}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pb-[3.06rem] lg:justify-end lg:pr-[2.81rem]">
            <Button className="mt-[2.5rem] hidden w-fit items-center gap-[0.56rem] bg-transparent text-[1.25rem] font-bold leading-[1.23775rem] text-black hover:bg-transparent lg:ml-auto lg:flex">
              Veja mais{' '}
              <div className="rotate-180">
                <ChevronLeft />
              </div>
            </Button>
            <Button className="mt-[2.5rem] w-fit items-center gap-[0.56rem] rounded-full bg-black px-[2.34rem] text-[0.93675rem] font-bold leading-[1.23775rem] text-white hover:bg-transparent lg:ml-auto lg:hidden">
              Veja mais
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[12.4rem] -left-20 -z-[1] hidden lg:block">
        <Image src={BgFundoMembers} alt="BgFundoMembers" />
      </div>
    </section>
  )
}

export default Members
