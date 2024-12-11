import { useEffect, useLayoutEffect } from 'react'; // Import useEffect
import { AboutHeroSection } from '../../collection';
import VisionIcon from '../../assets/about/vision.png';
import MissionIcon from '../../assets/about/mission.png';
import { VisionAndMission } from '../../collection/about/VisionAndMission/VisionAndMission';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
    gsap.to("h1", {
      x: 200,
      scrollTrigger: {
        trigger: 'h1',
        scroller: "body",
        markers: true,
        start: 'top 60%',
        end: 'top 10%',
        scrub: 2,
      }
    })

      return () => ctx.revert();
    });
  }, []);

  return (
    <div className='tw-space-y-8'>
      {/* <AboutHeroSection />
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
      </div> */}

      <div>
        <div className='tw-h-screen tw-w-screen tw-bg-red-200'>
          <div className='tw-bg-purple-400 tw-h-[60vh] tw-w-[100px]'></div>
        </div>
        <div
          id='page'
          className='tw-h-screen tw-w-screen tw-bg-yellow-200 tw-flex tw-flex-col tw-justify-center tw-items-center'
        >
          <h1 className='tw-bg-green-300 tw-p-5 tw-text-black'>Sana Saeed</h1>
        </div>
        <div className='tw-h-screen tw-w-screen tw-bg-red-200'>
          <div className='tw-bg-purple-400 tw-h-[60vh] tw-w-[100px]'></div>
        </div>
      </div>
    </div>
  );
};
