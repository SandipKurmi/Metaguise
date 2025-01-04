import AboutIcon from "../../../assets/about/about-icon.svg";
import AboutIcon2 from "../../../assets/about/about-icon2.svg";
import AboutIcon3 from "../../../assets/about/about-icon3.svg";
import AboutIcon4 from "../../../assets/about/about-icon4.svg";
import AboutIcon5 from "../../../assets/about/about-icon5.svg";
import AboutIcon6 from "../../../assets/about/about-icon6.svg";
import AboutIcon7 from "../../../assets/about/about-icon7.svg";
import { GlanceBox } from "./GlanceBox";

export const AtAGlanceSection = () => {
  const glanceData = [
    {
      id: 1,
      heading: "Metaguise At A Glance",
    },
    {
      id: 2,
      heading: "India’s Premier Metal Facade and Cladding Company",
      icon: AboutIcon,
    },
    {
      id: 3,
      heading: "Over 1200 projects completed globally",
      icon: AboutIcon2,
    },
    {
      id: 4,
      heading: "Flagship Experience Center",
      icon: AboutIcon3,
    },
    {
      id: 5,
      heading: "Leveraging innovative technologies like CGI, VR and AR",
      icon: AboutIcon4,
    },
    {
      id: 6,
      heading: "Wide range of metal materials and patterns",
      icon: AboutIcon5,
    },
    {
      id: 7,
      heading: "Revolutionary parametric engineering algorithms",
      icon: AboutIcon6,
    },
    {
      id: 8,
      heading: "All weather tested products with warranty",
      icon: AboutIcon7,
    },
  ];

  return (
    <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-justify-items-center">
        {glanceData.map((item) => (
          <GlanceBox
            key={item.id}
            heading={item.heading}
            icon={item.icon}
            isMainHeading={item.id === 1}
          />
        ))}
      </div>
    </div>
  );
};
