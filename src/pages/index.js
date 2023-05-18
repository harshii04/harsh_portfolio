import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "../../components/HeroHead";
import { Inter } from "next/font/google";
import HeroDesc from "../../components/HeroDesc";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import ContactMe from "../../components/ContactMe";
import RandomQuoteGenerator from "../../components/RandomQuoteGenerator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Harshvardhan Agarwal</title>
        <title>Harshvardhan Agarwal</title>
        <title>Harshvardhan Agarwal - Product Designer</title>
     
        <meta
          name="keywords"
          content="product design, UX/UI design, user research, portfolio"
        />
        <meta name="author" content="Harshvardhan Agarwal" />
      
     
        <meta
          property="og:image"
          content="https://harshii.works/Twitter%20Banner.png"
        />
        <meta
          name="twitter:title"
          content="Harshvardhan Agarwal - Product Designer"
        />
        <meta
          property="twitter:card"
          content="https://harshii.works/Twitter%20Banner.png"
        />
        <meta
          name="twitter:description"
          content="I am a product designer with experience in UX/UI design, product strategy, and user research. Check out my portfolio and let's work together."
        />
        <meta
          name="twitter:image"
          content="https://harshii.works/Twitter%20Banner.png"
        />
        <meta property="og:url" content="Canonical link preview URL" />
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
      <motion.div
        className="mx-auto max-w-708"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={inter.className}>
          <Hero />
          <HeroDesc />
          {/* <Currently /> */}
          <Projects />
          <Experience />
          <ContactMe />
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
                  <p className="bg-gradient-to-r from-[#8e62da]  via-[#3e93ed] to-[#bb4dac] bg-clip-text text-xs font-semibold text-transparent md:text-sm">
                    Designed & Developed by Harsh
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </motion.div>
    </>
  );
}
