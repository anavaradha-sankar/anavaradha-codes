
interface SkillCategory {
  category: string;
  skills: string[];
}
import skillsData from "./data.json"; 

export const TechnicalSkills : React.FC = () =>  {
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
          <p className="text-lg font-medium mb-4">{skillCategory.category}</p>
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
}

export const TechnicalSkillsNonResponsive: React.FC = () => {
  const technicalSkills: SkillCategory[] = skillsData.technicalSkills;

  

  return (
    <div className="flex w-full px-10">
      {/* Left side div */}
      <div className="w-1/3 flex justify-center">
        <p className="text-3xl font-medium ">Technical skills</p>
      </div>

      {/* Right side div */}
      <div className="w-2/3 flex justify-center ">
      <div>
        {technicalSkills.map((skillCategory, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-medium mb-4">{skillCategory.category}</p>
            <div className="flex flex-wrap gap-3">
              {skillCategory.skills.map((skill, skillIndex) => (
                <div
                key={skillIndex}
                className=" px-4 py-1 rounded-full border border-yellow-500 text-center text-sm text-yellow-500"
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

//export default TechnicalSkills;

 export const TechnicalSkills1 = () => (
   
    <div className="flex w-full mx-10">
  {/* Left side div */}
  <div className="w-1/3">
    <p className="text-3xl font-medium">Technical skills</p>
  </div>

  {/* Right side div */}
  <div className="w-2/3">
    {/* Header for the list with larger and bolder text */}
    <p className="text-3xl mb-4 ">Programming Languages</p>

    {/* List container with flex-wrap and space-x-2 for side-by-side layout */}
    <div className="flex flex-wrap gap-2 mb-8"> {/* Add space below the list */}
      {/* Adjust padding and text color */}
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">HTML</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">CSS</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">ES6+</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">JavaScript</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">TypeScript</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">NodeJS</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">C#</div>
    </div>

    {/* Header for the second list */}
    <p className="text-3xl mb-4 ">Frameworks</p>

    {/* List container for frameworks */}
    <div className="flex flex-wrap gap-2 mb-8">
      {/* Adjust padding and text color */}
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">React</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">Flutter</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">ASP.NET</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">.NET Core</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">GraphQL</div>
    </div>

    <p className="text-3xl mb-4 ">Databases</p>

{/* List container for frameworks */}
<div className="flex flex-wrap gap-2 mb-8">
  {/* Adjust padding and text color */}
  <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">MS SQL</div>
  <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">MySQL</div>
  <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">Postgres</div>
  <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">DynamoDB</div>
  <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">MongoDB</div>
</div>

<p className="text-3xl mb-4 ">CI/CD Pipelines</p>

    {/* List container for frameworks */}
    <div className="flex flex-wrap gap-2 mb-8">
      {/* Adjust padding and text color */}
      <div className="w-[120px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">Github Actions</div>

    </div>
    
    <p className="text-3xl mb-4 ">Infrastructure as Code</p>

    {/* List container for frameworks */}
    <div className="flex flex-wrap gap-2 mb-8">
      {/* Adjust padding and text color */}
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">Terraform</div>

    </div>

    <p className="text-3xl mb-4 ">Cloud Platforms</p>

    {/* List container for frameworks */}
    <div className="flex flex-wrap gap-2 mb-8">
      {/* Adjust padding and text color */}
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500">AWS</div>
      <div className="w-[80px] px-1.5 py-1.5 rounded-full border border-yellow-500 text-center text-xs text-yellow-500"> Azure</div>
    </div>
  </div>
</div>

  
   
  );
   