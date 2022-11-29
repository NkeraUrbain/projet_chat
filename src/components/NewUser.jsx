import React, { useState } from 'react'


const NewUser = () => {
    const [nom, setNom]= useState('');
    const [ email, setEmail]=useState('');
    const [password, setPassword]= useState('')

    
    const sendForm= e =>{
        e.preventDefault()
        const createUser= 'http://localhost:4100/utilisateur/createUser'
        fetch(createUser,{
            method: 'POST',
            body: JSON.stringify({nom:nom,email:email,password:password}),
            headers:{'Content-type':'application/json'},
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(result);
        })
    }
  return (
    <div> 
        <form onSubmit={sendForm}>
            <label>
                Nom
                <input type="text"  onChange={(e)=> setNom(e.target.value)}/>
            </label>
            <label>
                Email
                <input type="email" name="email" onChange={(e)=> setEmail(e.target.value) }/>
            </label>
            <label>
                password
                <input type="text" name="password" onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
  )
}

export default NewUser