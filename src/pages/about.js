/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import AboutMeImg from "/public/images/AboutMeImg.png";
import Figma from "/public/images/figma.svg";
import Notion from "/public/images/notion.svg";
import Code from "/public/images/vscode.svg";
import Cron from "/public/images/cron.svg";
import Chrome from "/public/images/chrome.svg";
import Spotify from "/public/images/spotify.svg";
import Discord from "/public/images/discord.svg";
import AfterEffects from "/public/images/ae.svg";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";

const about = () => {
  return (
    <div className="flex flex-col max-w-708 mx-auto pt-8 md:pt-16 px-6  ">
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
          <span className="text-lightGrey1 dark:text-darkGrey1 text-xs font-semibold">
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
      <div className="grid grid-rows-1 gap-10 py-8">
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lightGrey1 dark:text-darkGrey1 text-sm md:text-base">
            How It All Started
          </span>
          <p className="text-lightText dark:text-white md:text-lg text-sm tracking-tight md:leading-8 leading-6">
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
          <Image src={AboutMeImg} alt="" className="rounded-lg" />
          <span className="text-lightGrey2 dark:text-darkGrey2 text-xs">
            Folks I will remember when I look back to college days
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lightGrey1 dark:text-darkGrey1 text-sm">
            Fast Forwarding Today!
          </span>
          <p className="text-lightText dark:text-white md:text-lg  text-sm tracking-tight md:leading-8 leading-6">
            Since completing my cohort with 10kdesigners, I am currently working
            as a Product Design Intern at Avalon Scenes .
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lightGrey1 dark:text-darkGrey1 text-sm">
            What’s to come
          </span>
          <p className="text-lightText dark:text-white md:text-lg text-sm  tracking-tight md:leading-8 leading-6">
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
          <span className="text-sm text-lightGrey1 dark:text-darkGrey1 font-semibold">
            My Stack
          </span>
        </div>
        <div className="grid md:grid-cols-8 grid-cols-4 gap-4 pb-24 auto-cols-auto">
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
      <footer className="mt-auto text-white pt-8 md:pt-16 text-center py-4">
        <div className="flex flex-col items-center ">
          <div>
            <span className="text-xs font-normal font-heading  text-secondary ">
              <RandomQuoteGenerator />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <div className="py-1">
              <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] font-semibold text-transparent bg-clip-text text-sm">
                Designed & Developed by Harsh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default about;
