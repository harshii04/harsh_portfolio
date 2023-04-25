import Image from "next/image";

const CurrentlyCard = ({ icon, heading, subHeading, image }) => {
  return (
    <div className="to-blue-gray-400 flex items-start justify-between rounded-lg border bg-gradient-to-b from-white to-gray-100 px-4 py-4 hover:cursor-pointer dark:border-darkStroke dark:bg-gradient-to-b dark:from-background dark:to-darkSecondbg">
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div className="flex flex-col">
          <div>
            <span className="text-sm font-medium text-lightText dark:text-white">
              {heading}
            </span>
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
