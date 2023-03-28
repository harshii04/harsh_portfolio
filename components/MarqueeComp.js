import Marquee from "react-fast-marquee";

const MarqueeComp = ({ textLabel }) => {
  return (
    <Marquee gradientWidth={100} gradient={false} speed={25}>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold px-1 text-sm">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text  text-opacity-50 font-semibold 2 px-1 text-sm">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text text-opacity-50 font-semibold gap-1 text-sm">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text text-opacity-50 font-semibold  px-1 text-sm">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text text-opacity-50 font-semibold  px-1 text-sm">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text text-opacity-50 font-semibold  px-1 text-sm">
        ✦
      </span>
      <span className=" block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text  text-opacity-50 font-semibold  px-1 text-sm">
        ✦
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text font-semibold  px-1 text-sm">
        {textLabel}
      </span>
      <span className="block bg-gradient-to-r from-[#80D0F2]  via-[#5C82FF] to-[#C480FF]  text-transparent bg-clip-text  text-opacity-50 font-semibold  px-1 text-sm">
        ✦
      </span>
    </Marquee>
  );
};

export default MarqueeComp;
