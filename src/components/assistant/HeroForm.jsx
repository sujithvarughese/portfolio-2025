"use client";
import { motion } from "motion/react"

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input.js";

export function HeroForm({ form, handleSubmit }) {
  const placeholders = [
    "What are some of Sujith's skills?",
    "What coding languages is he proficient in?",
    "What are some recent apps Sujith has built?",
    "How did you get built?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (query) => {
    handleSubmit(query);
    console.log(query);
    console.log("submitted");
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 1,
      }}
      className="flex flex-col justify-center items-center px-4 mt-4 md:w-full">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </motion.div>
  );
}
