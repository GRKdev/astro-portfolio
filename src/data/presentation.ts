type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "gorka@iand.dev",
  title: "*Hi*, I’m Gorka ",
  profile: "/profile-logo.webp",
  description:
    "Andorran *developer* currently working with *Python, NextJS and Typescript*. Interested on how *AI* can help us to improve our lives. Learning about *Machine Learning* and *Data Science*.",

  socials: [
    {
      label: "Github",
      link: "https://github.com/GRKdev",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gorka-vilar/",
    },
  ],
};

export default presentation;
