import React from "react";

interface SectionHeaderProps {
  text: string;
  accentColor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, accentColor }) => {
  return (
    <div className="flex items-center mb-8">
      <div className={`w-1.5 h-10 ${accentColor} mr-4`}></div>
      <h1 className="text-xl font-semibold">{text}</h1>
    </div>
  );
};

export default SectionHeader;
