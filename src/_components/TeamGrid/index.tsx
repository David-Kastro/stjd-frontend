import { cn } from '@/lib/utils'
import { Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export type Member = {
  name: string
  role?: string
  institution?: string
  image: string
}

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

const RenderMember: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="col-span-10 lg:col-span-2">
      <div className="mb-6 h-[165px] w-[167px] overflow-hidden rounded-[0.625rem]">
        <Image
          src={member.image}
          alt={`Retrato de ${member.name}`}
          width={167}
          height={165}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-[0.31rem]">
        {member.role && (
          <h3 className="text-base font-bold text-secondary">{member.role}</h3>
        )}
        <p className="max-w-44 text-base font-bold uppercase leading-[121%] text-[#3A3A3C]">
          {member.name}
        </p>
        {member.institution && (
          <p className="text-[0.8125rem] font-bold leading-[0.83688rem] text-[#727272]">
            {member.institution}
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
  const getGrouppedMembersByRole = () => {
    return members.map((member) => {
      const splittedGroups = member.groups?.map((group) => {
        const splittedMembers = group.members.reduce(
          (acc, member) => {
            if (member.role) {
              acc[0] = [...acc[0], member]
            }
            if (!member.role) {
              acc[1] = [...acc[1], member]
            }
            return acc
          },
          [[], []] as Member[][],
        )
        return { ...{ ...group, isGrouped: true }, members: splittedMembers }
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
            'relative pb-20 pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-screen after:bg-border',
            hideDividers && 'after:hidden',
          )}
        >
          <div className="container">
            <div className="mb-8 flex items-center gap-1">
              <Users className="h-6 w-6 text-secondary" />
              <h2 className="h2">{team.title}</h2>
            </div>
            <div className="grid grid-cols-11 gap-x-6 gap-y-12">
              {team.members?.map((member) => (
                <RenderMember key={member.name} member={member} />
              ))}
            </div>
          </div>
          {team.groups?.map((group) => (
            <div
              key={group.title}
              className="relative pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-screen after:bg-border after:last:h-0 [&:not(:last-child)]:pb-20"
            >
              <div className="container">
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
                          <RenderMember key={member.name} member={member} />
                        ))}
                      </div>
                    ) : (
                      <RenderMember
                        key={memberGroup.name}
                        member={memberGroup}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default TeamGrid
