import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

const MarqueeComp = ({ textLabel }) => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <Marquee
      gradientWidth={100}
      gradient={true}
      gradientColor={theme === "dark" ? [22, 22, 22] : [255, 255, 255]}
      speed={25}
    >
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm font-semibold text-transparent">
        {textLabel}
      </span>
      <span className="2 block bg-gradient-to-r  from-[#80D0F2] via-[#5C82FF]  to-[#C480FF] bg-clip-text  px-1 text-sm font-semibold text-transparent text-opacity-50">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className=" block gap-1 bg-gradient-to-r  from-[#80D0F2] via-[#5C82FF]  to-[#C480FF] bg-clip-text text-sm font-semibold text-transparent text-opacity-50">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm font-semibold  text-transparent text-opacity-50">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm font-semibold  text-transparent text-opacity-50">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm font-semibold  text-transparent text-opacity-50">
        ✦
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1  text-sm font-semibold  text-transparent text-opacity-50">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1 text-sm  font-semibold text-transparent">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  bg-clip-text px-1  text-sm font-semibold  text-transparent text-opacity-50">
        ✦
      </span>
    </Marquee>
  );
};

export default MarqueeComp;
