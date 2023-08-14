import MarqueeComp from "./MarqueeComp";
import ProjectCard from "./ProjectCard";
import Btn from "./Btn";
import Link from "next/link";
import projectData from "../Data/projects";

const Projects = () => {
  const projData = projectData.projects.slice(0, 3);
  return (
    <div className="flex flex-col px-6 pt-24 md:pt-32">
      <div>
        <MarqueeComp textLabel="PROJECTS" />
      </div>
      <div className="flex flex-col items-center gap-4 pt-4 md:pt-8">
        <div className="flex flex-col">
          {projData.map((item) => {
            return (
              <>
                <ProjectCard
                  image={item.image}
                  heading={item.heading}
                  subtext={item.subtext}
                  date={item.date}
                  status={item.status}
                  link={item.link}
                />
                <hr className="border-lightLightStroke dark:border-darkLightStroke" />
              </>
            );
          })}
        </div>
        <div className="">
          <Link href="/projects">
            <Btn textLabel="View All Projects" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
