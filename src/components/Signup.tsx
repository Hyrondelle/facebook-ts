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
            await axios.post('http://localhost:5000/api/user/register',data)
            .then((res)=>{console.log(res)
            })
            .catch((e)=>console.log(e))
        }
        else{return console.log('verifiction password incorrecte');
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='signup'>
                    <h1>Inscription</h1>
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
            </div>
        </div>
       );
    };


export default Signup;