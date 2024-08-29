"use client";

import Image from "next/image";
import Link from "next/link";
import { TwitterLogoMark } from "./logo/twitter";
import { DiscordLogoMark } from "./logo/discord";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const members = [
  {
    image: "/members/nikhilkr_tw.jpg",
    name: "Nikhil Kumar",
    xUrl: "https://x.com/nikhilkr_tw",
    discordUrl: "https://discord.com/users/569966649889783810",
  },
  {
    image: "/members/0xNullRef.jpg",
    name: "0xNullRef",
    xUrl: "https://x.com/0xNullRef",
    discordUrl: "https://discord.com/users/798963371511906334",
  },
];

export function Team() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      id="team"
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex sm:items-center justify-center flex-col mx-auto w-full max-w-7xl"
    >
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-primary font-semibold lg:text-left text-center text-sm"
      >
        TEAM MEMBERS
      </motion.p>
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-4xl text-center"
      >
        Discover the team behind gibwork
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-4 text-muted-foreground"
      >
        Know more about the people that build and manage gibwork
      </motion.p>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0 w-full flex mt-8">
        <div className="flex overflow-auto gap-6 mx-auto pb-4">
          {members.map((_member, i) => (
            <div key={i + "asd"} className="w-40 sm:w-48 shrink-0">
              <Image
                src={_member.image}
                alt={_member.name}
                height={240}
                width={240}
                className="rounded-md object-cover aspect-square w-full bg-muted"
              />
              <p className="mt-4 text-center">{_member.name}</p>
              <div className="flex items-center justify-center mt-2 gap-4">
                <Link
                  href={_member.xUrl}
                  target="_blank"
                  className=" transition-all hover:scale-105"
                >
                  <DiscordLogoMark className="size-5" />
                </Link>
                <Link
                  href={_member.xUrl}
                  target="_blank"
                  className=" transition-all hover:scale-105"
                >
                  <TwitterLogoMark className="size-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
