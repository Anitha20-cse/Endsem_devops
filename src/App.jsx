import React,{ useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("");
  const[email,setemail]=useState("");
  const[rating,setrating]=useState("");
  const[comments,setcomments]=useState("");
  const [msg,setmsg]=useState("null");

  const Submit=()=>{
    if(!name || !email || !rating || !comments){
      setmsg("Please fill all the fields");
    }
    else if(!email.includes("@")){
      setmsg("Please enter a valid email");
    }
    else if(comments.length>20)
    {
      setmsg("Comments must be only 20 characters");
    }
    else{
      setmsg("feedback Submitted !");
    }
  }
  return (
    <>
      <div >
        <h3>Feedback Form</h3>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/><br /><br />
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <select value={rating} onChange={(e)=>setrating(e.target.value)}>
          <option value="" disabled>Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br /><br />
        <textarea placeholder='Comments' value={comments} onChange={(e)=>setcomments(e.target.value)}></textarea><br /><br />
        <button onClick={Submit}>Submit</button><br /><br />
        <div>{msg}</div>
      </div>
    </>
  )
}
export default App
