import React from 'react'

let utilisateurs= ()=>{ 
  let utilisateurs='http://localhost:4100/utilisateur/details'
  let afficherUtilisateurs = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(utilisateurs, {
        method: "POST",
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    }
  }
return{

}
    }

export default afficherUtilisateurs