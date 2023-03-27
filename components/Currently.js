import Marquee from "react-fast-marquee";
import CurrentlyCard from "./CurrentlyCard";
import College from "/public/images/Frame 287646291.png";
import Avalon from "/public/images/AvalonLogo.png";
import Netflix from "/public/images/NetflixLogo.png";
import Spotify from "/public/images/SpotifyLogo.png";
import Link from "next/link";
import MarqueeComp from "./MarqueeComp";

const Currently = () => {
  return (
    <div className="flex flex-col gap-4 px-6 md:pt-24 pt-16 ">
      <div>
        <MarqueeComp textLabel="CURRENTLY" />
      </div>

      <div className="grid md:grid-cols-2 md:grid-rows-2 auto-cols-max md:gap-4 grid-cols-1 gap-3">
        {" "}
        <Link
          href="https://vit.ac.in/"
          target="_blank"
          className="hover:cursor-pointer"
        >
          {" "}
          <CurrentlyCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            }
            heading="Undergrad"
            subHeading="VIT, Vellore"
            image={College}
          />
        </Link>
        <Link
          href="https://www.buildonscenes.com/"
          target="_blank"
          className="hover:cursor-pointer"
        >
          {" "}
          <CurrentlyCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            }
            heading="Crafting Experiences"
            subHeading="Avalon Scenes"
            image={Avalon}
          />
        </Link>
        <Link
          href="https://www.google.com/search?q=Intersettalr&rlz=1C5CHFA_enIN1025IN1025&oq=Intersettalr&aqs=chrome..69i57.2583j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
          className="hover:cursor-pointer"
        >
          {" "}
          <CurrentlyCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            }
            heading="Interstellar"
            subHeading="Sci - Fi Movie"
            image={Netflix}
          />
        </Link>
        <Link
          href="https://open.spotify.com/track/2p8IUWQDrpjuFltbdgLOag?si=1f6fec9aaf374411"
          target="_blank"
          className="hover:cursor-pointer"
        >
          {" "}
          <CurrentlyCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            }
            heading="After Hours"
            subHeading="The Weeknd"
            image={Spotify}
          />
        </Link>
      </div>
    </div>
  );
};

export default Currently;
