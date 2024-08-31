"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/public/gibwork-logo.jpeg";
import Image from "next/image";
import ClientTweetCard from "./ui/client-tweet-card";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl"
    >
      <div className="flex lg:items-start gap-x-12 gap-y-12 lg:flex-row flex-col">
        <motion.div
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
          className="lg:w-96 shrink-0 lg:sticky top-24 lg:text-left text-center"
        >
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-primary font-semibold text-sm"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-semibold text-3xl sm:text-4xl mt-2"
          >
            Hear what our users have to say
          </motion.h2>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className=" mt-4 text-muted-foreground">
            From freelancers finding their next gig to companies discovering top talent.
          </motion.p>
        </motion.div>

        <div className="overflow-auto flex items-start gap-2 pb-4 sm:hidden">
          <ClientTweetCard id="1819853440723374151" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1765227347400143288" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1816482399238115673" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1815523227759763473" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1823431111650717787" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1815894076572463448" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1823332680118751666" className="shrink-0 max-w-[calc(100vw-96px)]" />
        </div>

        <div className="grow hidden sm:grid sm:grid-cols-2 gap-6 w-full place-items-start">
          <div className="flex flex-col gap-6 w-full ">
            <ClientTweetCard id="1823332680118751666" />
            <ClientTweetCard id="1819853440723374151" />
            <ClientTweetCard id="1816482399238115673" />
            <ClientTweetCard id="1823431111650717787" />
          </div>

          <div className="flex flex-col gap-6 w-full mt-16">
            <ClientTweetCard id="1765227347400143288" />
            <ClientTweetCard id="1815523227759763473" />
            <ClientTweetCard id="1815894076572463448" />
          </div>
        </div>
      </div>
    </section>
  );
}
