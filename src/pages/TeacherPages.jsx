import { Col, Container, Row } from "react-bootstrap";
import TeacherForm from "../components/form/TeacherForm";
import TeacherHeader from "../components/header/TeacherHeader";
import TeacherTable from "../components/table/TeacherTable";
import { useState } from "react";

const TeacherPages = () => {
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.setItem("techers")) || []
  );

  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    age: "",
    level: "Junior",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
  };
  return (
    <Container>
      <h1 className="alert alert-info text-center">TeacherPage</h1>
      <Row>
        <Col md="4">
          <TeacherForm teacher={teacher} />
        </Col>
        <Col md="8">
          <TeacherHeader />
          <TeacherTable />
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherPages;
