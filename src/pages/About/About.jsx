import { AboutHeroSection } from "../../collection";
import VisionIcon from "../../assets/about/vision.png";
import MissionIcon from "../../assets/about/mission.png";
import { VisionAndMission } from "../../collection/about/VisionAndMission/VisionAndMission";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";
import { AtAGlanceSection } from "../../collection/about/AtAGlanceSection/AtAGlanceSection";
import { ReverseHeroSection } from "../../collection/about/ReverseHeroSection/ReverseHeroSection";
// import { MeetTeam } from "../../collection/about/MeetTeam/MeetTeam";

gsap.registerPlugin(ScrollTrigger);

const visions = [
  {
    id: 1,
    icon: VisionIcon,
    title: "Vision",
    description1: `DRV (Shri Deepak Raheja’s Vision) serves as the foundation for all
          meta organizations, inspired by the life lessons imparted by our
          founding father.`,
    description2: `This vision emphasizes the mindset that "Anything is Possible" when
          combined with an unbreakable will, unwavering standards, boundless
          energy, incorruptible morals, and an unstoppable aura.`,
  },
  {
    id: 2,
    icon: MissionIcon,
    title: "Mission",
    description1: `DRV (Shri Deepak Raheja’s Vision) is the bloodline of all meta organizations, based on the life lessons taught by our founding father specifically focusing on a mindset “Anything is Possible”.`,
    description2: `Where the will is unbreakable, standards un-challengeable, energy in-exhaustible, morals un-corruptable and the aura unstoppable.`,
  },
];

export const About = () => {
  return (
    <>
      <div className="tw-space-y-8">
        {/* <AboutHeroSection /> */}
        <AboutHeroSection />

        {/* <div className="tw-container tw-mx-auto"> */}

        <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-container tw-mx-auto">
          {visions.map((vision) => (
            <VisionAndMission
              key={vision.id}
              title={vision.title}
              icon={vision.icon}
              description1={vision.description1}
              description2={vision.description2}
            />
          ))}
        </div>

        <div
          className="tw-w-full tw-h-[600px] tw-bg-cover tw-bg-center tw-bg-no-repeat tw-my-14"
          style={{
            margin: "80px 0px",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/RRwuG5FdeNc?rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="tw-container tw-mx-auto">
          <AtAGlanceSection />
        </div>

        <div>
          <ReverseHeroSection />
        </div>

        <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-mb-12">
          <h1 className="font tw-tracking-wide tw-leading-[50px] tw-text-[64px] tw-text-center ">
            Meet The Team
          </h1>
          {/* <MeetTeam /> */}
          <button className="hover-button" aria-label="See all projects">
            <span>See All Projects</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
