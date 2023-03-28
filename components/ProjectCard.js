import Image from "next/image";
import Btn from "./Btn";
import LeftIconTag from "./LeftIconTag";
import TagComp from "./TagComp";
import Link from "next/link";

const ProjectCard = ({ image, date, status, heading, subtext, link }) => {
  return (
    <div className="flex  gap-7 md:items-start md:flex-row flex-col py-4">
      <Image
        src={image}
        alt="This is the project image"
        className="md:w-68 w-mobile h-mobile rounded-lg"
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
            <span className="text-lightText dark:text-white font-medium tracking-tight leading-5">
              {heading}
            </span>
          </div>
          <div>
            <span className="text-lightGrey1 text-sm dark:text-darkGrey1 tracking-tight leading-5">
              {subtext}
            </span>
          </div>
        </div>
        <div className="md:gap-2 pt-6">
          <Link href={link} target="_blank">
            <Btn textLabel="Read Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
