import Head from "next/head";
import Link from "next/link";
import Btn from "./Btn";
import ExperienceCard from "./ExperienceCard";
import MarqueeComp from "./MarqueeComp";

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 px-6 pt-24 md:pt-32">
      <div>
        {" "}
        <MarqueeComp textLabel="MY JOURNEY" />
      </div>
      <div className="flex flex-col items-center gap-2 pt-8">
        <div className="flex flex-col gap-4">
          <ExperienceCard
            type="Design"
            time="Dec 2022 - Present"
            subText="Avalon Scenes"
            heading="Product Design Intern"
            link="https://www.buildonscenes.com/"
            description="Scenes is a comprehensive community platform that offers webinars, courses, events etc - All in one place"
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
        </div>
        <div className="">
          <Link href="/experience">
            <Btn textLabel="View All" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
