import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email,setEmail] = useState<string>('');
    const [pseudo,setPseudo] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [verif,setVerif] = useState<string>('');
    const navigate = useNavigate();

    const SubmitSignup = async() =>{
        if(password===verif){
            const data = {pseudo,email,password}
            await axios({
                method:'post',
                url:`${import.meta.env.VITE_APP_URL_CLIENT}api/user/register`,
                withCredentials:true,
                data:{
                    pseudo,
                    email,
                    password
                },})
            .then((res:any)=>{
                if(res.data.errors){
                    console.log(res);
                }
                else{
                    console.log(res)
                    localStorage.setItem('userId',res.data.user)
                }
                
            })
            .catch((e:any)=>console.log(e))            
        }
        else{return console.log('verifiction password incorrecte');
        }
    }
    return (
        
                <div className='signup'>
                    
                    <form >  
                        <label htmlFor="name">Pseudo:</label>
                        <input onChange={(e)=>setPseudo(e.target.value)} type="text" name="name" id="name" />     
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="text" name="mdp" id="mdp" />
                        <label htmlFor="confirm">confirmer:</label>
                        <input onChange={(e)=>setVerif(e.target.value)} type="text" name="confirm" id="confirm" />
                        <input onClick={SubmitSignup} className='envoyer' type="button" value="Valider" />
                    </form>
                </div>
            
        
       );
    };


export default Signup;