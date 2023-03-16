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
  const projects = [1];
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
            url="https://github.com/hpharshit/myportfolio"
            projectImage="https://github.com/hpharshit/IMGAGES/blob/main/Screenshot%20(48).png?raw=true"
            projectTitle="Portfolio"
            description="Personal Portfolio Website"
            technologies="ReactJs / NodeJs / ExpressJs / ThreeJs / MongoDB "
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
