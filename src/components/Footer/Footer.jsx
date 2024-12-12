import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin,BsGoogle,BsCloudUploadFill} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Harshit Pandey. I am a 4th Year B.E Information Science and Engineering student at <b>JSS Science And Technology University</b> (formerly SJCE, Mysuru)
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Connect Me</Typography>
        <a href="https://github.com/hpharshit" target="black">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/harshit-pandey-b3483321a/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/harsh.hp03/" target="black">
          <BsInstagram />
        </a>
        <a href="mailto: harshpandeyalfa2@gmail.com" target="black">
          <BsGoogle/>
        </a>
        <a href="https://drive.google.com/file/d/1DgJSECnPwFvjjCG1heNXNLS4vfYvD4-L/view" target="black">
          <BsCloudUploadFill/>
        </a>
      </div>
    </div>
  );
};
export default Footer;