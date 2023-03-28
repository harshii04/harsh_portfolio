import Image from "next/image";

const CurrentlyCard = ({ icon, heading, subHeading, image }) => {
  return (
    <div className="flex hover:cursor-pointer items-start justify-between bg-lightSecondbg border border-lightStroke dark:bg-darkSecondbg dark:border-darkStroke py-4 px-4 rounded-lg">
      <div className="flex gap-4 items-center">
        <div>{icon}</div>
        <div className="flex flex-col">
          <div>
            <span className="text-lightText dark:text-white">{heading}</span>
          </div>
          <div>
            <span className="text-lightGrey1 dark:text-darkGrey1 text-xs ">
              {subHeading}
            </span>
          </div>
        </div>
      </div>
      <div>
        <Image src={image} alt="This is the image" height={16} width={16} />
      </div>
    </div>
  );
};

export default CurrentlyCard;
