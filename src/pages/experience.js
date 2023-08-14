import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ExperienceCard from "../../components/ExperienceCard";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";
import experienceData from "../../Data/experience";

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
        {experienceData.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              type={exp.type}
              time={exp.time}
              heading={exp.heading}
              link={exp.link}
              subText={exp.subText}
              description={exp.description}
              btnLabel={exp.btnLabel}
              btn_hide={exp.btn_hide}
              logo={exp.logo}
            />
          );
        })}
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
