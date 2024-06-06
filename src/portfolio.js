/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import csharpIcon from './assets/images/icons8-c#-120.png';
import azureIcon from './assets/images/icons8-azure-120.png';
import cppIcon from './assets/images/icons8-c++-120.png';
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanker",
  title: "Hey all, I'm Priyanker",
  subTitle: emoji(
    "As a Senior Full Stack Developer, my journey in tech has spanned developing robust web solutions across diverse industries. My focus is on crafting resilient APIs and UI interfaces, ensuring they meet the dynamic needs of today's users."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P4nwj0puIvgnZA2lmtc8mUK8vsJwiRlU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priyanker",
  linkedin: "https://www.linkedin.com/in/priyankerrao/",
  gmail: "priyankerrao@gmail.com",
  medium: "https://medium.com/@priyankerrao",
  stackoverflow: "https://stackoverflow.com/users/6486290/priyanker-rao",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO PROVIDE AN IMPACT",
  skills: [+
    emoji("⚡ .NET for powerful server-side programming, SQL and NoSQL databases for data persistence and manipulation"),
    emoji(
      "⚡ JavaScript and Angular for dynamic and responsive UI/UX design experiences across all devices"
    ),
    emoji(
      "⚡ Microservices architecture with Docker for containerization, enhancing application scalability and deployment efficiency."
    ),
    emoji(
      "⚡ Proficient with Azure for reliable, scalable cloud solutions, and CI/CD pipelines."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c#",
      imageSrc: csharpIcon,
    },
    {
      skillName: "azure",
      imageSrc: azureIcon,
    },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "less",
      fontAwesomeClassname: "fab fa-less"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      imageSrc: cppIcon,
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Utah",
      logo: require("./assets/images/U_medallion_RED_RGB.jpg"),
      subHeader: "Master of Science in Information Systems",
      duration: "August 2023 - August 2024",
      desc: "Engaged in a comprehensive and diverse Information Systems curriculum supplementing technical skills with strategic business acumen",
      descBullets: ["Graduate Teaching Assistant - Web Based Applications Course"]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: require("./assets/images/JNTU_Hyderabad_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "June 2015 - May 2019",
      desc: "Studied and engaged in multifaceted projects encompassing web development, machine learning, and a spectrum of Computer Science applications.",
      descBullets: ["Teaching Assistant - Java & Data Structures"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Epam Systems",
      companylogo: require("./assets/images/epam-systems-logos-1.png"),
      date: "Jan 2021 – Jul 2023",
      desc: "",
      descBullets: [
        "Developed .NET RESTful APIs and Angular UI components for a high-usage wealth management application",
        "Led a successful migration from .NET Framework to .NET Core, enhancing performance and deployment efficiency with Docker containerization",
        "Recognized for outstanding delivery and project leadership with multiple internal awards"
      ]
    },
    
    {
      role: "Software Engineer",
      company: "Epam Systems",
      companylogo: require("./assets/images/epam-systems-logos-1.png"),
      date: "Aug 2020 – Jan 2021",
      desc: "",
      descBullets: [
        "Improved legacy .NET applications for Electronic Health Records by resolving API and WCF issues, optimizing response times",
        "Automated new client onboarding processes with Entity Framework migrations, streamlining initial data setup operations"
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Epam Systems",
      companylogo: require("./assets/images/epam-systems-logos-1.png"),
      date: "Jul 2019 – Aug 2020",
      desc: "",
      descBullets: [
        "Contributed to API and UI development for an insurance documents generation portal, incorporating ASP.NET Core and React",
        "Implemented system-wide logging with Graylog, enhancing application reliability and reducing downtime"
      ]
    },
    {
      role: "Intern",
      company: "Epam Systems",
      companylogo: require("./assets/images/epam-systems-logos-1.png"),
      date: "Oct 2018 – Jul 2019",
      desc: "",
      descBullets: [
        "Designed an internal chatbot to streamline HR inquiries using ASP.NET Core, Microsoft Bot Framework, and Azure AI Services",
        "Addressed code quality improvements by resolving numerous code smells and complexities"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications & Award Letters",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "",
      image: require("./assets/images/azure-fundamentals-600x600.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1W0tLhFAWUKTFd-VqVe7nfZrRMGgPv2VG/view?usp=drive_link"
        },
      ]
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      subtitle:
        "",
      image: require("./assets/images/OCAJSE8.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1nnawpZgSGADQcQqZpsbXLGniJqon-X8f/view?usp=drive_link"
        },
        {
          name: "Score Report",
          url: "https://drive.google.com/file/d/1GB9UpBavfGueXvrxzrEyD4gycuqnLfW7/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE KNOWLEDGE"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about an opportunity or want to talk about a project to collaborate on? My Inbox is open for all.",
  number: "+18016083639",
  email_address: "priyankerrao@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
