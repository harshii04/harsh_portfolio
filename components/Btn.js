const Btn = ({ textLabel }) => {
  return (
    <button className=" flex gap-2 bg-lightSecondbg dark:bg-darkSecondbg border border-lightStroke dark:border-darkStroke text-lightGrey1 dark:text-darkGrey1 md:text-sm text-xs px-4 py-3  md:px-4 md:py-2 items-center rounded-lg ">
      {textLabel}
    </button>
  );
};

export default Btn;
