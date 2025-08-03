import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  const techItems = [
    { id: 'python', icon: <DiPython />, name: 'Python' },
    { id: 'java', icon: <DiJava />, name: 'Java' },
    { id: 'cpp', icon: <CgCPlusPlus />, name: 'C++' },
    { id: 'javascript', icon: <DiJavascript1 />, name: 'JavaScript' },
    { id: 'react', icon: <DiReact />, name: 'React' },
    { id: 'nodejs', icon: <DiNodejs />, name: 'Node.js' },
    { id: 'mongodb', icon: <DiMongodb />, name: 'MongoDB' },
    { id: 'redis', icon: <SiRedis />, name: 'Redis' },
    { id: 'git', icon: <DiGit />, name: 'Git' },
    { id: 'docker', icon: <SiDocker />, name: 'Docker' },
    { id: 'mysql', icon: <SiMysql />, name: 'MySQL' },
    { id: 'postgresql', icon: <SiPostgresql />, name: 'PostgreSQL' },
    { id: 'aws', icon: <SiAmazonaws />, name: 'AWS' },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item) => (
        <Col 
          key={item.id}
          xs={4} 
          md={2} 
          className="tech-icons"
        >
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${item.id}`}>
                {item.name}
              </Tooltip>
            }
          >
            <div>
              {item.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
