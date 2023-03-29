import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import Fampay from "/public/images/Fampay.png";
import Razorpay from "/public/images/Razorpay.png";
import Dive from "/public/images/Dive.png";
import IRCTC from "/public/images/Irctc.png";
import ParitoshCover from "/public/images/Frame 44.png";
import TPHCover from "/public/images/TPH.png";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";
import Head from "next/head";

const projects = () => {
  return (
    <motion.div
      className="mx-auto flex max-w-708 flex-col  px-6 pt-8 md:pt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Projects</title>
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
            Projects
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
      <div className="flex flex-col pt-8">
        <ProjectCard
          image={TPHCover}
          heading="Redesigning the landing page for better discoveribility"
          subtext="Redesigned 'The Product House' landing page for my take-home assignment! My goal was to create an engaging and informative showcase of their brand."
          date="2022"
          status="Completed"
          link="https://designbyharsh.notion.site/The-Product-House-Design-Assignment-832731c6218c45cfa61655cb23a1fa2d"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ProjectCard
          image={Fampay}
          heading="UI/ UX Case Study: Group Food Ordering"
          subtext="Designed an solution that simplifies the decision-making process and saves time for users."
          date="2022"
          status="Completed"
          link="https://bootcamp.uxdesign.cc/group-food-ordering-helping-people-order-food-online-in-groups-e669b696434d"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ProjectCard
          image={ParitoshCover}
          heading="UI/ UX Case Study: Designing a landing page for a creator"
          subtext="I redesigned Paritosh Anand's website to improve user engagement and experience as part of the 10kdesigners cohort assignment."
          date="2022"
          status="In Progress"
          link="https://designbyharsh.notion.site/UI-UX-Case-Study-Designing-a-landing-page-for-a-creator-fec0ecadc2a741ada7280877e6093e58"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ProjectCard
          image={Razorpay}
          heading="UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses"
          subtext="Designed a product that simplifies local store sales on WhatsApp for businesses."
          date="2022"
          status="Completed"
          link="https://bootcamp.uxdesign.cc/a-ui-ux-case-study-enabling-the-local-stores-to-sell-items-on-whatsapp-for-businesses-4f372ebfded5"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ProjectCard
          image={Dive}
          heading="Creating Dive platform's Trivia Game"
          subtext="In round one, designed a trivia game to enhance user engagement during sessions on Dive platform."
          date="2022"
          status="Completed"
          link="https://bootcamp.uxdesign.cc/trivia-dive-intern-challenge-9bcefc186517"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ProjectCard
          image={IRCTC}
          heading="UI/ UX Case Study: IRCTC Rail Connect App Redesign"
          subtext="In a Designathon project, I redesigned an app's UX by identifying its flaws."
          date="2021"
          status="Completed"
          link="https://medium.com/@harsh_youx/irctc-app-redesign-60f4d3a7c0b0"
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

export default projects;
