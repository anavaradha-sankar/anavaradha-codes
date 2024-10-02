interface WorkExperience {
  logoName: string;
  duration: string;
  position: string;
  company: string;
}
import experiencesData from "./data.json";

export const Experience = () => {
  const experiences: WorkExperience[] = experiencesData.workExperience;
  const skills = [
    "HTML",
    "CSS",
    "ES6+",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "C#",
    "React",
    "Flutter",
    "ASP.NET",
    ".NET Core",
    "GraphQL",
    "MS SQL",
    "MySQL",
    "Postgres",
    "DynamoDB",
    "MongoDB",
    "Github Actions",
    "Docker",
    "Terraform",
    "AWS",
    "Azure",
  ];
  return (
    <div className="w-screen min-h-screen bg-customGradient2 text-white p-10 lg:px-52">
      <div className="mb-8 flex items-center">
        <div className="w-1.5 h-10 bg-customeGreen mr-4"></div>
        <h1 className="text-xl font-semibold">02 / EXPERIENCE</h1>
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
      {/* <div className="bg-customBrown p-12 rounded-lg shadow-md">
        <div className="flex-col items-center">
          <p className="text-xl font-semibold mb-8">Skills</p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="px-5 py-1.5 bg-customLightBrown rounded-lg  text-center text-sm font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};
