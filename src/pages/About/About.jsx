import { AboutHeroSection } from '../../collection';
import VisionIcon from '../../assets/about/vision.png';
import MissionIcon from '../../assets/about/mission.png';
import { VisionAndMission } from '../../collection/about/VisionAndMission/VisionAndMission';

const visions = [
  {
    id: 1,
    icon: VisionIcon,
    title: 'Vision',
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
    title: 'Mission',
    description1: `DRV (Shri Deepak Raheja’s Vision) is the bloodline of all meta organizations, based on the life lessons taught by our founding father specifically focusing on a mindset “Anything is Possible”.`,
    description2: `Where the will is unbreakable, standards un-challengeable, energy in-exhaustible, morals un-corruptable and the aura unstoppable.`,
  },
];
export const About = () => {
  return (
    <div className='tw-space-y-8'>
      <AboutHeroSection />
      <div className='tw-grid tw-grid-cols-2 tw-gap-4 tw-container tw-mx-auto'>
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
    </div>
  );
};
