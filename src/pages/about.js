/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Head from "next/head";
// import ImageCarousel from "/components/Imagecour";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutMeImg from "/public/images/AboutMe.png";
import Figma from "/public/images/figma.svg";
import Notion from "/public/images/notion.svg";
import Code from "/public/images/vscode.svg";
import Cron from "/public/images/cron.svg";
import Chrome from "/public/images/chrome.svg";
import Spotify from "/public/images/spotify.svg";
import Discord from "/public/images/discord.svg";
import AfterEffects from "/public/images/ae.svg";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";
import EmblaCarousel from "../../components/courousel";

const OPTIONS = { inViewThreshold: 0, dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const about = () => {
  // const images = [
  //   "/public/images/AboutMeImg.png",
  //   "/public/images/AboutMe2.png",
  // ];
  return (
    <motion.div
      className="mx-auto flex max-w-708 flex-col px-6 pt-8 md:pt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>About Me</title>
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
            About Me
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
      <div className="grid grid-rows-1 gap-10 py-8 pt-16">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-lightGrey1 dark:text-darkGrey1">
            How It All Started
          </span>
          <p className="text-sm leading-6 tracking-tight text-lightText dark:text-white md:text-base md:leading-8">
            Exploring different fields during my first year of college, coding
            quickly caught my attention. But navigating clubs during the
            pandemic was tough. Luckily, I joined a club with friends and my
            design journey began with Figma. Despite struggling with other
            software, Figma's intuitive interface made me fall in love with
            design. I learned the importance of portfolios and case studies,
            which led to my first internship and valuable experience. Taking a
            reflective break, I joined 10kdesigners to continue growing my
            skills and passion for design.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {/* <Image src={AboutMeImg} alt="" className="rounded-md" /> */}
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          {/* <ImageCarousel images={images} /> */}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-lightGrey1 dark:text-darkGrey1">
            What’s to come
          </span>
          <p className="text-sm leading-6 tracking-tight text-lightText  dark:text-white md:text-base md:leading-8">
            As an engineer, I have a strong passion for technology and I'm
            always on the lookout for the latest developments and trends. I'm
            particularly interested in exploring how design can be integrated
            with AI to create even better user experiences. In the future, I
            hope to continue pushing the boundaries of design and technology,
            and to use my skills to create innovative solutions that make a real
            impact. I'm excited to see where this journey takes me, and I look
            forward to sharing my experiences and insights along the way. Till
            then keep iterating!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-sm font-semibold text-lightGrey1 dark:text-darkGrey1">
            My Stack
          </span>
        </div>
        <div className="grid auto-cols-auto grid-cols-4 gap-4 pb-24 md:grid-cols-8">
          <div>
            <Image src={Figma} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Code} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Notion} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Chrome} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Cron} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Spotify} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={Discord} alt="" height={60} width={60} />
          </div>
          <div>
            <Image src={AfterEffects} alt="" height={60} width={60} />
          </div>
        </div>
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

export default about;
