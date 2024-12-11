import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const timelines = [
  {
    title: "Software Engineer (Intern + Trainee)",
    date: "01/2024 - Present",
    description: "GoTo (Formerly LogMeIn), Bangalore, Karnataka",
  },
  {
    title: "B.E in INFORMATION SCIENCE AND ENGINEERING - CGPA: 9.2/10.0",
    date: "12/2020 - 06/2024",
    description: "JSS Science And Technology University, Mysore, Karnataka",
  },
  {
    title: "12th (SENIOR SECONDARY EXAMINATION) - Percentage: 92.4",
    date: "06/2017 - 05/2019",
    description: "K D B PUBLIC SCHOOL, GHAZIABAD, UTTAR PRADESH",
  },
  {
    title: "10th (SECONDARY SCHOOL EXAMINATION) - CGPA: 10.0/10.0",
    date: "06/2015 - 06/2017",
    description: "K D B PUBLIC SCHOOL, GHAZIABAD, UTTAR PRADESH",
  },
];

const TimeLine = () => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {/* 07/01/2023 */}
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">
                {item.title}
                {/* first timeline */}
              </Typography>
              <Typography>
                {item.description}
                {/* desc */}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
