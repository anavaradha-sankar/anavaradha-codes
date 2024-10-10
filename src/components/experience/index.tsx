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
    <div className="w-screen min-h-screen bg-experienceSection text-primaryTextColor p-10 lg:px-52">
      <SectionHeader text="02 / EXPERIENCE" accentColor="bg-secondaryAccent" />
      <div className="font-bigShoulders text-6xl md:text-8xl font-extrabold">
        <p className="mb-4">13+ YEARS OF</p>
        <p>EXPERIENCE</p>
      </div>

      <div className="my-32">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 border-b border-white-400 pb-8">
              <span className="text-lg font-semibold md:font-normal  text-left">
                {experience.company}
              </span>
              <span className="text-lg  text-left md:pl-16">
                {experience.position}
              </span>
              <span className="text-lg  md:text-right">
                {experience.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
