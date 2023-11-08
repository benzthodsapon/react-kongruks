import Header from "./component/header";
import StudentList from "./component/studentList";
import AddForm from "./component/AddForm";
import "../src/App.css";
import { useState } from "react";
function App() {
  //สร้าง state
  //[{รหัสนักเรียน, ชื่อนักเรียน},{},{}]     { id: 1, name: "เบนซ์" }
  const [students, setStudent] = useState([]);

  function deletes(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header tittle="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deletes={deletes} />
      </main>
    </div>
  );
}

export default App;
