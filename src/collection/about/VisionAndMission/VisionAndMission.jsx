import React from "react";
import "./VisionAndMission.css"; // Ensure this path is correct

export const VisionAndMission = ({
  icon,
  title,
  description1,
  description2,
}) => {
  return (
    <div className="vision-mission-card">
      <div className="tw-space-y-6 tw-px-8 tw-pb-8">
        <img
          className="tw-text-right tw-ml-auto tw-block"
          src={icon}
          alt={title}
        />
        <h2>{title}</h2>
        <p className="tw-text-base tw-text-left">{description1}</p>
        <p className="tw-text-base tw-text-left">{description2}</p>
      </div>
    </div>
  );
};
