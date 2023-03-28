import Head from "next/head";
import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";

const experience = () => {
  return (
    <div className="mx-auto flex max-w-708 flex-col px-6 pt-8 md:pt-16  ">
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
      <div className="flex flex-col gap-4">
        <ExperienceCard
          type="Design"
          time="Dec 2022 - Present"
          heading="Product Design Intern"
          link="https://www.buildonscenes.com/"
          subText="Avalon Scenes"
          description="Introducing a comprehensive community platform that offers webinars, courses, events etc - All in one place"
          btnLabel="View My Work"
          btn_hide={true}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />
        <ExperienceCard
          type="Design"
          time="Jul 2022 - Mar 2022"
          heading="Designer in Residence"
          link="https://www.10kdesigners.com/"
          subText="10kdesigners"
          description="Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects."
          btnLabel="Work in progress"
          btn_hide={true}
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />

        <ExperienceCard
          type="Design"
          time="Jan 2022 - Mar 2022"
          heading="Product Design Intern"
          link="https://www.letsdive.io/"
          subText="Dive"
          description="As a remote work facilitator, I created fun and engaging virtual experiences that boosted team morale and improved productivity."
          btnLabel="View My Work"
        />
        <hr className="border-lightLightStroke dark:border-darkLightStroke" />

        <ExperienceCard
          type="Design"
          time="Sep 2021 - Dec 2021"
          heading="Product Design Intern"
          link="https://www.winuall.com/"
          subText="Winuall"
          description="Built an empowering bridge for learners, tutors, and individuals in the learning ecosystem to overcome the digital divide."
          btnLabel="View my work"
        />

        <ExperienceCard
          type="Extracurricular Activities and Leadership"
          time="Dec 2022 - Present"
          heading="Design Mentor"
          link="https://www.instagram.com/csivitu/"
          subText="Computer Society of India - VIT Student Chapter"
          description="I take workshops and training sessions to teach members new design techniques and software tools, and helped them apply these skills to their projects."
          btnLabel="View my Work"
        />
        <ExperienceCard
          type="Extracurricular Activities and Leadership"
          time="Dec 2021 - Present"
          heading="Senior Core Committee Member"
          link="https://www.instagram.com/ixda_vit/"
          subText="Interaction Design Association - VIT Student Chapter"
          description="We being the first Product Design Chapter in our college, we're trying to build a strong community of designers."
          btnLabel="View my Work"
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
    </div>
  );
};

export default experience;
