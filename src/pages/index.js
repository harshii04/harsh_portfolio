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
        <title>Harshvardhan Agarwal</title>
        <title>Harshvardhan Agarwal - Product Designer</title>
        <meta
          name="description"
          content="I am a product designer with experience in UX/UI design, product strategy, and user research. Check out my portfolio and let's work together."
        />
        <meta
          name="keywords"
          content="product design, UX/UI design, user research, portfolio"
        />
        <meta name="author" content="Harshvardhan Agarwal" />
        <meta
          property="og:title"
          content="Harshvardhan Agarwal - Product Designer"
        />
        <meta
          property="og:description"
          content="I am a product designer with experience in UX/UI design, product strategy, and user research. Check out my portfolio and let's work together."
        />
        <meta property="og:image" content="/public/SocialMediaCover.png" />
        <meta
          name="twitter:title"
          content="Harshvardhan Agarwal - Product Designer"
        />
        <meta
          name="twitter:description"
          content="I am a product designer with experience in UX/UI design, product strategy, and user research. Check out my portfolio and let's work together."
        />
        <meta name="twitter:image" content="/public/SocialMediaCover.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
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
                  <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] font-semibold text-transparent bg-clip-text text-sm">
                    Designed & Developed by Harsh
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
