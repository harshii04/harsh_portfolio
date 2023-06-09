import Image from "next/image";
import IconBtnLeft from "./IconBtnLeft";
import TagComp from "./TagComp";
import Link from "next/link";

const ExperienceCard = ({
  time,
  type,
  heading,
  logo,
  subText,
  description,
  link,
  btnLabel,
  btn_hide,
}) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex gap-2">
        <TagComp textLabel={time} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 py-2">
            <Image
              src={logo}
              alt="this is the logo of the company"
              width={48}
              height={48}
            />
            <span className="font-medium leading-5 tracking-tight text-lightText dark:text-white md:text-lg">
              {heading}{" "}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="md:hover:underline-lightGrey1 text-sm font-medium leading-5 tracking-tight text-lightGrey1 dark:text-darkGrey1 md:text-base md:hover:underline md:hover:underline-offset-4">
              <Link href={link} target="_blank">
                {subText}
              </Link>
            </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#a0a0a0"
              className="md:w-4 w-3 h-3 md:h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
        <div>
          <span className="text-sm leading-6 tracking-tight text-lightText dark:text-white md:text-clip md:text-base md:leading-7 md:tracking-tight">
            {description}
          </span>
        </div>
      </div>
      <div>
        <IconBtnLeft
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
          textLabel={btnLabel}
          show_btn={btn_hide}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
