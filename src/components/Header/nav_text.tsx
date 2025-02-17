"use client"
import { motion } from "motion/react"
import UnderlineToBackground from "./underline_to_background"

export default function UnderlineToBackgroundDemo() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const words = "Engineering Student —— Developer, Adventurer, Photographer --- ".split(" ")

  return (
    <div className=" flex flex-col items-center justify-center ">
      <motion.h2
        className="text-[#000000] text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
        <motion.span variants={wordVariants} className="inline-block">
          <UnderlineToBackground
            label="Resume"
            targetTextColor="#f0f0f0"
            className="cursor-pointer"
          />
        </motion.span>
      </motion.h2>
    </div>
  )
}
