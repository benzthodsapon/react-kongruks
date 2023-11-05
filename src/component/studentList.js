import { useState } from "react";
export default function StudentList() {
  //สร้าง state
  //[{รหัสนักเรียน, ชื่อนักเรียน},{},{}]
  const [students, setStudent] = useState([
    { id: 1, name: "เบนซ์" },
    { id: 2, name: "อลัน" },
    { id: 3, name: "อลันeiei" },
  ]);

  const [show, setShow] = useState(true);

  function deletes(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h1>จำนวนนักเรียน : {students.length}</h1>
      <button onClick={() => setShow(!show)}>สลับ</button>
      <ul>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button
                onClick={() => {
                  deletes(item.id);
                }}
              >
                ลบ
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
