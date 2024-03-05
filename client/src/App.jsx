import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const handleLogin = ()=>{
    if(!username || !password){
      setMessage('Name and password are required!')
      setTimeout(()=>{
        setMessage("")
      },3000)
      return;
    }
    const body = {
      name:username,
      ps:password,
    }
    const url = 'http://localhost:8080/login'
    axios.post(url,body)
      .then((res)=>{
        setMessage(res.data.msg)
        setUsername('') 
        setPassword('')
      })
      .catch((err)=>{
        setMessage(err.response.data.msg)
        setUsername('') 
        setPassword('')
      })
    setTimeout(()=>{
      setMessage('')
    },3000)
  }

  return (
    <div className="box">
      <h1>Welcome</h1>
      <h3>{`Let's get started`}</h3>
      <input type="text" placeholder='Username' value={username} autoComplete='off' onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="submit" value='Login' onClick={handleLogin} />
      <p id="message">{message}</p>
    </div>
  )
}

export default App
