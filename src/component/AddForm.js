import { useState } from "react";
import "./AddForm.css";
export default function AddForm(props) {
  const { students, setStudent } = props;
  const [name, setName] = useState("");
  const [gender,setGender] =useState("male")
  function saveStudents(e) {
    e.preventDefault();
    console.log(name);

    if (!name) {
      alert("กรุณาป้อนข้อมูลด้วยค่ะ");
    } else {
      const newStudents = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender:gender
      };
      setStudent([...students, newStudents]);
      setName("");
      setGender("male")
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudents}>
        <label>ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value={"male"}>ชาย</option>
          <option value={"female"}>หญิง</option>
        </select>
        <button type="submit" className="btn-add">
          บันทึก
        </button>
      </form>
    </section>
  );
}
