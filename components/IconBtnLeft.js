const IconBrnLeft = ({ textLabel, icon }) => {
  return (
    <button className=" flex gap-2 bg-lightSecondbg dark:bg-darkSecondbg border border-lightStroke opacity-50 hover:cursor-not-allowed dark:border-darkStroke text-lightGrey1 dark:text-darkGrey1 md:text-sm text-xs px-2 py-2  md:px-4 md:py-2 items-center rounded-lg ">
      {icon}
      {textLabel}
    </button>
  );
};

export default IconBrnLeft;
