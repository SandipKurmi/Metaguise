import AboutHero from '../../../assets/about/about-hero.png';
export const AboutHeroSection = () => {
  return (
    <div className='tw-my-40 tw-text-left tw-flex' style={{ display: 'flex' }}>
      <div className='tw-ml-48 tw-mr-20 tw-space-y-6' >
        <h1 style={{fontWeight : '500', fontSize: '64px', Fout: 'Degular', lineHeight: '50px', }}>
          About Us</h1>
        <p className='tw-text-base tw-leading-5 tw-text-left'  style={{Fout: 'Degular',  fontSize: '16px',  width: '500', lineHeight: '21px'  }}>
          {`Metaguise® is a story of resilience, renewal, and limitless ambition. Like a phoenix rising from adversity, our journey has been one of transformation: overcoming challenges to become a symbol of architectural innovation`}{' '}
        </p>

        <p className='tw-text-base tw-leading-5 tw-text-left' style={{Fout: 'Degular', fontSize: '16px',  width: '500', lineHeight: '21px' }}>
          {`Founded by visionary chairman Shri Deepak Raheja, Metaguise operates on the belief that “Anything is Possible.” This philosophy drives every initiative, not only building structures but also crafting spaces that blend speed, strength, and creativity—leaving lasting legacies in infrastructure.`}{' '}
        </p>

        <p className='tw-text-base tw-leading-5 tw-text-left' style={{Fout: 'Degular', fontSize: '16px',  width: '500',  lineHeight: '21px' }}>
          {`At the heart of our innovation is parametric facade technology, which merges complex geometries with advanced materials to produce visually striking and dynamic exteriors. This cutting-edge approach allows us to break creative boundaries, setting new standards in architecture.`}{' '}
        </p>

        <p className='tw-text-base tw-leading-5 tw-text-left' style={{Fout: 'Degular', fontSize: '16px',  width: '500', lineHeight: '21px' }}>
          {`As we continue our journey, Metaguise rises to every challenge—our spirit as unyielding as the phoenix, always reaching new heights.`}
        </p>
      </div>
      <img src={AboutHero} alt='about-hero' 
      style={{width: '557px', height:'auto' }}/>
    </div>
  );
};
