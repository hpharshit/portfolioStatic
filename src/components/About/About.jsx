import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
        {/* {about.quote} */}
         Perking Up!!!
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
              //  src={about.avatar.url}
               src="https://github.com/hpharshit/IMGAGES/blob/main/about.jpg?raw=true"
               alt="Harshit" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {/* {about.name} */}
            Harshit Pandey
          </Typography>

          <Typography>
          {/* {about.title} */}
          B.E in INFORMATION SCIENCE AND ENGINEERING
          </Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {/* {about.subtitle} */}
            JSS Science And Technology University (formerly SJCE) • MYSURU, KARNATAKA
           </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {/* {about.description} */}
            To pursue a job opportunity and to gain real-world experience that will expand my knowledge and where I can make the best of my potential and contribute to the organization’s growth. Hardworking and ability to work in both individual and in team.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
