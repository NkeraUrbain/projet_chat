import React, {useEffect,useState} from 'react'
import { json } from 'react-router-dom'
import './App.css';


const  Envoiemessage = () =>  {
  const [user,setUser] = useState('')
  const[allUsers, setAllUsers]=useState([])
  const[messages, setMessages]=useState([]);
  const[selectedUser, setSelectedUser]= useState(null);

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

const selectUser=(elected)=>{
    setSelectedUser(elected)
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
    <div className='d-flex form-control w-100'>
        <div className=' d-flex flex-column w-50'>
          <p className='text-primary text-uppercase'> Formulaire d'envoie Message</p>
          <p> Utilisateur connecté:{user.username}</p>
          <ol >List Users:
            {allUsers.map((user)=>( 
              <li key={user._id} onClick={()=>{selectUser(user)}}>{user.username}</li>
            ))}
          </ol>
          
        </div>

      <div className='d-flex flex-column form-control w-20' id='secondColumn' >
         <div>
          utilisateur selectionné :{ selectedUser?.username}
           
           
            { messages.length > 0 ?
               messages.map((message)=> 
                   
                    message.sender == selectedUser.username || message.receiver == selectedUser.username ? 
                    (<div>{message.body}</div>): null
                    
                 ) : null
             }
        </div>
        <div className='d-flex btn' id='footer w-100'>
           <textarea className='text-center w-100'  placeholder='Votre Message ici'></textarea>
           <button type='button' className='btn-primary' id='benv'>Envoi message</button>
        </div>
      </div>
    </div>
  </main>
    )
  }

  export default Envoiemessage

