import MarqueeComp from "./MarqueeComp";
import ProjectCard from "./ProjectCard";
// import Fampay from "/public/images/Fampay.svg";
// import Dive from "/public/images/Dive.svg";
// import Razorpay from "/public/images/Razorpay.svg";
import Fampay from "/public/images/Fampay.png";
import Razorpay from "/public/images/Razorpay.png";
import Dive from "/public/images/Dive.png";
import Btn from "./Btn";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col px-6 pt-24 md:pt-32">
      <div>
        <MarqueeComp textLabel="PROJECTS" />
      </div>
      <div className="flex flex-col items-center gap-4 pt-4 md:pt-8">
        <div className="flex flex-col">
          <ProjectCard
            image={Fampay}
            heading="UI/ UX Case Study: Group Food Ordering"
            subtext="Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group."
            date="2022"
            status="Completed"
            link="https://bootcamp.uxdesign.cc/group-food-ordering-helping-people-order-food-online-in-groups-e669b696434d"
          />
          <hr className="border-lightLightStroke dark:border-darkLightStroke" />
          <ProjectCard
            image={Razorpay}
            heading="UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses"
            subtext="Designed a feature that simplifies local store sales on WhatsApp for businesses."
            date="2022"
            status="Completed"
            link="https://bootcamp.uxdesign.cc/a-ui-ux-case-study-enabling-the-local-stores-to-sell-items-on-whatsapp-for-businesses-4f372ebfded5"
          />
          <hr className="border-lightLightStroke dark:border-darkLightStroke" />
          <ProjectCard
            image={Dive}
            heading="Creating Dive platform's Trivia Game"
            subtext="Designed a trivia game to enhance user engagement during sessions on Dive platform."
            date="2021"
            status="Completed"
            link="https://bootcamp.uxdesign.cc/trivia-dive-intern-challenge-9bcefc186517"
          />
        </div>
        <div className="">
          <Link href="/projects">
            <Btn textLabel="View All Projects" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
