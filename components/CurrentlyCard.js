import Image from "next/image";

const CurrentlyCard = ({ icon, heading, subHeading, image }) => {
  return (
    <div className="flex items-start justify-between rounded-lg border border-lightStroke bg-lightSecondbg py-4 px-4 hover:cursor-pointer dark:border-darkStroke dark:bg-darkSecondbg">
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div className="flex flex-col">
          <div>
            <span className="text-lightText dark:text-white">{heading}</span>
          </div>
          <div>
            <span className="text-xs text-lightGrey1 dark:text-darkGrey1 ">
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
