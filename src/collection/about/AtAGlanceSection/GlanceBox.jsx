import React from "react";
import "./GlanceBox.css";

export const GlanceBox = ({heading, icon, isMainHeading}) => {
  return (
    <div className='glance-box'>
      <p className={`heading ${isMainHeading ? "main-heading" : ""}`}>
        {isMainHeading ? (
          <>
            <span className="line">Metaguise</span>
            <span className="line">At A</span>
            <span className="line">Glance</span>
          </>
        ) : (
          heading
        )}
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
