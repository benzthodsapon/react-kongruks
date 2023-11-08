import { useState } from "react";
import "./item.css"
import "./studentlist.css";
import Item from "./Item";
export default function StudentList(props) {
  const {students,deletes} = props
  const [show, setShow] = useState(true);
  const myStyle = {
    color: "purple",
    fontSize: "50px",
    padding: "20px",
    fontStyle: "italic",
  };
  const btnStyle = {
    background: show ? "purple" : "green",
  };
  return (
    <ul>
      <div className="header">
        {/* <h1 style={{color:"red",fontSize:"20px"}}>จำนวนนักเรียน : {students.length}</h1> */}
        <h1 style={myStyle}>จำนวนนักเรียน : {students.length}</h1>
      </div>
      <button onClick={() => setShow(!show)} style={btnStyle}>
        {show ? "ซ่อน" : "แสดง"}
      </button>
      {show &&
        students.map((data) => (
          <Item key={data.id} data={data} deletes={deletes} />
        ))}
    </ul>
  );
}
