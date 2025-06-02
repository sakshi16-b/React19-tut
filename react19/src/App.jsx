 import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./context";



  function App(){
    const [subject,setSubject]=useState('')

    return(
      
      <div style={{backgroundColor:"orange" ,padding:"20px"}}>
       <SubjectContext.Provider value={subject}>
      <select onChange={(e)=>setSubject(e.target.value)}>
        <option value="">select subject</option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>     
        <option value="maths">Maths</option>
        <option value="science">Science</option>
       </select>
       <h1>Context API</h1>
       <College/>
             </SubjectContext.Provider>

      </div>
    
    )
  }
  export default App;
