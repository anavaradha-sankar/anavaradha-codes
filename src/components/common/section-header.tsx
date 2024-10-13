import React from "react";

interface SectionHeaderProps {
  text: string;
  accentColor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, accentColor }) => {
  return (
    <div className="mb-8 flex items-center">
      <div className={`h-10 w-1.5 ${accentColor} mr-4`}></div>
      <h1 className="text-xl font-semibold">{text}</h1>
    </div>
  );
};

export default SectionHeader;
