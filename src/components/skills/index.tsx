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

export const Skills = () => {
  const technicalSkills: SkillCategory[] = skillsData.technicalSkills;
  return (
    <div className="w-screen min-h-screen bg-customLightBrown text-white p-10 lg:px-52">
      <div className="mb-8 flex items-center">
        <div className="w-1.5 h-10 bg-customBrown mr-4"></div>
        <h1 className="text-xl font-semibold">03 / SKILLS</h1>
      </div>
      {technicalSkills.map((skillCategory, skillCategoryIndex) => (
        <div
          className="bg-customBrown p-12 rounded-lg shadow-md mb-4"
          key={skillCategoryIndex}
        >
          <div className="flex-col items-center">
            <p className="text-xl  font-semibold mb-8">
              {skillCategory.category}
            </p>
            <div className="flex flex-wrap gap-4">
              {skillCategory.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-5 py-1.5 bg-customLightBrown rounded-lg  text-center text-md font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
