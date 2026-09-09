"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { BoardMember } from "@/lib/types";

interface BoardProfilesProps {
  members: BoardMember[];
}

export default function BoardProfiles({ members }: BoardProfilesProps) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article
          key={member.name}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-[#FF6333]/20 bg-white shadow-[0_8px_28px_rgba(2,32,80,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(2,32,80,0.1)]"
        >
          <div className="relative aspect-[912/716] overflow-hidden bg-[#F3EEE4]">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.category}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-2xl font-semibold leading-tight text-[#022050]">
              {member.name}
            </h2>
            <p className="mt-2 min-h-10 text-sm font-semibold uppercase leading-5 tracking-[0.06em] text-[#FF6333]">
              {member.category}
            </p>
            <p className="mt-4 line-clamp-4 text-[15px] leading-7 text-black/65">
              {member.biography}
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="navy"
                  className="mt-6 w-fit"
                  aria-label={`Read full profile of ${member.name}`}
                >
                  Read More
                  <ArrowRight aria-hidden="true" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto border-[#FF6333]/20 bg-[#FFFBF0] p-0 sm:max-w-3xl">
                <div className="grid md:grid-cols-[240px_1fr]">
                  <div className="relative min-h-64 bg-[#F3EEE4] md:min-h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  </div>
                  <DialogHeader className="p-6 pr-12 text-left md:p-8 md:pr-12">
                    <DialogTitle className="text-2xl leading-tight text-[#022050] md:text-3xl">
                      {member.name}
                    </DialogTitle>
                    <p className="text-sm font-semibold uppercase leading-5 tracking-[0.06em] text-[#FF6333]">
                      {member.category}
                    </p>
                    <div className="my-2 h-px bg-[#FF6333]/20" />
                    <DialogDescription className="text-base leading-7 text-black/70">
                      {member.biography}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </article>
      ))}
    </div>
  );
}
