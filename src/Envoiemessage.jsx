import React, {useEffect,useState} from 'react'
import { json } from 'react-router-dom'



const  Envoiemessage = () =>  {
  const [user,setUser] = useState('')
  const[allUsers, setAllUsers]=useState([])
  const[messages, setMessages]=useState([]);
  
  let afficherUtilisateurs = async () => {
    let utilisateurs='http://localhost:4100/utilisateur/details'
    try {
      let res = await fetch(utilisateurs, {
        method: "GET",
        headers: { "Content-Type": 'application/json'},
        
      });
      let data = await res.json();
      
      if(data[0]){
        setAllUsers(data)
      }
      
    } catch (err) {
      console.log(err)
    }
  }
  
  let recupererMessage= async(user)=>{
    let urlMessage='http://localhost:4100/utilisateur/Message'
    try {
      let reponse= await fetch(urlMessage,{
        method:'POST',
       headers: { "Content-Type": 'application/json'},
       body: JSON.stringify({username:user})
  })
 let content= await reponse.json()
 console.log(content);
 setMessages(content.data);
} catch (error) {
  console.log(error);
}
}
useEffect(() => {
  if (window.localStorage !== undefined) {
    const data = window.localStorage.getItem('user');
    data !== null ? setUser(JSON.parse(data)) :null;
    afficherUtilisateurs()
      recupererMessage(user?.username)
    }
       
  }

, []);
console.log(messages);
return (
  <main className='border-10px'>
    <div className='d-flex form-control w-50'>
        <div className=' d-flex flex-column '>
          <p className='text-primary text-uppercase'> Formulaire d'envoie Message</p>
          <p> Utilisateur connecté:{user.username}</p>
          <ol>List Users:
            {allUsers.map((user)=>( 
              <li key={user._id}><a href="#">{user.username}</a></li>
            ))}
          </ol>
          <button className='btn-primary btn m-1'> Message de...</button>
          <textarea className='text-center'  placeholder='Votre Message ici'></textarea>
          <button type='button' className='btn-primary'>Envoi message</button>
        </div>

      <div className='d-flex flex-column form-control w-50 '>
         <ol>
          liste message:
          { messages.length > 0 ?
              messages.map((message)=>( 
                <li><a href="#">{message.body}</a></li>
                )) : null
            }
        </ol>
        <button className='text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
      </div>
    </div>
  </main>
    )
  }

  export default Envoiemessage

