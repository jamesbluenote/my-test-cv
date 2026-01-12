
import { CVData } from './types';

export const cvData: CVData = {
  name: "Sung Jun Park",
  title: "Data Scientist & ICT Infrastructure Expert",
  contact: {
    address: "55 Expo-ro, Yuseong-gu, Daejeon 34126, Republic of Korea",
    office: "",
    mobile: "",
    emails: []
  },
  education: [
    {
      degree: "M.S., Graduate School of Innovation and Technology Management",
      school: "Korea Advanced Institute of Science and Technology (KAIST)",
      period: "2015.03 – 2017.02"
    },
    {
      degree: "B.S., School of Information and Communication Engineering",
      school: "Sungkyunkwan University",
      period: "2000.03 – 2010.02"
    }
  ],
  experiences: [
    {
      company: "Institute for Basic Science (IBS)",
      role: "Research & Engineering Staff, Data Science Group",
      period: "2019.09 – Present",
      location: "Republic of Korea",
      responsibilities: [
        "Building and operating GPU Servers and Web Server",
        "Planning and managing experiments of collecting bio data from wearable devices"
      ]
    },
    {
      company: "Korea Advanced Institute of Science and Technology (KAIST)",
      role: "Technology Licensing Officer, Technology Commercialization Center",
      period: "2017.07 – 2019.07",
      location: "Republic of Korea",
      responsibilities: [
        "Technology licensing/marketing in the fields of EE/ICT/SW",
        "Analyzing technical trend and evaluating inventions for patent applications",
        "Planning on joining technology exhibitions, IFA 2018 and CES 2019"
      ]
    },
    {
      company: "SAMSUNG SDS",
      role: "ICT Infrastructure Consultant",
      period: "2010.02 – 2012.07",
      location: "Republic of Korea",
      responsibilities: [
        "Designing and operating Enterprise network systems",
        "Participated in Fixed Mobile Convergence Project as a junior engineer",
        "Participated in Network Systems Replacement Project as a PM (Project Manager)"
      ]
    }
  ],
  projects: [
    {
      title: "K-Global Project",
      client: "KAIST",
      period: "2017.08 – 2019.07",
      overview: "Building ICT research platform for the 4th Industrial Revolution and transferring technology to companies in Seongnam city.",
      role: "Project Manager in technology licensing hosting conferences"
    },
    {
      title: "Trusted ICT Infrastructure Project",
      client: "KAIST",
      period: "2016.06 – 2017.02",
      overview: "Developing TII (Trusted Information Infrastructure) S/W framework with ETRI for trustworthy IoT Eco-systems.",
      role: "Student Researcher in developing Trust Index for Digital Sharing Economy Systems"
    },
    {
      title: "KAIST End-Run Project",
      client: "KAIST",
      period: "2015.11 – 2015.12",
      overview: "Measuring the maturity of technology to support technology commercialization.",
      role: "Research Assistant in measuring technology commercialization stages"
    },
    {
      title: "Network Systems Replacement Project",
      client: "SAMSUNG SDS",
      period: "2011.09 – 2012.02",
      overview: "Replacing the Main Backbone Network Systems of AK Plaza to increase system stability.",
      role: "Project Manager (PM) and System Design Engineer"
    },
    {
      title: "FMC Project",
      client: "SAMSUNG SDS",
      period: "2010.07 – 2011.02",
      overview: "Building Fixed Mobile Convergence Systems for switching voice connections between wired phones and smartphones.",
      role: "Junior Engineer in designing and building FMC Systems (Routers, Switches, APs)"
    }
  ],
  otherExperiences: [
    {
      title: "FunMove Workshop",
      period: "2017.03 – 2017.05",
      overview: "3D Printed Prosthetic-Hands educational workshop for disabled people in Daejeon.",
      role: "Invited Instructor in mentoring and teaching Arduino Programming"
    },
    {
      title: "Binghamton Summer Program",
      period: "2015.07 – 2015.08",
      overview: "Summer Internship at Intellectual Property Office, Binghamton University (SUNY), New York, U.S.",
      role: "Intern in patent licensing and technology commercialization; Lean Six Sigma Green Belt training"
    }
  ],
  awards: [
    "Honor in KAIST College of Business Dean’s List, Fall 2016"
  ],
  skills: {
    languages: ["Korean (native)", "English (advanced)"],
    programming: ["Python", "R"],
    qualifications: ["Engineer Information Processing, HRD Korea, 2011"]
  }
};
