function Student({ student }) {
  console.log(student);
  return (
    <ul>
      <h3>Students</h3>
      {student.map((student, index) => (
        <ul key={index}>
          <li>Name:{student.name}</li>
          <li>City:{student.city}</li>
          <li>Age:{student.age}</li>
        </ul>
      ))}
    </ul>
  );
}
export default Student;
