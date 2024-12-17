import AboutReverseHero from '../../../assets/about/about-reverse-hero.png';
export const ReverseHeroSection = () => {
  return (
    <div className='tw-my-40 tw-text-left tw-flex font'>
      <img src={AboutReverseHero} alt='about-hero' />
      <div className='tw-ml-48 tw-mr-20 tw-space-y-6'>
        <h1 className='tw-text-[64px] tw-leading-[50px]'>
          Design and Engineering Prowess
        </h1>
        <p className='tw-text-base tw-leading-5 tw-text-left'>
          {`At Metaguise, we pride ourselves on our ability to seamlessly merge design creativity with engineering excellence. Our team is dedicated to crafting architectural solutions that are not only visually striking but also built for longevity and sustainability.`}{' '}
        </p>

        <p className='tw-text-base tw-leading-5 tw-text-left'>
          {`Using advanced materials paired with state-of-the-art surface treatments such as anodization and polyester coatings, we ensure our products stand the test of time while requiring minimal maintenance.`}{' '}
        </p>

        <p className='tw-text-base tw-leading-5 tw-text-left'>
          {`We embrace the natural interplay of light, air, and texture, creating designs that breathe life into spaces and resonate with elegance and functionality. Whether through our facades, louvers, or custom elements, we transform imagination into tangible excellence that inspires​.`}{' '}
        </p>

        <button className='hover-button' aria-label='See all projects'>
          <span>See All Projects</span>
        </button>
      </div>
    </div>
  );
};
