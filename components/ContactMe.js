import Link from "next/link";
import Image from "next/image";
import MarqueeComp from "./MarqueeComp";
import Twitter from "./icons/twitter.svg";
import Github from "./icons/github.svg";
import LinkedIn from "./icons/linkedin.svg";
import Medium from "./icons/medium.svg";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4 px-6 py-16 pt-24 md:pt-24">
      <div>
        <MarqueeComp textLabel="CONTACT ME" />
      </div>
      <div className="pt-4 md:pt-8">
        <p className="text-sm leading-6  tracking-tight text-lightText  dark:text-white md:text-base ">
          I take pleasure in meeting new people and am enthusiastic about
          assisting with any queries you may have.
          <span className="block py-2"> </span>
          Additionally, I love discussing forgotten or unfinished projects and
          exploring the fascinating topic of how artificial intelligence could
          potentially dominate the world.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="w-5 h-5 stroke-lightGrey1 dark:stroke-darkGrey1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <span className="text-sm font-medium text-lightGrey1 hover:cursor-pointer dark:text-darkGrey1">
            <Link href="agarwal.harsh2021@gmail.com" target="_blank">
              Send me a Mail
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={Twitter}
            alt="This is the icon"
            className="w-5 h-5 stroke-lightGrey1 stroke-1 dark:stroke-darkGrey1"
          />
          <span className="text-sm font-medium text-lightGrey1 hover:cursor-pointer dark:text-darkGrey1">
            <Link href="https://twitter.com/harshii04" target="_blank">
              DM me on Twitter
            </Link>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={Github}
            alt="This is the icon"
            className="w-5 h-5 stroke-lightGrey1 stroke-1 dark:stroke-darkGrey1"
          />
          <span className="text-sm font-medium text-lightGrey1 hover:cursor-pointer dark:text-darkGrey1">
            <Link
              href="https://github.com/harshii04/harsh_portfolio"
              target="_blank"
            >
              View Source Code
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
