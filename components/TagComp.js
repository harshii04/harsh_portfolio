const TagComp = ({ textLabel }) => {
  return (
    <div className="truncate rounded-full border border-lightStroke bg-lightSecondbg px-3 py-1 text-xs text-lightGrey1 dark:border-darkStroke dark:bg-darkSecondbg dark:text-darkGrey1">
      <span>{textLabel}</span>
    </div>
  );
};

export default TagComp;
