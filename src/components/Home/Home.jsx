import React, { useEffect } from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiReact,
  SiJavascript,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import PlatformCard from "../PlatformCard/PlatformCard";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, platforms, skills }) => {
  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
    };

    animate();

    return window.addEventListener("scroll", () => {
      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas
        className="homeCanvas"
        style={{
          backgroundImage:
            "url(" +
            "https://github.com/hpharshit/IMGAGES/blob/main/blue_profile.jpg?raw=true" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
        }}
      ></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>W</p>
          <p>E</p>
          <p>L</p>
          <p>C</p>
          <p>O</p>
          <p>M</p>
          <p>E</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2" className="name">
            Harshit Pandey
          </Typography>
        </div>
        <a className="ac" href="https://drive.google.com/file/d/1OHViY1BNRz5S7CJ4OQUEtYKG1eAksfAH/view?usp=sharing" target="_blank">
          My Resume
        </a>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">ACADEMIC TIMELINE</Typography>
        {/* <TimeLine timelines={timelines} /> */}
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            {/* <img src={skills.image1.url} alt="Face1" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/cpp_logo.png?raw=true"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            {/* <img src={skills.image2.url} alt="Face2" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/MySQL.png?raw=true"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            {/* <img src={skills.image3.url} alt="Face3" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/mongodb.png?raw=true"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            {/* <img src={skills.image4.url} alt="Face4" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/nodejs.png?raw=true"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            {/* <img src={skills.image5.url} alt="Face5" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/Python.png?raw=true"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            {/* <img src={skills.image6.url} alt="Face6" /> */}
            <img
              src="https://github.com/hpharshit/IMGAGES/blob/main/React.png?raw=true"
              alt="Face1"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiC />
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiGit />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiMysql />
        </div>
      </div>
      <div className="homePlatform">
        <Typography variant="h3"> CODING PLATFORMS </Typography>

        <div className="homePlatformWrapper">
          <PlatformCard
            image="https://github.com/hpharshit/IMGAGES/blob/main/gfg.png?raw=true"
            title="GeeksForGeeks"
            url="https://auth.geeksforgeeks.org/user/harshpandeyalfa2"
          />
          <PlatformCard
            image="https://github.com/hpharshit/IMGAGES/blob/main/LeetCode_logo.png?raw=true"
            title="LeetCode"
            url="https://leetcode.com/Harshit_Pandey/"
          />
          <PlatformCard
            image="https://github.com/hpharshit/IMGAGES/blob/main/codechief.png?raw=true"
            title="CodeChief"
            url="https://www.codechef.com/users/harshit_pandey"
          />

          <PlatformCard
            image="https://github.com/hpharshit/IMGAGES/blob/main/interviewbit.png?raw=true"
            title="InterviewBit"
            url="https://www.interviewbit.com/profile/harshit-pandey_998"
          />
          <PlatformCard
            image="https://github.com/hpharshit/IMGAGES/blob/main/hackerrank.png?raw=true"
            title="HackerRank"
            url="https://www.hackerrank.com/harshpandeyalfa2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
