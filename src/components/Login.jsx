import React , {useState, useEffect}from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const[user, setUser]= useState('');

  
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

      if(res.status===200){
         localStorage.setItem('user', JSON.stringify(resJson));
         navigate('/envoiMessage')
      }else{
       setMessage(resJson)
      }
    } catch (err) {
      console.log(err)
    }
}
useEffect(() => {
  if (window.localStorage !== undefined) {
    const data = window.localStorage.getItem('user');
    data !== null ? navigate('/envoiMessage') : null;
  }
}, []);

const callAPI = async () => {
  try {
    const resJson = await mabase.json();
    const data = await resJson.json();
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  } catch (err) {
    console.log(err);
  }
};



console.log(user);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className='login'>
        <label>email</label>
         <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
         <label>password</label>
         <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
         <button type='submit'>Login</button>
         <p> Don't have an account? <a href='/newuser2'>CREATE</a></p>
         <button onClick={callAPI}> callAPI</button>
      {<div className="message">{message ? <p>{message}</p> : null}</div>}
      </form>
    </div>
  )
}

export default Login