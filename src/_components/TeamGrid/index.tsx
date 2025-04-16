'use client'

import { cn } from '@/lib/utils'
import { User, Users } from 'lucide-react'
import React from 'react'
import DialogMemberBio from '../DialogMemberBio'
import { Member } from '@/lib/types'
import CustomImage from '../CustomImage'

type Group = {
  title: string
  members: Member[]
  isGrouped?: boolean
}

export type Team = {
  title: string
  members?: Member[]
  groups?: Group[]
}

interface Props {
  teamsData: Team[]
  splitGroupMembersByRole?: boolean
  hideDividers?: boolean
}

interface RenderMemberProps {
  member: Member
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
  setActiveMember: React.Dispatch<React.SetStateAction<Member | null>>
}

export const PresidentePlaceholder = ({ nome }: { nome: string }) => {
  // Obter as iniciais do nome
  const iniciais = nome
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .substring(0, 2)

  return (
    <div className="flex h-[140px] w-[140px] items-center justify-center rounded-sm bg-[#C4C4C4] shadow-lg lg:h-[165px] lg:w-[165px] lg:shadow-xl">
      {iniciais ? (
        <span className="text-2xl font-semibold text-gray-600 lg:text-4xl">
          {iniciais}
        </span>
      ) : (
        <User className="h-8 text-gray-500 lg:w-8" />
      )}
    </div>
  )
}

const RenderMember: React.FC<RenderMemberProps> = ({
  member,
  setOpenDialog,
  setActiveMember,
}) => {
  const handleClick = () => {
    setActiveMember(member)
    setOpenDialog(true)
  }

  return (
    <div className="col-span-5 lg:col-span-2">
      <div
        className={cn(
          'mb-6 h-[140px] w-[140px] cursor-pointer overflow-hidden rounded-[0.625rem] shadow-xl lg:h-[165px] lg:w-[165px]',
          member.id === 47 && 'rotate-90',
        )}
        onClick={handleClick}
      >
        {member.avatar?.url ? (
          <CustomImage
            src={member.avatar.url}
            alt={`Retrato de ${member.nome}`}
            width={167}
            height={165}
            className="size-full object-cover object-top"
          />
        ) : (
          <PresidentePlaceholder nome={member.nome} />
        )}
      </div>
      <div className="flex flex-col gap-[0.31rem]">
        {member.cargo && (
          <h3
            className="cursor-pointer text-xs font-bold text-secondary lg:text-base"
            onClick={handleClick}
          >
            {member.cargo}
          </h3>
        )}
        <p
          className="max-w-44 cursor-pointer text-sm font-bold uppercase leading-[121%] text-[#3A3A3C] lg:text-base"
          onClick={handleClick}
        >
          {member.nome}
        </p>
        {member.associacao && (
          <p
            className="cursor-pointer text-xs font-bold leading-[0.83688rem] text-[#727272] lg:text-[0.8125rem]"
            onClick={handleClick}
          >
            {member.associacao}
          </p>
        )}
      </div>
    </div>
  )
}

function TeamGrid({
  teamsData: members,
  splitGroupMembersByRole,
  hideDividers,
}: Props) {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [activeMember, setActiveMember] = React.useState<Member | null>(null)

  const getGrouppedMembersByRole = () => {
    return members.map((member) => {
      const splittedGroups = member.groups?.map((group) => {
        const splittedMembers = group.members.reduce(
          (acc, member) => {
            if (member.cargo) {
              acc[0] = [...acc[0], member]
            }
            if (!member.cargo) {
              acc[1] = [...acc[1], member]
            }
            return acc
          },
          [[], []] as Member[][],
        )
        return { ...group, isGrouped: true, members: splittedMembers }
      })
      return splittedGroups
        ? { ...member, groups: [...splittedGroups] }
        : member
    })
  }

  const teams = splitGroupMembersByRole ? getGrouppedMembersByRole() : members

  return (
    <>
      {teams.map((team) => (
        <div
          key={team.title}
          className={cn(
            'relative pb-20 pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-[calc(100%+2rem)] after:bg-border',
            hideDividers && 'after:hidden',
          )}
        >
          <div className="lg:container">
            {team.title && (
              <div className="mb-8 flex items-center gap-1">
                <Users className="h-6 w-6 text-secondary" />
                <h2 className="h2">{team.title}</h2>
              </div>
            )}
            <div className="grid grid-cols-11 gap-x-6 gap-y-12">
              {team.members?.map((member) => (
                <RenderMember
                  key={member.id}
                  member={member}
                  setActiveMember={setActiveMember}
                  setOpenDialog={setOpenDialog}
                />
              ))}
            </div>
          </div>
          {team.groups?.map((group) => (
            <div
              key={group.title}
              className="relative pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-[calc(100%+2rem)] after:bg-border after:last:h-0 [&:not(:last-child)]:pb-20"
            >
              <div className="lg:container">
                <h3 className="mb-7 mt-[0.81rem] text-xl font-semibold leading-[1.23775rem] text-[#000]">
                  {group.title}
                </h3>
                <div
                  className={cn(
                    !group.isGrouped && 'grid grid-cols-11 gap-x-6 gap-y-12',
                  )}
                >
                  {group.members.map((memberGroup, index) =>
                    Array.isArray(memberGroup) ? (
                      <div
                        key={index}
                        className="mb-12 grid grid-cols-11 gap-x-6 gap-y-12 last:mb-0"
                      >
                        {memberGroup.map((member) => (
                          <RenderMember
                            key={member.nome}
                            member={member}
                            setActiveMember={setActiveMember}
                            setOpenDialog={setOpenDialog}
                          />
                        ))}
                      </div>
                    ) : (
                      <RenderMember
                        key={memberGroup.nome}
                        member={memberGroup}
                        setActiveMember={setActiveMember}
                        setOpenDialog={setOpenDialog}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <DialogMemberBio
        activeMember={activeMember}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  )
}

export default TeamGrid
