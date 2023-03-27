const TagComp = ({ textLabel }) => {
  return (
    <div className="bg-lightSecondbg dark:bg-darkSecondbg border truncate border-lightStroke dark:border-darkStroke text-lightGrey1 dark:text-darkGrey1 text-xs px-3 py-1 rounded-full">
      <span>{textLabel}</span>
    </div>
  );
};

export default TagComp;
