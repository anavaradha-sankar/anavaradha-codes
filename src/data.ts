export const profile = {
  name: "Anavaradha Sankar",
  fullName: "Anavaradha Sankar Balasubramanian",
  role: "Technical Lead",
  location: "Zurich, CH",
  email: "anavaradha.sankar@gmail.com",
  phone: "+41 76 223 11 23",
  phoneHref: "tel:+41762231123",
  cv: "/Anavaradha Sankar Resume 2026.pdf",
  status: "Open to new roles",
};

export const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    label: "LinkedIn",
    value: "anavaradha-sankar",
    href: "https://www.linkedin.com/in/anavaradha-sankar/",
  },
  {
    label: "GitHub",
    value: "anavaradha-sankar",
    href: "https://github.com/anavaradha-sankar",
  },
  {
    label: "Instagram",
    value: "@das.ist.sankar",
    href: "https://www.instagram.com/das.ist.sankar",
  },
];

export const facts = [
  { value: "15+", label: "Years building and shipping software" },
  { value: "~10", label: "Years at EF Education First" },
  { value: "B", label: "Swiss permit, no sponsorship needed" },
];

export const coreStack = [
  ".NET Core",
  "C#",
  "React",
  "TypeScript",
  "Angular",
  "Flutter",
  "AWS",
  "Terraform",
  "GitLab CI/CD",
  "Claude Code",
];

export interface Role {
  title: string;
  company: string;
  place: string;
  dates: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Technical Lead",
    company: "Tech Mahindra, for UBS",
    place: "Zurich",
    dates: "Nov 2024 to May 2026",
    points: [
      "Ran release management for UBS's Fund Client Reporting platform: planning, environment readiness, deployment coordination and checks after each release.",
      "Built across the .NET services and the Angular front end, including the portal screens clients use to set report frequency and pull valuations.",
      "Moved applications from Credit Suisse to UBS during the post-merger integration, from code changes to the release path into production.",
      "Owned the GitLab CI/CD pipelines and handled controlled releases through REX.",
      "Was the single point of contact for L3 production support, leading incident triage and root cause analysis on a platform under regulatory audit.",
      "Wrote the team's troubleshooting guides for pipeline and release problems, reviewed changes and mentored engineers on DevOps and front-end work.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "EF Education First",
    place: "Zurich",
    dates: "Apr 2022 to Sep 2024",
    points: [
      "Built Campus Connect in Flutter, the app EF campus students use for their profile, schedule, progress, payments and activities.",
      "Built the Customer Portal in React and TypeScript, so students could take tests, see invoices and pay them in the browser.",
      "Led major features in both products from design to release, and contributed to EF's shared component library.",
      "Connected both apps to backend microservices on Kubernetes, and worked on OAuth2 and single sign-on, Kafka and ETL data flows, and Elasticsearch search.",
      "Implemented the payment module with the Adyen gateway.",
      "Managed AWS infrastructure with Terraform, set up GitHub Actions pipelines that cut deployment time, and was the team's Scrum Master.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "EF Education First",
    place: "Bengaluru",
    dates: "Oct 2016 to Apr 2022",
    points: [
      "Worked on the rebuild of MyEF, EF's student website, in React and TypeScript.",
      "Moved infrastructure to AWS and switched payment processing from Ogone to Adyen.",
      "Led the content migration from Sitecore to Contentful.",
      "Supported MyEF in production and extended the My Staff portal for student awards and reward requests.",
    ],
  },
  {
    title: "Software Engineer",
    company: "EF Education First",
    place: "Bengaluru",
    dates: "Dec 2014 to Sep 2016",
    points: [
      "Built MyEF features for student schedules and tests.",
      "Built and maintained EF websites on Sitecore.",
      "Created a portal that matched host families with international students.",
      "Ran builds and deployments with Jenkins.",
    ],
  },
  {
    title: "Software Developer",
    company: "Samartha InfoSolutions",
    place: "Bengaluru",
    dates: "Feb 2011 to Nov 2014",
    points: [
      "Built ASP.NET and C# websites on MS SQL Server, hosted on IIS.",
      "Built desktop applications in WPF and WinForms.",
      "Developed document upload with full-text search, automatic keyword suggestions and a dashboard that ranked documents by how often people searched for them.",
    ],
  },
];

export const toolkit = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: [".NET Core", "ASP.NET", "C#", "GraphQL", "Node.js", "Kafka", "Elasticsearch"],
  },
  { group: "Mobile", items: ["Flutter"] },
  {
    group: "Data",
    items: ["MS SQL", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  },
  {
    group: "Cloud and delivery",
    items: [
      "AWS",
      "Azure",
      "Terraform",
      "GitLab CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Nexus",
      "Splunk",
      "Microsoft Entra ID",
    ],
  },
  { group: "AI tooling", items: ["Claude Code", "Agent tooling", "Generative AI"] },
  { group: "CMS", items: ["Contentful", "Storyblok", "Sitecore"] },
  {
    group: "Ways of working",
    items: ["Release coordination", "Scrum Master", "Stakeholder alignment"],
  },
];

export const education = [
  { title: "CAS, Generative AI", place: "University of Zurich", dates: "Oct 2026" },
  {
    title: "B.Tech, Information Technology",
    place: "Thangavelu Engineering College",
    dates: "2004 to 2008",
  },
];

export const certifications = {
  issuer: "Anthropic",
  items: [
    "Claude Code in Action",
    "Claude 101",
    "AI Fluency: Framework and Foundations",
    "Introduction to Agent Skills",
  ],
};

export const languages = [
  { name: "English", level: "" },
  { name: "Tamil", level: "" },
  { name: "German", level: "A2, improving" },
];
