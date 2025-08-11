/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Rachel Xing",
  title: "Hi all, I'm Rachel",
  subTitle: emoji(
    "I'm a student with a strong interest in software development, actively seeking entry-level opportunities to apply my skills and grow as a developer.Passionate about building meaningful applications and continuously learning new technologies.",
  ),
  resumeLink:
    "https://docs.google.com/document/d/1fWL48p0NGG-r4negdII3301UQk-_NliRyJ1LE1b4rm0/edit?tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/rachel-xing",
  linkedin: "https://www.linkedin.com/in/rachel-ca/",
  gmail: "xing.shan93@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Building responsive front-end interfaces with React",
    "⚡ Creating RESTful APIs with Node.js and Express",
    "⚡ Managing databases with MongoDB and MySQL",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Algonquin College",
      logo: require("./assets/images/acLogo.png"),
      subHeader: "Diploma in Web Development and Internet Applications",
      duration: "Jan 2023 - Agu 2025",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Studied frontend and backend development, databases, and UI/UX design",
        "Built multiple full-stack applications as coursework and personal projects",
      ]
    },
    {
      schoolName: "Chengdu University of Information and Technology",
      logo: require("./assets/images/cuitLogo.png"),
      subHeader: "Bachelor of Arts in English Literature",
      duration: "Sep 2018 - Jun 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "I studied a variety of courses on English and American literature, focusing on both classical and modern works.",
        "My studies also covered English and American cultural contexts, exploring key historical and social influences on literature.",
        "In addition to literature, I took courses in translation and education, which enhanced my understanding of language teaching and learning processes."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
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
      role: "Information Technical Expert",
      company: "Bosch (Chengdu) Information Technology Service Co., Ltd.",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "Aug 2022 – Dec 2023",
      desc: "Bosch is a global leader in technology and services, headquartered in Germany, with business sectors spanning mobility solutions, industrial technology, consumer goods, and energy & building technology. " +
        "\nAs an Information Technical Expert, I provided technical support and troubleshooting for both local and international Bosch employees, focusing on hardware, software, and network issues. \\\n" +
        "I developed internal tools to automate employee permission handling, software license distribution, and IT asset management processes. \n" +
        "I delivered first-line support for system issues by analyzing logs and metrics to determine root causes, escalating to developer teams when necessary. \n" +
        "This role required strong English communication skills and the ability to work efficiently in a bilingual, cross-cultural environment.",
    },
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pokemon.png"),
      projectName: "Pokemon Trainer Management System",
      projectDesc: "This is a full-stack application that admin can manage the trainers developed using springboot and react ",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/rachel-xing/Pokemon-Trainer-Management"
        }

      ]
    },
    {
      image: require("./assets/images/vue.png"),
      projectName: "E-Commerce Backend Management System",
      projectDesc: "This is an E-Commerce backend management system developed using Vue.js",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/rachel-xing/Vue2-shop-backend-management-system"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Certifications Section
const certifications = [
    {
      title: "React",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "react_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-88faa461-73a6-4ace-bb6b-e28e2e64ea73/",
      alt_name: "IBM",
      color_code: "#696969",
    },
];


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "I’m actively seeking entry-level positions in software development. With a background in web development and experience in cross-cultural environments, I’m eager to contribute to meaningful projects and grow professionally.\n Feel free to get in touch — I’d be happy to connect!",
  email_address: "rachel.xing100@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  certifications,
  contactInfo,
  resumeSection
};
