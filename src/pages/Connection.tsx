import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Connection = () => {
    const [email,setEmail] = useState<string>('');
    const [name,setName] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [verif,setVerif] = useState<string>('');
    const navigate = useNavigate();

    const SubmitLogin = async() =>{
        const authtObj = {email,password}
        await axios.post('http://localhost:3000/login',authtObj)
        .then((res)=>{console.log(res)
        navigate("/home")})
        .catch((e)=>console.log(e))
    }
    const SubmitSignup = async() =>{
        if(password===verif){
            const authtObj = {name,email,password}
            await axios.post('http://localhost:3000/signup',authtObj)
            .then((res)=>{console.log(res)
            navigate("/home")})
            .catch((e)=>console.log(e))
        }
        else{return console.log('verifiction password incorrecte');
        }
    }
    return (
        <div className='connection'>
            <div className='container'>
                <div className='signup'>
                    <h1>Inscription</h1>
                    <form >  
                        <label htmlFor="name">Name:</label>
                        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" />     
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="text" name="mdp" id="mdp" />
                        <label htmlFor="confirm">confirmer:</label>
                        <input onChange={(e)=>setVerif(e.target.value)} type="text" name="confirm" id="confirm" />
                        <input onClick={SubmitSignup} className='envoyer' type="button" value="Valider" />
                    </form>
                </div>
                <div className='trait'>

                </div>
                <div className='login'>
                    <h1>connection</h1>
                    <form >
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="text" name="mdp" id="mdp" />
                        <input onClick={SubmitLogin} className='envoyer' type="button" value="Valider" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connection;