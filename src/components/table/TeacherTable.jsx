import { Table } from "react-bootstrap";
import TeacherCard from "../card/TeacherCard";

const TeacherTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Level</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TeacherCard />
        </tbody>
      </Table>
    </div>
  );
};

export default TeacherTable;
