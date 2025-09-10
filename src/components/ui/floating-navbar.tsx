"use client";
import * as React from "react";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/lib";
import AssistantButton from "../assistant/AssistantButton"
import {ActionIcon, Image, Tooltip} from "@mantine/core";
import resume from "../../assets/images/varughese_resume.pdf";
const emailAddress = "sujith.varug@gmail.com"
import linkedInIcon from '../../assets/images/icons/linkedin-icon.svg';
import githubIcon from "../../assets/images/icons/github-mark-white.svg"
import mailIcon from "../../assets/images/icons/send-message.svg"
import cvIcon from "../../assets/images/icons/cv.png"

export const FloatingNav = ({ className, open }: {
  className?: string;
  open?: () => void;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 social-icon",
          className
        )}
      >
        <Tooltip label="Resumé">
          <ActionIcon component="a" href={resume} target="_blank" rel="noreferrer"><Image src={cvIcon} alt="cv" w="50%" /></ActionIcon>
        </Tooltip>
        <Tooltip label="LinkedIn">
          <ActionIcon component="a" href="https://www.linkedin.com/in/sujithvarughese/" target="_blank" rel="noreferrer"><Image src={linkedInIcon} alt="linkedin" w="50%"/></ActionIcon>
        </Tooltip>
        <Tooltip label="GitHub">
          <ActionIcon component="a" href="http://github.com/sujithvarughese" target="_blank" rel="noreferrer"><Image src={githubIcon} alt="github" w="50%"/></ActionIcon>
        </Tooltip>
        <Tooltip label="Email">
          <ActionIcon component="a" href={`mailto:${emailAddress}`}><Image src={mailIcon} alt="mail" w="50%"/></ActionIcon>
        </Tooltip>

        <AssistantButton open={open} />
      </motion.div>
    </AnimatePresence>
  );
};
