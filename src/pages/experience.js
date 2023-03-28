import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";

const experience = () => {
  return (
    <div className="flex flex-col max-w-708 mx-auto md:pt-40 px-6 pt-24 ">
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
      <div className="flex flex-col gap-4">
        <ExperienceCard
          type="Design"
          time="Dec 2022 - Present"
          heading="Product Design Intern"
          link="https://www.buildonscenes.com/"
          subText="Avalon Scenes"
          description="Designed an all-in-one community platform for webinars, courses, events, media uploads, digital product sales, chats, forums, payments, and more."
          btnLabel="View My Work"
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
    </div>
  );
};

export default experience;
