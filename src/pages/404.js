import Head from "next/head";
import Link from "next/link";
import Btn from "../../components/Btn";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";

/* eslint-disable react/no-unescaped-entities */
const pagenotfound = () => {
  return (
    <div className="mx-auto flex h-screen max-w-708 flex-col items-center justify-center px-6 pt-8 md:pt-16">
      <Head>
        <title>Oopss!..</title>
      </Head>
      <div>
        <span className=" text-sm font-medium text-lightGrey1 dark:text-darkGrey1 md:text-xl ">
          Oops, it looks like I lost the rhythm! I'm still iterating on this
          page.
        </span>
      </div>
      <div>
        <span className=" text-sm font-medium text-lightGrey1 dark:text-darkGrey1 md:text-xl  ">
          In the meantime, let's improvise and explore the rest of the site.
        </span>
      </div>
      <div className="py-4">
        <Link href="/">
          <Btn textLabel="Take Me Back" className="py-8" />
        </Link>
      </div>
      <footer className="mt-auto py-4 pt-8 text-center text-white md:pt-16">
        <div className="flex flex-col items-center ">
          <div>
            <span className="font-heading text-secondary text-xs  font-normal ">
              <RandomQuoteGenerator />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <div className="py-1">
              <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] bg-clip-text text-xs font-semibold  text-transparent md:text-sm">
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
