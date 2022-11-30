import React , {useState}from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let mabase= 'http://localhost:4100/utilisateur/Login'
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email,password)
      let res = await fetch(mabase, {
        method: "POST",
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      // if (res.status == 200) {
      //   setPassword("");
      //   setEmail("");
      //   setMessage("User Loged successfully");
      //   console.log(resJson);
      // } else {
      //   setMessage("Some error occured");
      // }
      navigate('/envoiMessage')
    } catch (err) {
      console.log(err)
    }
}
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className='login'>
        <label>email</label>
         <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
         <label>password</label>
         <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
         <button type='submit'>Login</button>
         <p> Don't have an account? <a href='/newuser2'>CREATE</a></p>
      {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
      </form>
    </div>
  )
}

export default Login