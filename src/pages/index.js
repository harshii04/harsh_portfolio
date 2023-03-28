import Head from "next/head";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";
import Hero from "../../components/HeroHead";
import { Spline_Sans } from "next/font/google";
import HeroDesc from "../../components/HeroDesc";
import Currently from "../../components/Currently";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import ContactMe from "../../components/ContactMe";

const splineSans = Spline_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Harshvardhan Agarwal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-708 mx-auto ">
        <div className={splineSans.className}>
          <Hero />
          <HeroDesc />
          <Currently />
          <Projects />
          <Experience />
          <ContactMe />
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
                  <p className="text-lightGrey2 dark:text-darkGrey2 text-xs">
                    Designed & Developed by{" "}
                    <span className="text-lightGrey2 dark:text-darkGrey2 text-xs">
                      Harsh
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
