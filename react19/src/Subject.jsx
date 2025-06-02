import { useContext } from "react"
import { SubjectContext } from "./context";

function Subject(){
 const subject=useContext(SubjectContext);
 console.log(subject);
    return(
        
        <div style={{backgroundColor:"pink",padding:"20px"}} >
        <h1>Subject Component</h1>
        <p>Subject is: {subject}</p>
        </div>
    )
}
export default Subject;