import Link from "next/link";
import Btn from "../../components/Btn";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";

/* eslint-disable react/no-unescaped-entities */
const pagenotfound = () => {
  return (
    <div className="flex flex-col max-w-708 mx-auto pt-8 md:pt-16 px-6 items-center justify-center h-screen">
      <div>
        <span className=" text-lightGrey1 dark:text-darkGrey1 font-medium md:text-xl text-sm ">
          Oops, it looks like I lost the rhythm! I'm still iterating on this
          page.
        </span>
      </div>
      <div>
        <span className=" text-lightGrey1 dark:text-darkGrey1 font-medium md:text-xl text-sm  ">
          In the meantime, let's improvise and explore the rest of the site.
        </span>
      </div>
      <div className="py-4">
        <Link href="/">
          <Btn textLabel="Take Me Back" className="py-8" />
        </Link>
      </div>
      <footer className="mt-auto text-white pt-8 md:pt-16 text-center py-4">
        <div className="flex flex-col items-center ">
          <div>
            <span className="text-xs font-normal font-heading  text-secondary ">
              <RandomQuoteGenerator />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <div className="py-1">
              <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] font-semibold text-transparent bg-clip-text text-sm">
                Designed & Developed by Harsh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default pagenotfound;
