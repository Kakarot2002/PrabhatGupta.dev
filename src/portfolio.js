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
  username: "Prabhat Gupta",
  title: "Hi all, I'm Prabhat",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Mobile and Web applications with Flutter / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10YOj8aEjUXG1LYS-svdR4kwQuS0kM99j/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kakarot2002",
  linkedin: "https://www.linkedin.com/in/prabhat-gupta-243a721b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "prabhatgup2002@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi University",
      logo: require("./assets/images/dulogo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2019 - June 2023",
      descBullets: ["CGPA - 8.953 "],
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems. Participated in various research projects and hackathon.",
    },
    {
      schoolName: "Bank Officer's Public School",
      logo: require("./assets/images/BOPS.png"),
      subHeader: "High School",
      duration: "March 2004 - July 2019",
      desc: "Ranked top 3 in the whole duration of the course.",
      descBullets: ["12th Percentage - 76.4", "10th CGPA - 9 "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structure and Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analytics & Machine Learning ",
      progressPercentage: "80%"
    },
    {
      Stack: "Flutter & Android Developnment",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "DRDO",
      companylogo: require("./assets/images/DRDO.png"),
      date: "June 2022 – December 2022",
      desc: "Evaluate machine learning classifiers that consume a multivariate fNIRS recordings and predict the mental workload intensity of the user during that interval.",
    },
    {
      role: "Summer Intern",
      company: "MietY",
      companylogo: require("./assets/images/Miety.png"),
      date: "Jul 2022 – Sep 2022",
      desc: "Developed and designed a dynamic responsive website for internal projects details and its subsequent applications and work on Rest API, JSON, React.JS(JavaScript based framework), Bootstrap (responsive design), MySQL, HTML, CSS, JavaScript, GIT version control platform."
    },
    {
      role: "Flutter Developer Intern",
      company: "Bunkerfit",
      companylogo: require("./assets/images/Bunkerfit.png"),
      date: "Sep 2021 – Dec 2021",
      desc: "Developing the responsive UI layout of the fitness flutter app. Integrate Google Geo location Services using API reference and also add Smart wearable (watches)with the application to fetch the data from it using Bluetooth socket."
    }
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Qualify Gate 2023",
      subtitle:
        "I have cleared India's most esteemed engineering examinations, GATE 2023, I achieved a remarkable rank within the top 10% of distinguished students, in the competitive field of Computer Science and Engineering (CSE) .",
      image: require("./assets/images/Gate2023.webp"),
      imageAlt: "Gate 2023 Logo",
      footerLink: [
        {
          name: "Score Card",
          url: "https://drive.google.com/file/d/1UvvsjlyizGdZsCpyETJCOCoOLoQ6gKJ7/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Web Developnment Course on Udemy",
      subtitle:
        "Completed Certification offered by udemy named The complete 2023 Web Developnment Boot-camp by Dr.Angela Yu",
      image: require("./assets/images/Udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-3d0ebe9e-57ab-40d7-af86-1cc157436d8d/"},
        {
          name: "Final Project",
          url: "https://github.com/Kakarot2002/keeper_app"
        }
      ]
    },

    {
      title: "IIT BHU Data Analytics Course",
      subtitle: "Completed a short term course from IIT BHU on Data Analytics and Predictive Technologies",
      image: require("./assets/images/iitBhu.jpeg"),
      imageAlt: "IIT BHU Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1VLHpCTIV0XW-PVsp1KEongzilw9wPMZG/view?usp=drivesdk"}
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
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "918770958052",
  email_address: "prabhatgup2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
