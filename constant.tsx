import { SketchLogoIcon, Pencil2Icon, ImageIcon } from "@radix-ui/react-icons";

interface SkillItemProps {
  width: number;
  height: number;
  className: string
}

const config = {
  header: {
    leftMenu: [
      {
        name: "Home",
        id: '#home'
      },
      {
        name: "Skills",
        id: '#skills'
      },
      {
        name: "Portfolio",
        id: '#portfolio'
      },
      {
        name: "Blogs",
        id: '#blogs'
      },
      {
        name: "Contact",
        id: '#contact'
      },
    ],
    rightMenu: [
      {
        name: "Download CV",
      },
    ],
  },
  banner: {
    title: "Welcome",
    heading: "I have Creative Design Experience",
    subTitle:
      "I'm Tanvir, a creative Product Designer. I've been helping businesses to solve their problems with my design for 2 years.",
    actionButton: [
      {
        name: "Contact Me",
      },
      {
        name: "View portfolio",
      },
    ],
  },
  info: {
    data: [
      {
        title: "80+",
        subTitle: "Satisfied clients",
      },
      {
        title: "200+",
        subTitle: "Projects completed",
      },
      {
        title: "99+",
        subTitle: "Reviews given",
      },
    ],
  },
  mySkills: {
    title: "My Skills",
    subTitle: "Why Hire Me For Your Next Project?",
    content:
      "I'm specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.",
    actionButton: {
      name: "Hire Me",
    },
    skills: [
      {
        icon: (props: SkillItemProps) => {
          return <SketchLogoIcon {...props}/>
        },
        title: "Visual Design",
        subTitle: "Create user interface design with unique & modern ideas",
      },
      {
        icon: (props: SkillItemProps) => {
          return <Pencil2Icon {...props}/>
        },
        title: "UX Research",
        subTitle: "Create digital user products with updated ideas",
      },
      {
        icon: (props: SkillItemProps) => {
          return <ImageIcon {...props}/>
        },
        title: "Design Prototype",
        subTitle: "Create advance design prototype with Figma apps.",
      },
    ],
  },
  technologies: {
    title: "Technologies",
    subTitle:
      "I have selected and mentioned here some of i worked projects technologies here",
    technologies: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "NodeJS",
      },
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subTitle: "My Creative Works Latest Projects",
    content:
      "I have selected and mentioned here some of my latest projects to share with you.",
  },
  blogs: {
    title: "Blogs",
    subTitle: "My latest articles",
    content:
      "I have selected and mentioned here some of my latest blogs to share with you.",
    actionButton: "View All",
  },
  contact: {
    title: "Contact",
    subTitle: "Let's Discuss Your Project",
    content:
      "Let's make something new, different and more meaningful or make thing more visual or conceptual",
    fields: [
      {
        fieldName: "Full name",
      },
      {
        fieldName: "Your email",
      },
      {
        fieldName: "Phone number",
      },
      {
        fieldName: "Budget",
      },
      {
        fieldName: "Message",
      },
    ],
  },
  contactInfo: {
    call:{
      fieldName: "Call me",
      value: "+1 12445221",
    },
    email:{
      fieldName: "Email me",
      value: "demo@demo.com",
    },
    address:{
      fieldName: "Address",
      value: "India",
    }
  },
  footer: {
    leftContent: "@ 2022. All Rights Reserved",
    centerContent: "Designed by Tanvir Ahmed",
  },
};

export { config };
