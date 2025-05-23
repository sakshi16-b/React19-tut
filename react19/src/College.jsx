import Student from "./Student";

function College({ college }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "20px",
          borderBottom: "2px solid #000",
          margin: "20px",
        }}
      >
        <h1>Name: {college.name}</h1>
        <ul>
          <li>City: {college.city}</li>
          <li>Website: {college.email}</li>
          <li>
            <h3>Students</h3>
            {college &&
              college.student.map((student, index) => (
                <ul key={index}>
                  <li>
                    <Student student={college.student} />
                  </li>
                </ul>
              ))}
          </li>
        </ul>
      </div>
    </>
  );
}
export default College;
