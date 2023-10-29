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
  username: "Tapiwa Chamboko",
  title: "Tapiwa Chamboko",
  subTitle: emoji(
    "Data scientist / Software Engineer with 3+ years of experience in the tech industry. Proven ability to build and deploy machine learning models to solve real-world problems. Expertise in Python, R, and cloud computing platforms."
  ),
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tapiwachamb",
  linkedin: "https://www.linkedin.com/in/tapiwa-chamboko-327270208/",
  gmail: "chambokot@africau.edu",
  facebook: "https://www.facebook.com/profile.php?id=100011702162446",
  stackoverflow: "https://stackoverflow.com/users/9811294/tapiwa",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ High scalable production ready models for deeplearning & statistical use cases"
    ),
    emoji("⚡ Experience of working with data tools including Microsoft PowerBI & RStudio"),
    emoji(
      "⚡ Intaractive Dashboard Bevelopment"
    ),
    emoji(
      "⚡ Complex quantitative modelling for forecasting and time series analysis"
    ),
    emoji(
      "⚡ Deployment of machine-learning models in Moble apps and web apps"
    ),
    emoji(
      "⚡ Deployment of machine-learning chatbots using dialogflow, Rasa and botpress"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerBi",
      fontAwesomeClassname: "fab fa-dashcube"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      schoolName: "Stanford University",
      logo: require("./assets/images/Stanford.png"),
      subHeader: "Stanford Idea-to-Market Program for GIC",
      duration: "January 2023 - October 2023",
      desc: "Granted a scholarship By Milken Mostepe Prize after being a global finalist for using Data science powered grean energy solutions ",
      descBullets: [
        "Product Market fit",
        "Go To Market Strategy",
        "Product Development, Management and Execution",
        "Financial Modeling",
        "Venture Capital and Equity Investing",
        "Fundraising and Ownership"
        
      ],
      
    },
    {
      schoolName: "Africa University (First Class Degree , 3.75/4.00 CGPA)",
      logo: require("./assets/images/Africa-University-Logo.jpg"),
      subHeader: "Bachelors in Science in Computer Science",
      duration: "September 2018 - April 2022",
      desc: "Best Data Science Capstone Project (Lung Dieases Prediction) And Research Project In Cloud Computing .",
      descBullets: [
        "Vice Chancellor Award For Student Graduating with First Class",
        "Second Best Graduating Engineering Student",
        "Developed a winning machine learning model to predict customer loan defulting FOR Zimnat",
        "Collaborated with ZHPS for cluster building and weather forcasting to counter climate change",
        "Participated in development in smart cities development at POTRAZ",
        "I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development"
      ],
    },
    {
      schoolName: "Hillcrest College",
      logo: require("./assets/images/Hillcrest_College_Logo.JPG"),
      subHeader: "High School",
      duration: "September 2016 - April 2018",
      desc: "Math olympiad national finalist.",
      descBullets: [
        "Best Mathematics Student",
        "Studied Math , Physics and Computer Science",
        "Chess national semi finalist",
        "Developed a PC game and a medical health software"
        
      ],
      
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Machine learning", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python & R", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data visualization tools: Tableau, Power BI", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Relational databases: MySQL, PostgreSQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Non-relational databases: MongoDB, Cassandra",
      progressPercentage: "90%"
    },
    
    {
      Stack: ".NET & JAVA", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "CTO",
      company: "SKICC TECH",
      companylogo: require("./assets/images/Skicc.png"),
      date: "April 2022 – Present",
      desc: "Develop and implement a data science strategy that aligns with the company's overall business goals",
      descBullets: [
        "lead developer for a data sectric health supply chain system in partnership with the gonernment",
        "Lead developer to a smart green energy solution funded by Milken Mostepe Foundation ",
        "Health supply chain solution listed in the top 30 solutions in Africa to digitalize healthcare"
      ],
    },
    {
      role: "Data Scientist Engineer",
      company: "ECONET WIRELESS",
      companylogo: require("./assets/images/unnamed.png"),
      date: "May 2021 – April 2022",
      desc: "Worked at the best tech company in Zimbabwe as a progect lead machine learning engineer",
      descBullets: [
        "Predicted worker productivity with over 95% accuracy, helping businesses optimize their operations.",
        "Developed a predictive tool that helps businesses identify and address potential productivity bottlenecks",
        "Created a model that can accurately classify customer satisfaction scores, enabling businesses to identify areas for improvement."

      ],
    },
    {
      role: "Machine learning engineer",
      company: "ZINDI AFRICA",
      companylogo: require("./assets/images/00aa4a928f3c44f881834d47fe624d91.png"),
      date: "May 2019 – May 2021",
      desc: "Worked on Zimnat Loan Default Classification Prediction",
      descBullets: [
        "Ranked number 1 in the country after achieving an accuracy score of over 85%.",
        "Deveploped a Loan Default system that automated emails to reduce risk in insurence business",
        "Realtime Dashboard Development"
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Microsoft Future Talent",
      companylogo: require("./assets/images/4373121_logo_logos_microsoft_icon.png"),
      date: "Nov 2020 – May 2021 ",
      desc: "Future Ready Talent is a virtual internship platform for students",
      descBullets: [
        "Cloud computing: Work with cloud computing platforms Microsoft Azure and Amazon Web Services to build, deploy, and manage applications.",
        "Collect, analyze, and interpret data to make informed decisions and deploy ml model to the cloud",
      ],
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Machine Learning projects including model creation to deployment in Cloud Web Apps (Click On Live Demo)",
  projects: [
    {
      image: require("./assets/images/3a77ca711d86a6e66378480dace2b2f2-removebg-preview.png"),
      projectName: "Customer Churn Prediction App",
      projectDesc: "Predict which customer is most likely to leave the bussiness",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://ai-customer-churn.streamlit.app/"
        },
        {
          name: "Github",
          url: "https://github.com/tapiwachamb/Customer_Churn"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/undraw_Segment_analysis_re_ocsl-removebg-preview.png"),
      projectName: "EDA For Data Science App",
      projectDesc: "Exploratory data analysis for cleaning data",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://data-eda.streamlit.app/"
        },
        {
          name: "Github",
          url: "https://github.com/tapiwachamb/EDA"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_medical_care_movn-removebg-preview.png"),
      projectName: "Early Diabetes Prediction App",
      projectDesc: "AI Application that uses ml for early diabetes detection",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://diabetes-app.streamlit.app/"
        },
        {
          name: "Github",
          url: "https://github.com/tapiwachamb/Diabetes"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_Push_notifications_re_t84m-removebg-preview.png"),
      projectName: "LLM Chatbot App",
      projectDesc: "Use Chat bot to analyse company data",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://llm-chatbot-app.streamlit.app/"
        },
        {
          name: "Github",
          url: "https://github.com/tapiwachamb/LLM-Chatbot"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_science_fqhl-removebg-preview.png"),
      projectName: "Bioinformatics Analytic App",
      projectDesc: "A Bioinformatics App used for drug discovry",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://drugdiscoveryapp.streamlit.app/"
        },
        {
          name: "Github",
          url: "https://github.com/tapiwachamb/Drug_Discovery_App"
        }
      ],
      display: true // Set false to hide this section, defaults to true
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements & Certificationsthat that I have done !",

  achievementsCards: [
    {
      title: "Amazon Elastic Compute Cloud (EC2)",
      subtitle:
        " A web service that provides secure, resizable compute capacity in the cloud",
      image: require("./assets/images/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=0HLT6jfN4E6zzuizBTUMrw2"
        }
      ]
    },
    {
      title: "DeepStream For Video Analytics",
      subtitle:
        "AI-based, GPU-accelerated apps easily and efficiently for video analytics.",
      image: require("./assets/images/Nvidia_logo.svg.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://courses.nvidia.com/certificates/9a76a93ba1244106ba89a3041349d893"
        }
      ]
    },

    {
      title: "Google Data Analytics Certificate",
      subtitle: "Advanced Google Analytics and machine learning deployment & handling big data",
      image: require("./assets/images/gcp_logo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/ccb9ef32-6802-4ed2-8dbf-39e13188fde4?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Database for Developers",
      subtitle: "Database management systems (DBMS) , development & handling sql queries for big data",
      image: require("./assets/images/Daco_4533338.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1zquKdG5nJ6DyTiGKyQbb4c3WJ2-n30Vy/view"
        }
      ]
    },
    {
      title: "AI ON JETSON NANO",
      subtitle: "Powerful computer designed to power entry-level edge AI applications for intergration in hardware",
      image: require("./assets/images/Nvidia_logo.svg.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://courses.nvidia.com/certificates/9a76a93ba1244106ba89a3041349d893"
        }
      ]
    },
    {
      title: "Digital Marketing & Analytics",
      subtitle: "Fundamental Marketing Concepts like PPC, SEO, Web Analytics",
      image: require("./assets/images/gcp_logo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/18ZkwvHX0W89a4xyIKp3wKpWgEXqh1gKc/view?usp=sharing"
        }
      ]
    },
    {
      title: " Artificial Intelligence A-Z™",
      subtitle: "Build AI & machine learning models to solve real-time problems",
      image: require("./assets/images/1541002205903-removebg-preview.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.udemy.com/certificate/UC-DZ34RYI7/"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Handling cloud migration initiatives, reviewing workload architectures & addressing high-risk issues",
      image: require("./assets/images/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=cLnetilEDEeldB6lj6WV1w2"
        }
      ]
    },
    {
      title: "iOS App Development",
      subtitle: "Developing mobile applications for Apple hardware, including iPhone, iPad and iPod Touch. Development using swift",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.udemy.com/certificate/UC-bc0440cd-5d42-4a47-982b-b4860e4375ee/"
        }
      ]
    },
    {
      title: "Data Foundations",
      subtitle: "Providing integrated, trusted and timely data for reporting , analytics, and handling big data",
      image: require("./assets/images/gcp_logo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/DUB3CJ7Z9RC6"
        }
      ],
      display: true
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+263-0774203506",
  email_address: "chambokot@africau.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  bigProjects,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};