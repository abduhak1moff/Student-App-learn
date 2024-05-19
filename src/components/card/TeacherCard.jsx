const TeacherCard = () => {
  return (
    <tr>
      <td>1</td>
      <td>Azizbek</td>
      <td>Abduhakimov</td>
      <td>19</td>
      <td>Middle</td>
      <td className="text-center">
        <button className="btn btn-danger me-3">Delete</button>
        <button className="btn btn-primary">Edit</button>
      </td>
    </tr>
  );
};

export default TeacherCard;
