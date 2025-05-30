
import { useState } from "react";
function App(){
  const [data,setData]=useState({
    name:"Sakshi",
    address:{
      city:"Haldwani",
      country:"India",
    }
  })

  const handleName=(val)=>{
   data.name=val
   setData({...data})//we will create new object and then update data
  }
  const handleCity=(city)=>{
    data.address.city =city
    console.log(data)
    setData({...data,address:{...data.address},city})
  }
  const handleCountry=(country)=>{
    data.address.country=country
    console.log(data)
    setData({...data,address:{...data.address},country})
  }
  return(
<>
<h1>Updating Objects in State</h1>
<input type="text" placeholder="Enter username" onChange={(e)=>handleName(e.target.value)}/>
<br/>
<input type="text" placeholder="Enter City" onChange={(e)=>handleCity(e.target.value)}/>
<br/>
<input type="text" placeholder="Enter Country" onChange={(e)=>handleCountry(e.target.value)}/>
<br/>

<h2 >Name: {data.name}</h2><br/>
 <h2>City: {data.address.city}</h2><br/>
<h2>Country: {data.address.country}</h2>

</>
 )


  

export default App;
