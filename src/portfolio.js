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
  username: "Michael Muolokwu",
  title: "Hi, I am Michael",
  subTitle: emoji(
    "A passionate Data Scientist and Data Engineer 🚀 with extensive experience in designing and implementing scalable data pipelines, advanced analytics, and machine learning models using Python, SQL, and modern big data frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RNM5iECtSh-sxSVYc61hJlyc_ALhr9q-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nonso-M",
  linkedin: "https://www.linkedin.com/in/nonso-muolokwu/",
  gmail: "muolokwunonso0@gmail.com",
  medium: "https://medium.com/@muolokwunonso",
  stackoverflow: "https://stackoverflow.com/users/19354003/nonsom",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I am capable of",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly scalable ETL and ELT pipelines"
    ),
    emoji("⚡ Integration of AI and Machine Learning into products"),
    emoji(
      "⚡ Statiscal analysis; A/B testing, Survival Analysis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "r",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fa fa-cloud"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      schoolName: "University of British Columbia",
      logo: require("./assets/images/ubc.jpg"),
      subHeader: "Master of Data Science",
      duration: "September 2024 - June 2025",
      desc: " Coursework: Machine Learning, Data Structures and Algorithm, Deep Learning, Cloud Infrastructure",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Nigeria",
      logo: require("./assets/images/unn.png"),
      subHeader: "Bachelor of Engineering",
      duration: "September 2015 - April 2020",
      desc: "Coursework: Digital Electronics, Communication Systems, Control Engineering, Software Engineering",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistical Analysis",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Luminr",
      companylogo: require("./assets/images/luminr.jpeg"),
      date: "November 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Data Scientist",
      company: "Ehealth4everyone",
      companylogo: require("./assets/images/ehealth.png"),
      date: "May 2021 – Nov 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  subtitle: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/youtube.png"),
      projectName: "Youtube Idea Agent",
      projectDesc: "Generates Youtube Video Ideas using contents on youtube",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nonso-m-chatbot-agent-app-vfvh6c.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/longe.png"),
      projectName: "longevity Visualizer",
      projectDesc: "Helps Public Health Reasearch Analyst and Reasearcher to make data driven decision",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dsci-532-2025-16-longevityvisualizer.onrender.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section 
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Engineer Certified",
      subtitle:
        "Google Cloud Certified Data Engineer.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "GCP",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f551cbde-15ac-48fa-ace2-b8704e973d79/public_url"
        }
      ]
    },
    {
      title: "Machine Learning Nanodegree",
      subtitle:
        "Amazon Web Services ML Engineer Nanodegree.",
      image: require("./assets/images/aws.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "AWS ML",
          url: "https://www.udacity.com/course/aws-machine-learning-engineer-nanodegree--nd189"
        }
      ]
    },

    {
      title: "Engineer of the Year",
      subtitle: "Finalist for the BCS Engineer of the year Award",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://www.bcs.org/events/awards-and-competitions/uk-it-industry-awards/uk-it-industry-awards-finalists-2024/#:~:text=Engineer%20of%20the%20Year" },

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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+17789576183",
  email_address: "muolokwunonso@gmail.com"
};

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle:
//     "Discuss a project or just want to say hi? My Inbox is open for all.",
//   number: "+92-0000000000",
//   email_address: "saadpasta70@gmail.com"
// };

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
  isHireable,
  resumeSection
};
