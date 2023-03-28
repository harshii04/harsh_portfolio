const IconBtnLeft = ({ textLabel, icon, show_btn }) => {
  if (show_btn) {
    return (
      <button
        className="flex gap-2 bg-lightSecondbg dark:bg-darkSecondbg border border-lightStroke opacity-50 hover:cursor-not-allowed dark:border-darkStroke text-lightGrey1 dark:text-darkGrey1 md:text-sm text-xs px-2 py-2 md:px-2 md:py-2 items-center rounded-lg"
        disabled
      >
        {icon}
        {textLabel}
      </button>
    );
  } else {
    return null;
  }
};

export default IconBtnLeft;
