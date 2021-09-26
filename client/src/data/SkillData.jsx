import { FaReact, FaJs, FaNodeJs, FaGithub, FaHtml5, FaCss3, FaSass, FaJava, FaPython} from 'react-icons/fa';
import { DiRuby, DiMongodb } from "react-icons/di";
import { SiRails, SiMysql, SiPostgresql, SiPhp} from "react-icons/si";
// import { IoChatbubblesSharp } from "react-icons/io5";

  const badgeColor = "#81fff7";
  const badgeSize = "4.5rem";
  export const skillBadges = [
    {
      badge: <FaReact size={badgeSize} color={badgeColor}/>,
      title: "React",
      desciption: "Used to build multiple projects for GA and personal interest.  Strong with functional components, hooks, npm libraries."
    },
    {
      badge: <FaJs size={badgeSize} color={badgeColor}/>,
      title: "JavaScript",
      desciption: "Learned in 400 hours of immersive training with General Assembly; Used to build several multi-page dynamic projects with API as well as dozens of smaller applications."
    }, 
    {
      badge: <FaNodeJs size={badgeSize} color={badgeColor}/>,
      title: "NodeJS",
      desciption: "Primary JavasScript runtime environment used to build projects, applications, and write and test algorithms"
    },
    {
      badge: <FaGithub size={badgeSize} color={badgeColor}/>,
      title: "Github",
      desciption: "Learned to use Git version control and tools during General Assembly Software Engineering Immersive.  Managed Git flow for group project."
    },
    {
      badge: <FaHtml5 size={badgeSize} color={badgeColor}/>,
      title: "HTML5",
      desciption: "Used with JavaScript, CSS to build multiple projects and webpages.  Familiar with vanilla DOM manipulation as well as React components"
    },
    {
      badge: <FaCss3 size={badgeSize} color={badgeColor}/>,
      title: "CSS3",
      desciption: "Used with HTML and JavaScript to build multiple dynamic projects and applications.  Skilled with flexbox."
    },
    {
      badge: <FaSass size={badgeSize} color={badgeColor}/>,
      title: "Sass/SCSS",
      desciption: "Currently learning and improving skill via Jonas Schmedtmann Udemy course: 'Advanced CSS and Sass: Flexbox, Grid, Animations, and More!"
    },
    {
      badge: <FaJava size={badgeSize} color={badgeColor}/>,
      title: "Java",
      desciption: "Learned via codeHS and code.org.  Taught Computer Science I, Computer Science II, and UIL Computer Science in Java.  Also used to build applications in a UCHL Computer Science course."
    },
    {
      badge: <FaPython size={badgeSize} color={badgeColor}/>,
      title: "Python",
      desciption: "Learned via codeHS, as well as in 2 scripting courses taken at UHCL.  Taught Computer Scienc I in Python."
    },
    {
      badge: <DiRuby size={badgeSize} color={badgeColor}/>,
      title: "Ruby",
      desciption: "Exposed to Ruby in final unit of General Assembly Immersive course.  Used to build several small applications as well as the backend (with PostgreSql) for my final project (full CRUD with authentication)"
    },
    {
      badge: <SiRails size={badgeSize} color={badgeColor}/>,
      title: "Rails",
      desciption: "Exposed to Ruby in final unit of General Assembly Immersive course.  Used to build several small applications as well as the backend (with PostgreSql) for my final project (full CRUD with authentication)"

    },
    {
      badge: <SiMysql size={badgeSize} color={badgeColor}/>, 
      title: "MySQL",
      desciption: "Learned in UHCL Web Development Course with PHP and working through Murach's PHP and MySQL"
    },
    {
      badge: <SiPhp size={badgeSize} color={badgeColor}/>,
      title: "PHP",
      desciption: "Learned in UHCL Web Development Course with MySQL and working through Murach's PHP and MySQL"
    },
    {
      badge: <DiMongodb size={badgeSize} color={badgeColor}/>,
      title: "MongoDB",
      desciption: "Used with Express to build backend (full CRUD with authentication) for 3rd General Assembly project"
    },
    {
      badge: <SiPostgresql size={badgeSize} color={badgeColor}/>,
      title: "PostgreSQL",
      desciption: "Used with Ruby on Rails to build backend (full CRUD with authentication) for 4th General Assembly project"
    }
  ];

  export const softSkillBadges = [
    {
      badge: <SiPostgresql size={badgeSize} color={badgeColor}/>,
      title: "PostgreSQL",
      desciption: "Used to build multiple projects for GA and personal interest"
    }
  ];