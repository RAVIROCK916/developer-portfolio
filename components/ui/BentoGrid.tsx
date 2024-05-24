"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";

import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import GridGlobe from "./GridGlobe";

// react icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Typescript", icon: <SiTypescript /> },
  ];
  const rightLists = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "prt15@iitbbs.ac.in";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const containerHeight = 164;
  const containerTransition = {
    y: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20, // Adjust duration to control the speed
      ease: "linear",
    },
  };
  const leftContainerVariants = {
    animate: {
      y: [0, -containerHeight], // Adjust the -2000 to the height of your container
      transition: containerTransition,
    },
  };
  const rightContainerVariants = {
    animate: {
      y: [0, containerHeight], // Adjust the -2000 to the height of your container
      transition: containerTransition,
    },
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              {/* tech stack lists */}
              <motion.div
                className="flex flex-col gap-3 md:gap-3 lg:gap-4"
                variants={leftContainerVariants}
                animate="animate"
              >
                {leftLists.map((item, i) => (
                  <span
                    key={i + item.name}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:opacity-100"
                  >
                    {item.name}
                    <span className="text-lg">{item.icon}</span>
                  </span>
                ))}
                {leftLists.map((item, i) => (
                  <span
                    key={i + leftLists.length}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:opacity-100"
                  >
                    {item.name}
                    <span className="text-lg">{item.icon}</span>
                  </span>
                ))}
                {/* <span className="rounded-lg bg-[#10132E] px-3 py-4  text-center lg:px-3 lg:py-4"></span> */}
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 md:gap-3 lg:gap-4"
                variants={rightContainerVariants}
                animate="animate"
              >
                <span className="rounded-lg bg-[#10132E] px-3 py-4  text-center lg:px-3 lg:py-4"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i + item.name}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 
                    lg:px-3 lg:py-4 lg:text-xs lg:opacity-100"
                  >
                    {item.name}
                    <span className="text-lg">{item.icon}</span>
                  </span>
                ))}
                {rightLists.map((item, i) => (
                  <span
                    key={i + rightLists.length}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 
                    lg:px-3 lg:py-4 lg:text-xs lg:opacity-100"
                  >
                    {item.name}
                    <span className="text-lg">{item.icon}</span>
                  </span>
                ))}
              </motion.div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-5">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Copied!" : "Email Address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
