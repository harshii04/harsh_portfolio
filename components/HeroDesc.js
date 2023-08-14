/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Btn from "./Btn";
import IconBtnRight from "./IconButnRight";
import heroData from "../Data/hero";

const HeroDesc = () => {
  return (
    <div className="flex flex-col gap-6 px-6 pt-12 md:gap-8 ">
      <div className="flex flex-col gap-2 ">
        <div>
          <span className="text-xs font-semibold text-lightGrey1 dark:text-darkGrey1">
            ABOUT ME
          </span>
        </div>
        <div>
          <p className="text-sm font-normal leading-7 tracking-tight md:text-base md:leading-7">
            {heroData.data}
          </p>
        </div>
        <div>
          <span className="text-sm font-normal leading-7 tracking-tight md:text-base md:leading-7 ">
            {/* Currently working at{" "}
            <span className="inline-flex bg-gradient-to-r from-[#4AB1F1] via-[#566CEC] via-[#D749AF] to-[#FF7C51] bg-clip-text  font-medium text-transparent">
              {" "}
              <Link href="https://www.buildonscenes.com/" target="_blank">
                Avalon Scenes
              </Link>
            </span> */}
            {/* One of the key skills I have acquired is the ability to effectively
            manage time constraints when working on various projects and
            features. */}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
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
        <Link href="https://drive.google.com/file/d/16s3t69Xo9xH25xyEwG79vnf2P40uAFYg/view?usp=sharing">
          <Btn textLabel="View my Resume" />
        </Link>
      </div>
    </div>
  );
};

export default HeroDesc;
