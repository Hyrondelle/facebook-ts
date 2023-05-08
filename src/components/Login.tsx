import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState<string>('');
    const [pseudo,setPseudo] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [verif,setVerif] = useState<string>('');
    const navigate = useNavigate();

    const SubmitLogin = async() =>{
        const data = {email,password}
        await axios.post('http://localhost:5000/api/user/login',data)
        .then((res)=>{
            console.log(res)
            navigate("/home")
            localStorage.setItem('userId',res.data.userId)
        })
        .catch((e)=>console.log(e))
    }
    return (
        
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
        
    );
};

export default Login;