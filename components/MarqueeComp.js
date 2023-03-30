import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const MarqueeComp = ({ textLabel }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [gradientColor, setGradientColor] = useState([255, 255, 255]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentTheme = theme === "system" ? systemTheme : theme;
    setGradientColor(currentTheme === "dark" ? [22, 22, 22] : [255, 255, 255]);
  }, [theme, systemTheme, mounted]);

  return (
    <Marquee
      gradientWidth={100}
      gradient={true}
      gradientColor={gradientColor}
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
