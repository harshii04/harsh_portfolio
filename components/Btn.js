const Btn = ({ textLabel }) => {
  return (
    <button className=" flex items-center gap-2 rounded-lg border border-lightStroke bg-lightSecondbg px-4 py-3 text-sm text-lightGrey1 dark:border-darkStroke dark:bg-darkSecondbg  dark:text-darkGrey1 md:px-4 md:py-2 ">
      {textLabel}
    </button>
  );
};

export default Btn;
