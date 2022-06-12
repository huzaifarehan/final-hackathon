import React from "react";
import { Card, Button } from "react-bootstrap";

function CourseCard({ course, courseToggle, loading }) {
  console.log("course", course);
  return (
    <Card style={{ width: "30rem", margin: "20px 0", textAlign: 'center' }}>
      {course?.disabled && (
        <span style={{ color: "red", margin: "10px" }}>Admission Closed</span>
      )}
      <div>
        <Card.Body>
          <Card.Title style={{ "fontWeight": 900 }} >{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <span style={{ fontWeight: "bold" }}>Tutor: </span> {course?.tutor}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <span style={{ fontWeight: "bold" }}>Duration: </span>{" "}
            {course?.duration}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <span style={{ fontWeight: "bold" }}>Prerequisite: </span>{" "}
            {course?.prerequisite}
          </Card.Subtitle>{" "}
        </Card.Body>
      </div>
      <div
        style={{ textAlign: 'center' }}
      >
        <Button
          style={{
            width: "50%",
            marginRight: "auto",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
          className="topbar-bg"
          onClick={() => courseToggle(course?.id, course?.disabled)}
        >
          {course?.disabled ? "Open Admission" : "Close Addmission"}
        </Button>
      </div>
    </Card>
  );
}

export default CourseCard;
