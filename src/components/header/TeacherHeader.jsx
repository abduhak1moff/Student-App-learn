import { Form, InputGroup } from "react-bootstrap";
import { teacher } from "../../data/teacher";

const TeacherHeader = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Searching student" />
        <InputGroup.Text>
          <Form.Select>
            <option value="all">All Level</option>
            {teacher.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </Form.Select>
        </InputGroup.Text>
        {/* <div className="alert alert-warning">{sum}</div> */}
      </InputGroup>
    </div>
  );
};

export default TeacherHeader;
