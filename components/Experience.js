import Link from "next/link";
import Btn from "./Btn";
import ExperienceCard from "./ExperienceCard";
import MarqueeComp from "./MarqueeComp";
import experienceData from "../Data/experience";

const Experience = () => {
  const expData = experienceData.slice(0, 3);
  return (
    <div className="flex flex-col gap-6 px-6 pt-24 md:pt-32">
      <div>
        {" "}
        <MarqueeComp textLabel="MY JOURNEY" />
      </div>
      <div className="flex flex-col items-center gap-2 pt-4 md:pt-8">
        <div className="flex flex-col gap-4">
          {expData.map((exp) => {
            return (
              <>
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
                <hr className="border-lightLightStroke dark:border-darkLightStroke" />
              </>
            );
          })}
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
