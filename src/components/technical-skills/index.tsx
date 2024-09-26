interface SkillCategory {
  category: string;
  skills: string[];
}
import skillsData from "./data.json";

export const TechnicalSkills: React.FC = () => {
  const technicalSkills: SkillCategory[] = skillsData.technicalSkills;

  return (
    <div className="flex flex-col md:flex-row w-full px-10">
      {/* Left side div */}
      <div className="md:w-1/2 flex mb-4 md:mb-0">
        <p className="text-3xl md:text-xl font-medium">Technical skills</p>
      </div>

      {/* Right side div */}
      <div className="md:w-1/2 flex justify-center">
        <div>
          {technicalSkills.map((skillCategory, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-medium mb-4">
                {skillCategory.category}
              </p>
              <div className="flex flex-wrap gap-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-5 py-1.5 rounded-full border border-yellow-500 text-center text-sm text-yellow-500"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
