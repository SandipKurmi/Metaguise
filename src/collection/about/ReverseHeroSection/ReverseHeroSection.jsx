import AboutReverseHero from "../../../assets/about/about-reverse-hero.png";
import "./ReverseHeroSection.css";

export const ReverseHeroSection = () => {
  return (
    <div className="tw-w-full tw-h-full">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-max-w-[1440px] tw-mx-auto">
        <div className="tw-w-full md:tw-w-[40%] tw-pl-0">
          <img
            src={AboutReverseHero}
            alt="about-hero"
            className="tw-w-full tw-h-full tw-object-cover"
          />
        </div>

        <div className="tw-w-full md:tw-w-[60%] tw-px-4 md:tw-px-20 tw-flex tw-flex-col tw-justify-start tw-text-left">
          <div className="tw-max-w-[600px] tw-space-y-6">
            <h1 className="tw-text-4xl md:tw-text-5xl lg:tw-text-[64px] tw-leading-tight md:tw-leading-[60px] tw-font-normal tw-text-left">
              Design and Engineering Prowess
            </h1>

            <div className="tw-space-y-6">
              <p className="tw-text-base tw-leading-relaxed tw-text-left">
                At Metaguise, we pride ourselves on our ability to seamlessly
                merge design creativity with engineering excellence. Our team is
                dedicated to crafting architectural solutions that are not only
                visually striking but also built for longevity and
                sustainability.
              </p>

              <p className="tw-text-base tw-leading-relaxed tw-text-left">
                Using advanced materials paired with state-of-the-art surface
                treatments such as anodization and polyester coatings, we ensure
                our products stand the test of time while requiring minimal
                maintenance.
              </p>

              <p className="tw-text-base tw-leading-relaxed tw-text-left">
                We embrace the natural interplay of light, air, and texture,
                creating designs that breathe life into spaces and resonate with
                elegance and functionality. Whether through our facades,
                louvers, or custom elements, we transform imagination into
                tangible excellence that inspires.
              </p>
            </div>

            <div className="tw-flex tw-justify-start">
              <button
                className="hover-button tw-mt-8"
                aria-label="See all projects"
              >
                <span>See All Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
