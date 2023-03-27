import Image from "next/image";
import { useTheme } from "next-themes";
import DisplayImg from "/public/images/DisplayImg.png";
import { useState, useEffect } from "react";
import Link from "next/link";

const HeroHead = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <buttons
          className=" w-10 h-10 bg-darkSecondbg flex items-center justify-center hover:bg-darkHover cursor-pointer transition-all ease-in-out delay-150 border border-darkStroke rounded-lg"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="#a0a0a0"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </buttons>
      );
    } else {
      return (
        <button
          className=" w-10 h-10 bg-lightSecondbg flex items-center justify-center hover:bg-lightHover cursor-pointer transition-all ease-in-out delay-150 border border-lightStroke rounded-lg"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="#A3A3A3"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div className="flex items-center text-center justify-between pt-40 px-6 ">
      <div className="flex gap-2 items-center">
        <div>
          <Image
            src={DisplayImg}
            alt="Cover Image of the website"
            height={56}
            width={56}
          />
        </div>
        <div className="flex flex-col items-start md:gap-1 ">
          <div>
            <span className="md:font-semibold dark:text-white text-lightText md:text-xl text-sm leading-6 tracking-tight">
              Harshvardhan Agarwal
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <Link href="https://twitter.com/harshii04" target="_blank">
                <span className="dark:text-darkGrey1 md:text-sm text-xs md:hover:underline md:hover:underline-lightGrey1 md:hover:underline-offset-4 text-lightGrey1">
                  @harshii04
                </span>
              </Link>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#a0a0a0"
                class="md:w-4 md:h-4 w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {renderThemeChanger()}
    </div>
  );
};

export default HeroHead;
