import React, { useState } from 'react'
import '../App.css'

function NewUser2() {
    let mabase= 'http://localhost:4100/utilisateur/newUser'
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      let res = await fetch(mabase, {
        method: "POST",
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({
          username: name,
          email: email,
          password: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
        console.log(resJson);
      } else {
        setMessage('error');
      }
    } catch (err) {
      console.log(err);
    }
}
    return (
        <div className="">
          <form  className="User" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={mobileNumber}
              placeholder="Password"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
    
            <button type="submit" >Create</button>
            <p>Allready Registered?<a href='/login'>LOGIN</a></p>
    
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
  };
  export default NewUser2

