import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ExperienceCard from "../../components/ExperienceCard";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";
import Avalon from "/public/images/Exp. Avalon.svg";
import tenk from "/public/images/Exp. 10k.svg";
import Dive from "/public/images/Exp. Dive.svg";
import Winuall from "/public/images/Exp. Winuall.svg";
import CSI from "/public/images/Exp. CSI.svg";
import IxDA from "/public/images/Exp. IxDA.svg";

const experience = () => {
  return (
    <motion.div
      className="mx-auto flex max-w-708 flex-col px-6 pt-8 md:pt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>My Experience</title>
      </Head>
      <div className="flex justify-between">
        <Link href="/">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-6 h-6 stroke-lightGrey2 dark:stroke-darkGrey2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>
        </Link>
        <div>
          <span className="text-xs font-semibold text-lightGrey1 dark:text-darkGrey1">
            My Journey
          </span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 opacity-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <ExperienceCard
          type="Design"
          time="Dec 2022 - Apr 2023"
          heading="Product Design Intern"
          link="https://www.buildonscenes.com/"
          subText="Avalon Scenes"
          description="At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better."
          btnLabel="View My Work"
          btn_hide={true}
          logo={Avalon}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ExperienceCard
          type="Design"
          time="Jul 2022 - Sep 2022"
          heading="Designer in Residence"
          link="https://www.10kdesigners.com/"
          subText="10kdesigners"
          description="Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects."
          btnLabel="Work in progress"
          btn_hide={true}
          logo={tenk}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />

        <ExperienceCard
          type="Design"
          time="Jan 2022 - Mar 2022"
          heading="Product Design Intern"
          link="https://www.letsdive.io/"
          subText="Dive"
          description="I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch."
          btnLabel="View My Work"
          logo={Dive}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />

        <ExperienceCard
          type="Design"
          time="Sep 2021 - Dec 2021"
          heading="Product Design Intern"
          link="https://www.winuall.com/"
          subText="Winuall"
          description="I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website."
          btnLabel="View my work"
          logo={Winuall}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ExperienceCard
          type="Extracurricular Activities and Leadership"
          time="Dec 2022 - Present"
          heading="Design Mentor"
          link="https://www.instagram.com/csivitu/"
          subText="Computer Society of India - VIT Student Chapter"
          description="Helping out the students with their projects and keep them upto date with what is happening in the design space."
          btnLabel="View my Work"
          logo={CSI}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ExperienceCard
          type="Extracurricular Activities and Leadership"
          time="Dec 2021 - Present"
          heading="Senior Core Committee Member"
          link="https://www.instagram.com/ixda_vit/"
          subText="Interaction Design Association - VIT Student Chapter"
          description="As the inaugural product design chapter in our college, we aim to establish a robust design community where students can learn, share knowledge, and foster design expertise."
          btnLabel="View my Work"
          logo={IxDA}
        />
      </div>
      <footer className="mt-auto py-4 pt-8 text-center text-white md:pt-16">
        <div className="flex flex-col items-center ">
          <div>
            <span className="font-heading text-secondary text-xs  font-normal ">
              <RandomQuoteGenerator />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <div className="py-1">
              <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] bg-clip-text text-xs font-semibold  text-transparent md:text-sm">
                Designed & Developed by Harsh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default experience;
