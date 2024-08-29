"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Ripple from "./ui/ripple";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Faq() {
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
      id="faq"
      className="relative py-16 sm:py-24 justify-between lg:flex-row flex-col gap-y-8 gap-x-16 px-4 sm:px-6 flex w-full max-w-7xl mx-auto"
    >
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl shrink-0 lg:text-left text-center"
      >
        FAQs
      </motion.h2>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grow lg:max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I create a question or bounty on Gibwork?</AccordionTrigger>
            <AccordionContent>
              Under the earnings display on the home page, there are call-to-action
              &quot;Create&quot; buttons for creating Questions, Open Source Bounties, and Task
              Cards. These buttons guide you through the process of creating and posting jobs on the
              platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty, a question, and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is a larger project with a specific goal and a monetary reward. A question is
              a request for information or expertise, typically with a smaller reward. A task is a
              specific, often smaller job that needs to be completed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get paid for completed work?</AccordionTrigger>
            <AccordionContent>
              Once your work is approved by the bounty creator, the funds will be released. Ensure
              your wallet is connected and has a minimum amount of SOL on the main-net to claim your
              rewards. Navigate to the specific bounty, click &quot;Claim Rewards,&quot; and the
              amount will be transferred to your wallet shortly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods does gibwork support?</AccordionTrigger>
            <AccordionContent>
              We only support wallet transactions, i.e., depositing the winning amount directly to
              your wallet in the form of crypto or stable-coins.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are there any fees for using gibwork?</AccordionTrigger>
            <AccordionContent>
              Gibwork charges absolutely no service fee on any bounty creation or transactions!
              Whatever bounty you set or amount you earn is all between users and clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is gibwork secure?</AccordionTrigger>
            <AccordionContent>
              Yes, Gibwork prioritizes security and transparency. The manage account option allows
              users to easily monitor and manage their account activities, ensuring a secure
              experience. You get to see the active device and connected accounts that have access
              to your profile.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
