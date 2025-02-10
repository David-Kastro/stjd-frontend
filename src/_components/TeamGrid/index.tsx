"use client";

import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import DialogMemberBio from "../DialogMemberBio";
import { Member } from "@/lib/types";
import CustomImage from "../CustomImage";

type Group = {
  title: string;
  members: Member[];
  isGrouped?: boolean;
};

export type Team = {
  title: string;
  members?: Member[];
  groups?: Group[];
};

interface Props {
  teamsData: Team[];
  splitGroupMembersByRole?: boolean;
  hideDividers?: boolean;
}

interface RenderMemberProps {
  member: Member;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMember: React.Dispatch<React.SetStateAction<Member | null>>;
}

const RenderMember: React.FC<RenderMemberProps> = ({
  member,
  setOpenDialog,
  setActiveMember,
}) => {
  const handleClick = () => {
    setActiveMember(member);
    setOpenDialog(true);
  };

  return (
    <div className="col-span-10 lg:col-span-2">
      <div
        className="mb-6 h-[165px] w-[167px] cursor-pointer overflow-hidden rounded-[0.625rem]"
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
          <CustomImage
            src={"/images/profile.jpg"}
            alt={`Retrato de ${member.nome}`}
            width={167}
            height={165}
            className="size-full object-cover object-top"
          />
        )}
      </div>
      <div className="flex flex-col gap-[0.31rem]">
        {member.cargo && (
          <h3
            className="cursor-pointer text-base font-bold text-secondary"
            onClick={handleClick}
          >
            {member.cargo}
          </h3>
        )}
        <p
          className="max-w-44 cursor-pointer text-base font-bold uppercase leading-[121%] text-[#3A3A3C]"
          onClick={handleClick}
        >
          {member.nome}
        </p>
        {member.associacao && (
          <p
            className="cursor-pointer text-[0.8125rem] font-bold leading-[0.83688rem] text-[#727272]"
            onClick={handleClick}
          >
            {member.associacao}
          </p>
        )}
      </div>
    </div>
  );
};

function TeamGrid({
  teamsData: members,
  splitGroupMembersByRole,
  hideDividers,
}: Props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [activeMember, setActiveMember] = React.useState<Member | null>(null);

  const getGrouppedMembersByRole = () => {
    return members.map((member) => {
      const splittedGroups = member.groups?.map((group) => {
        const splittedMembers = group.members.reduce(
          (acc, member) => {
            if (member.cargo) {
              acc[0] = [...acc[0], member];
            }
            if (!member.cargo) {
              acc[1] = [...acc[1], member];
            }
            return acc;
          },
          [[], []] as Member[][],
        );
        return { ...group, isGrouped: true, members: splittedMembers };
      });
      return splittedGroups
        ? { ...member, groups: [...splittedGroups] }
        : member;
    });
  };

  const teams = splitGroupMembersByRole ? getGrouppedMembersByRole() : members;

  return (
    <>
      {teams.map((team) => (
        <div
          key={team.title}
          className={cn(
            "relative pb-20 pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-screen after:bg-border",
            hideDividers && "after:hidden",
          )}
        >
          <div className="container">
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
              className="relative pt-10 after:absolute after:-left-4 after:bottom-0 after:right-0 after:h-[0.125rem] after:w-screen after:bg-border after:last:h-0 [&:not(:last-child)]:pb-20"
            >
              <div className="container">
                <h3 className="mb-7 mt-[0.81rem] text-xl font-semibold leading-[1.23775rem] text-[#000]">
                  {group.title}
                </h3>
                <div
                  className={cn(
                    !group.isGrouped && "grid grid-cols-11 gap-x-6 gap-y-12",
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
  );
}

export default TeamGrid;
