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
    "**IT** Systems Technician with a growing interest in **coding**, currently enhancing my skills in **B**ackend with **Python** and **F**rontend with **NextJS** or **Astro**. Fascinated by **AI** and its potential, exploring **Machine Learning** and **LLM**'s. Aiming to blend these technologies with my **IT** expertise.",

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
