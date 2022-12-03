import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Connection = () => {
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [verif,setVerif] = useState<string>('');
    const [choice,setChoice] = useState<string>('login');
    const navigate = useNavigate();

    const MakeChoiceLogin = () =>{
        setChoice('login')
    }
    const MakeChoiceSignup = () =>{
        setChoice('signup')
    }
    const Submit = async() =>{
        const authtObj = {email,password}
        await axios.post('http://localhost:3000/'+choice,authtObj)
        .then((res)=>{console.log(res)
        navigate("/home")})
        .catch((e)=>console.log(e))
    }
    return (
        <div className='connection'>
            <div className='container'>
                <div className='signup'>
                    <h1>Inscription</h1>
                    <form >       
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="text" name="mdp" id="mdp" />
                        <label htmlFor="confirm">confirmer:</label>
                        <input onChange={(e)=>setVerif(e.target.value)} type="text" name="confirm" id="confirm" />
                        <input onClick={()=>{Submit; MakeChoiceSignup}} className='envoyer' type="button" value="Valider" />
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
                        <input onClick={()=>{MakeChoiceLogin(); Submit()}} className='envoyer' type="button" value="Valider" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connection;