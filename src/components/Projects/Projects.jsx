import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      url: "https://github.com/hpharshit/myportfolio",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/portfolio_pic.png?raw=true",
      projectTitle: "Portfolio",
      description: "Personal Portfolio Website.",
      technologies: "ReactJs / NodeJs / ExpressJs / ThreeJs / MongoDB / Material-UI",
    },
    {
      url: "https://github.com/hpharshit/WeConnect",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/Screenshot%202023-04-06%20024637.png?raw=true",
      projectTitle: "WeConnect",
      description: "Chatting App. Provides Real-time Chat-Box for chatting. Users can also create Chat Group. User data is stored in database. Created in Team with Ojesvi.",
      technologies: "Socket IO / ReactJs / NodeJs / ExpressJs / Mongoose / MongoDB ",
    },
    {
      url: "https://github.com/hpharshit/Algorithm_Visualizer_using_React",
      projectImage:
      "https://github.com/hpharshit/IMGAGES/blob/main/algo.png?raw=true",
      projectTitle: "Algorithm Visualizer",
      description: "To Visualize various Data Structures and Algorithm. Tree, Graph, Searching, Sorting Algorithms. Created in Team with Ojesvi.",
      technologies: "ReactJs / JavaScript",
    },
    {
      url: "https://github.com/hpharshit/myportfolio",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/blog_app.png?raw=true",
      projectTitle: "BlogsApp",
      description: "Basic Blogs App  with User Signup/Login where users can post their Travel Experiences.",
      technologies: "ReactJs / Redux / NodeJs / ExpressJs / MongoDB / Mongoose / Material-UI ",
    },
    {
      url: "https://github.com/hpharshit/Tour_Booking_FullStack_App",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/natours.png?raw=true",
      projectTitle: "Tour Booking App",
      description: "Tour Booking App .Where different users can Login/Signup and review various Tours.",
      technologies: "NodeJs / ExpressJs / MongoDB / Mongoose / HTML / CSS",
    },
    {
      url: "https://github.com/hpharshit/social",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/social.png?raw=true",
      projectTitle: "Social Media",
      description: "Social Media App with User can Signup/Login and Post an Image, Like, Comment on Images, Follow Friends, Create Group.",
      technologies: "ReactJs / NodeJs / ExpressJs / MySQlL / Material-UI ",
    },
    {
      url: "https://github.com/hpharshit/todoList",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/todolist.png?raw=true",
      projectTitle: "To-Do List",
      description: "Basic To-Do List to add and remove Things.",
      technologies: "ReactJs / NodeJs / ExpressJs / MongoDB / Mongoose ",
    },
    {
      url: "https://github.com/hpharshit/banking_app_javascript",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/banking.png?raw=true",
      projectTitle: "Banking App",
      description: "Banking Api that provides interface to Deposit, Withdraw or Loan Money from bank. Static APP.",
      technologies: "JavaScript / HTML / CSS",
    },
    {
      url: "https://github.com/hpharshit/guess_number_javascript",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/guess_no_.jpg?raw=true",
      projectTitle: "Guess-Number",
      description: "Basic Number Guessing app. Used random function of JavaScript to generate Numbers.",
      technologies: "JavaScript / HTML / CSS",
    },
    {
      url: "https://github.com/hpharshit/Image_encryption",
      projectImage:
        "https://github.com/hpharshit/IMGAGES/blob/main/image_encrytion.jpg?raw=true",
      projectTitle: "Image-Encryptor",
      description: "Encryption and Decrypting JPG and PNG images for Security Purposes.",
      technologies: "Python / Tkinter / AES-Algorithm",
    },
  ];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            // id={item._id}
            // key={item._id}
            // url={item.url}
            // projectImage={item.image.url}
            // projectTitle={item.title}
            // description={item.description}
            // technologies={item.techStack}
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.projectImage}
            projectTitle={item.projectTitle}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        More Projects are Loading Soon !!!
        <FaUpload />
      </Typography>
    </div>
  );
};

export default Projects;
