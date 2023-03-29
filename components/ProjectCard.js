import Image from "next/image";
import Btn from "./Btn";
import LeftIconTag from "./LeftIconTag";
import TagComp from "./TagComp";
import Link from "next/link";

const ProjectCard = ({ image, date, status, heading, subtext, link }) => {
  return (
    <div className="flex  flex-col gap-8 py-4 md:flex-row md:items-start">
      <Image
        src={image}
        alt="This is the project image"
        className="h-mobile w-mobile rounded-lg md:h-64"
      />

      <div>
        <div className="flex gap-2">
          <div>
            <TagComp textLabel={date} />
          </div>
          <div>
            <LeftIconTag progress={status} />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div>
            <span className="font-medium leading-5 tracking-tight text-lightText dark:text-white md:text-lg">
              {heading}
            </span>
          </div>
          <div>
            <span className="text-base leading-5 tracking-tight text-lightGrey1 dark:text-darkGrey1">
              {subtext}
            </span>
          </div>
        </div>
        <div className="pt-6 md:gap-2">
          <Link href={link} target="_blank">
            <Btn textLabel="Read Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
