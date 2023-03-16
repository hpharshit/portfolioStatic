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

const timelines = [{ title: "B.E in INFORMATION SCIENCE AND ENGINEERING" ,date:"12/2020 - Present",description:"JSS Science And Technology University"},{title: "12th (SENIOR SECONDARY EXAMINATION)" ,date:"05/2019",description:"K D B PUBLIC SCHOOL, GHAZIABAD, UTTAR PRADESH"},{title: "10th (SECONDARY SCHOOL EXAMINATION)" ,date:"06/2017",description:"K D B PUBLIC SCHOOL, GHAZIABAD, UTTAR PRADESH"}];

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
