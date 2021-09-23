import  project_uplift from "../assets/images/project_uplift.png";
import gnomazon from "../assets/images/gnomazon.png";
import is_bookshelf from "../assets/images/is_bookshelf.png";

export const ProjectData = [
  {
    title: "Project Uplift",
    image: project_uplift,
    description: "A post board application for affirmations and celebrations  that allows users to create posts with images and text and save to customized boards or share to public boards",
    tech: ["Full CRUD API build with Postgresql and Ruby on Rails","Front end build with React JS"],
    gitHubUrl: "https://github.com/girlwithcodes/Project-Uplift",
    projectUrl: "https://project-uplift.netlify.app/"

  },

  {
    title: "Gnome-A-Zon",
    image: gnomazon,
    description: "In this project, my team created a garden gnome marketplace allowing members to create, edit, and delete gnomes and users to browse and search gnomes for sale.",
    tech: ["Built with MERN stack", "Developed back-end full CRUD API with user authentication with MongoDB", "Managed team Git flow to coordinate push and pull requests on Git branches"],
    gitHubUrl: "https://github.com/girlwithcodes/Gnome-A-zon",
    projectUrl: "https://gnome-a-zon.netlify.app/"
  },
  {
    title: "The Intersectional Bookshelf",
    image: is_bookshelf,
    description: "A book recommendation application allowing users to recommend, browse, and search for books with representation of underrepresented populations  (React, NodeJS, and Airtable)",
    tech: ["Used linked tables in Airtable to allow users to tag recommendations with genres, representation tags, themes, and trigger warnings and create new tags", "Implemented search logic to sort search results by best matches for genre and tags"],
    gitHubUrl: "https://github.com/girlwithcodes/intersectional-bookshelf",
    projectUrl: "https://intersectional-bookshelf.netlify.app/"
  },
]