import Link from "next/link";
import IconBtnRight from "./IconButnRight";

const HeroDesc = () => {
  return (
    <div className="flex flex-col md:gap-8 px-6 pt-12 gap-6 ">
      <div className="flex flex-col gap-2 ">
        <div>
          <span className="text-lightGrey1 font-semibold text-xs dark:text-darkGrey1">
            LI’L ABOUT ME
          </span>
        </div>
        <div>
          <p className="md:text-xl text-sm leading-7 font-normal md:leading-9 tracking-tight">
            I’m crafting exceptional products that blend Design and Engineering.
            Making Impactful experiences with beauty and function. Currently
            crafting experiences at{" "}
            <span className="font-medium text-lightGrey1 hover:cursor-pointer transition-all ease-in-out duration-200 dark:text-darkGrey1 hover:text-lightText dark:hover:text-white">
              {" "}
              <Link href="https://www.buildonscenes.com/" target="_blank">
                Avalon Scenes
              </Link>
            </span>{" "}
            . My objective is straightforward, to create exceptional things
            alongside exceptional individuals. By collaborating harmoniously, we
            can accomplish this goal.
          </p>
        </div>
      </div>
      <div>
        <Link href="/about">
          <IconBtnRight
            textLabel="Read More"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroDesc;
