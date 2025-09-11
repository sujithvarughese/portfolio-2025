"use client";

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
    <div className="flex flex-col justify-center items-center px-4 mt-4 w-full">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
