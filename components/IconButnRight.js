const IconBtnRight = ({ textLabel, icon }) => {
  return (
    <button className=" flex items-center gap-2 rounded-lg border border-lightStroke bg-lightSecondbg px-2 py-2 text-xs text-lightGrey1 dark:border-darkStroke dark:bg-darkSecondbg  dark:text-darkGrey1 md:px-4 md:py-2 md:text-sm ">
      {textLabel}
      {icon}
    </button>
  );
};

export default IconBtnRight;
