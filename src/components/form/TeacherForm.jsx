import { Button, Form } from "react-bootstrap";
import { teacher } from "../../data/teacher";
import { memo } from "react";

const TeacherForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="group">
        <Form.Label>Level</Form.Label>
        <Form.Select>
          {teacher.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control required type="number" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button className="mb-3 btn-danger">Reset</Button>
        <Button className="mb-3" type="submit">
          Add student
        </Button>
      </div>
    </Form>
  );
};

const MemoTeacherForm = memo(TeacherForm);
export default MemoTeacherForm;
