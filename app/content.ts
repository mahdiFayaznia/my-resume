// import images
import person from "./assets/images/hero/person.png";

import react from "./assets/images/skills/react.png";
import js from "./assets/images/skills/js.png";
import python from "./assets/images/skills/python.png";
import cs from "./assets/images/skills/csharp.png";
import ps from "./assets/images/skills/photoshop.png";
import ai from "./assets/images/skills/illustrator.png";

import services_logo1 from "./assets/images/services/logo1.png";
import services_logo2 from "./assets/images/services/logo2.png";
import services_logo3 from "./assets/images/services/logo3.png";

import person_project from "./assets/images/projects/person.png";
import project_img1 from "./assets/images/projects/img1.jpg";
import project_img2 from "./assets/images/projects/img2.jpg";
import project_img3 from "./assets/images/projects/img3.jpg";

import avatar1 from "./assets/images/testimonials/avatar1.jpg";
import avatar2 from "./assets/images/testimonials/avatar2.jpg";
import avatar3 from "./assets/images/testimonials/avatar3.jpg";
import avatar4 from "./assets/images/testimonials/avatar4.jpg";

import person_hire from "./assets/images/hireme/person.png";
// /import images

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
// /import icons from react-icons

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  hero: {
    title: "Mahdi Fayaz",
    firstName: "Mahdi",
    LastName: "Fayaz",
    btnText: "Hire Me",
    image: person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React",
        para: "Lorem ipsum text  dummy",
        percent: "30",
        logo: react,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
      {
        name: "JS",
        para: "Lorem ipsum text  dummy",
        percent: "60",
        logo: js,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
      {
        name: "Photoshop",
        para: "Lorem ipsum text  dummy",
        percent: "60",
        logo: ps,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
      {
        name: "Illustrator",
        para: "Lorem ipsum text  dummy",
        percent: "80",
        logo: ai,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
      {
        name: "C#",
        para: "Lorem ipsum text  dummy",
        percent: "50",
        logo: cs,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        percent: "30",
        logo: python,
        modal_list: [
          "JS item 1",
          "JS item 2",
          "JS item 3",
          "JS item 4",
          "JS item 5",
        ],
      },
    ],
    icon: MdArrowForward,
  },

  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Design Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
    service_offer: [
      {
        title: "Basic",
        col1: "Info Graphics",
        col2: "Web Design",
        col3: "Programming",
        col4: "5GB Storage",
        col5: "Mail Support",
        col61: "$10",
        logo: services_logo1,
      },
      {
        title: "Pro",
        col1: "Info Graphics",
        col2: "Web Design",
        col3: "Programming",
        col4: "20GB Storage",
        col5: "Fully Support",
        col61: "$20",
        logo: services_logo2,
      },
      {
        title: "Premium",
        col1: "Info Graphics",
        col2: "Web Design",
        col3: "Programming",
        col4: "50GB Storage",
        col5: "Endless Support",
        col61: "$50",
        logo: services_logo3,
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Restaurant Website",
        image: project_img1,
      },
      {
        title: "Social Media web",
        image: project_img2,
      },
      {
        title: "Profile Website",
        image: project_img3,
      },
    ],
  },

  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "In publishing and graphic design",
        img: avatar1,
        name: "Name Family",
      },
      {
        review:
          "In publishing and graphic design",
        img: avatar2,
        name: "Name Family",
      },
      {
        review:
          "In publishing and graphic design",
        img: avatar3,
        name: "Name Family",
      },
      {
        review:
          "In publishing and graphic design",
        img: avatar4,
        name: "Name Family",
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image: person_hire,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mahdifayaznia@gmail.com",
        icon: GrMail,
        link: "mailto:mahdifayaznia@gmail.com",
      },
      {
        text: "+98 930 312 2325",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "mfn2000",
        icon: BsTelegram,
        link: "https://t.me/mfn2000",
      },
    ],
  },

  footer: {
    text: "mfn2000 © 2023. All Right Reserved.",
  },
};
