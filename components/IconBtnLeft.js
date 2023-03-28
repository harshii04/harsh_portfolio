const IconBtnLeft = ({ textLabel, icon, show_btn }) => {
  if (show_btn) {
    return (
      <button
        className="flex items-center gap-2 rounded-lg border border-lightStroke bg-lightSecondbg px-2 py-2 text-xs text-lightGrey1 opacity-50 hover:cursor-not-allowed dark:border-darkStroke dark:bg-darkSecondbg dark:text-darkGrey1 md:px-2 md:py-2 md:text-sm"
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
