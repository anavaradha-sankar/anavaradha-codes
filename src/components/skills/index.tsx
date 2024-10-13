interface SkillCategory {
  category: string;
  skills: string[];
}
import SectionHeader from "../common/section-header";
import skillsData from "./data.json";

export const TechnicalSkills: React.FC = () => {
  const technicalSkills: SkillCategory[] = skillsData.technicalSkills;

  return (
    <div className="flex w-full flex-col px-10 md:flex-row">
      {/* Left side div */}
      <div className="mb-4 flex md:mb-0 md:w-1/2">
        <p className="text-3xl font-medium md:text-xl">Technical skills</p>
      </div>

      {/* Right side div */}
      <div className="flex justify-center md:w-1/2">
        <div>
          {technicalSkills.map((skillCategory, index) => (
            <div key={index} className="mb-4">
              <p className="mb-4 text-lg font-medium">
                {skillCategory.category}
              </p>
              <div className="flex flex-wrap gap-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="rounded-full border border-yellow-500 px-5 py-1.5 text-center text-sm text-yellow-500"
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
    <div className="min-h-screen w-screen bg-skillsSection p-10 text-primaryTextColor lg:px-52">
      <SectionHeader text="03 / SKILLS" accentColor="bg-tertiaryAccent" />
      <div className="font-bigShoulders text-6xl font-extrabold md:text-8xl">
        <p className="mb-4 uppercase">Full-Stack </p>
        <p className="mb-4 uppercase">Proficiencies</p>
      </div>
      <div className="my-32">
        {technicalSkills.map((skillCategory, skillCategoryIndex) => (
          <div
            className="bg-skillsDarkAccent mb-4 rounded-lg p-12 shadow-md"
            key={skillCategoryIndex}
          >
            <div className="flex-col items-center">
              <p className="mb-8 text-xl font-semibold">
                {skillCategory.category}
              </p>
              <div className="flex flex-wrap gap-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-md rounded-lg bg-skillsLightAccent px-5 py-1.5 text-center font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
