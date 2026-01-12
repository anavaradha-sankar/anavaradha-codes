interface WorkExperience {
  logoName: string;
  duration: string;
  position: string;
  company: string;
}
import SectionHeader from "../common/section-header";
import experiencesData from "./data.json";

export const Experience = () => {
  const experiences: WorkExperience[] = experiencesData.workExperience;

  return (
    <div className="min-h-screen w-screen bg-experienceSection p-10 text-primaryTextColor lg:px-52">
      <SectionHeader text="02 / EXPERIENCE" accentColor="bg-secondaryAccent" />
      <div className="font-bigShoulders text-6xl font-extrabold md:text-8xl">
        <p className="mb-4">14+ YEARS OF</p>
        <p>EXPERIENCE</p>
      </div>

      <div className="my-32">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6">
            <div className="border-white-400 grid grid-cols-1 gap-4 border-b pb-8 md:grid-cols-3 md:gap-16">
              <span className="text-left text-lg font-semibold md:font-normal">
                {experience.company}
              </span>
              <span className="text-left text-lg md:pl-16">
                {experience.position}
              </span>
              <span className="text-lg md:text-right">
                {experience.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
