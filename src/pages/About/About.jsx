import { AboutHeroSection } from "../../collection";
import { VisionAndMission } from "../../collection/about/VisionAndMission/VisionAndMission";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";
import { AtAGlanceSection } from "../../collection/about/AtAGlanceSection/AtAGlanceSection";
import { ReverseHeroSection } from "../../collection/about/ReverseHeroSection/ReverseHeroSection";
// import { MeetTeam } from "../../collection/about/MeetTeam/MeetTeam";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  return (
    <>
      <div>
        <AboutHeroSection />

        <VisionAndMission />

        <div className="tw-container tw-mx-auto tw-px-4 tw-my-20 md:tw-my-14">
          <div
            className="tw-relative tw-w-full tw-overflow-hidden"
            style={{
              paddingTop: "56.25%", // 16:9 Aspect Ratio
            }}
          >
            <iframe
              className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
              src="https://www.youtube.com/embed/RRwuG5FdeNc?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div>
          <AtAGlanceSection />
        </div>

        <div>
          <ReverseHeroSection />
        </div>

        {/* <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-mb-12">
          <h1 className="font tw-tracking-wide tw-leading-[50px] tw-text-[64px] tw-text-center ">
            Meet The Team
          </h1>
          <MeetTeam />
          <button className="hover-button" aria-label="See all projects">
            <span>See All Projects</span>
          </button>
        </div> */}
      </div>
      <Footer />
    </>
  );
};
