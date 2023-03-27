import Marquee from "react-fast-marquee";

const MarqueeComp = ({ textLabel }) => {
  return (
    <Marquee gradientWidth={100} gradient={false} speed={25}>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2  font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 gap-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
      <span className="text-lightGrey2 font-semibold dark:text-darkGrey2 px-1 text-sm">
        {textLabel}
      </span>
      <span className="text-lightGrey2  text-opacity-50 font-semibold dark:text-darkGrey2 px-1 text-sm">
        ✦
      </span>
    </Marquee>
  );
};

export default MarqueeComp;
