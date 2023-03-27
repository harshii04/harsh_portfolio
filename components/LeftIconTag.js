const LeftIconTag = ({ progress }) => {
  return (
    <div className="flex items-center bg-lightSecondbg dark:bg-darkSecondbg border border-lightStroke dark:border-darkStroke  px-3 py-1 rounded-full">
      <span className="text-lightGrey1 dark:text-darkGrey1 text-xs">
        {progress}
      </span>
    </div>
  );
};

export default LeftIconTag;
