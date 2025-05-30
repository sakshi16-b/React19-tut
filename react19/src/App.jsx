
import { useState } from "react";
function App(){
  const [data,setData]=useState(['Peter','Bruce','John','Frank' ])

  const setName=(name)=>{
    console.log(name)
    data[data.length-1]=name 
    setData([...data])//whenever we want update array in a state we have pass copy of data like...data
    }
    

//Updating Objects in an Array
const [dataDetails,setDataDetails]=useState([
{name:"Sakshi",age:'30'},
{name:"Dev",age:'20'},
{name:"Rahul" ,age:'25'},
])
const setAge=(age)=>{
    console.log(age)
  dataDetails[dataDetails.length-1].age=age;
setDataDetails([...dataDetails])
    }

return(
  <>
  <h1>Updating Array in a State</h1>
  <input type="text" placeholder="Enter username" onChange={(e)=>setName(e.target.value)}/>
  {
    data.map((item,index)=>(
    <h4 key={index}>{item}</h4>
    ))
 }
 <hr/>
   <input type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>

 {
  dataDetails.map((item,index)=>(
    <h4 index={index}>{item.name},{item.age}</h4>
  ))
 }
</>
 )



  
  </>
)
}
export default App;
