const LeftIconTag = ({ progress }) => {
  return (
    <div className="flex items-center rounded-full border border-lightStroke bg-lightSecondbg px-3  py-1 dark:border-darkStroke dark:bg-darkSecondbg">
      <span className="text-xs text-lightGrey1 dark:text-darkGrey1">
        {progress}
      </span>
    </div>
  );
};

export default LeftIconTag;
