export const GlanceBox = ({heading, icon}) => {
  return (
    <div className='tw-min-w-64 tw-min-h-80 tw-bg-[#232323] tw-rounded-3xl tw-p-8 tw-relative'>
      <p className={`${icon? "tw-text-2xl":"tw-text-5xl"} tw-text-left`}>
        {heading}
      </p>
      {icon && (
        <img
          className='tw-absolute tw-bottom-0 tw-right-0'
          src={icon}
          alt='about-icon'
        />

      )}
    </div>
  );
};
