import React from "react";
import { SectionTitleProps } from "./sectionTitle.types";

const SectionTitle = ({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 ">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
