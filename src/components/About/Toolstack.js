import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

function Toolstack() {
  const toolItems = [
    { id: 'vscode', icon: <SiVisualstudiocode />, name: 'Visual Studio Code' },
    { id: 'postman', icon: <SiPostman />, name: 'Postman' },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map((item) => (
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

export default Toolstack;
