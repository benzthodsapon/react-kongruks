import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   // const name = "Thodsapon";
//   // let count = 0;

//   function subcount() {
//     setCount(count - 1);
//   }
//   function resetcount(){
//     setCount(0)
//   }
//   return (
//     <div>
//       {/* <h1>Benz{name}</h1>
//       <button onClick={()=>alert("Hello world")}>EIEI</button> */}
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>เพิ่มค่า</button>
//       <button onClick={subcount}>ลบค่า</button>
//         <button onClick={resetcount}>ลบค้า</button>
//     </div>
//   );
// }

// export default App;

function App() {
  //สร้าง state
  //[{รหัสนักเรียน, ชื่อนักเรียน},{},{}]
  const [students, setStudent] = useState([
    { id: 1, name: "เบนซ์" },
    { id: 2, name: "อลัน" },
    { id: 3, name: "อลันeiei" },
   
  ]);

  const [show,setShow] =useState(true);

  function deletes(id){
   setStudent(students.filter(item => item.id !==id))
  }

  return (
  <div>
    <h1>จำนวนนักเรียน : {students.length}</h1>
    <button onClick={()=>setShow(!show)}>สลับ</button>
    <ul>
      {show && students.map((item)=>(
        <li key={item.id}>
          <p>{item.id} - {item.name}</p>
          <button onClick={()=>{deletes(item.id)}}>ลบ</button>

        </li>

      
      ))}
    </ul>
    
  </div>
  )
}

export default App;
