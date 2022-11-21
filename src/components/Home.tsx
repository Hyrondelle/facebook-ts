import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [post,setPost] = useState<string>('post');
    
    const Submit = async() =>{
        const postObj = {title:post}
        await axios.post('http://localhost:3000/post',postObj)
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    },[])
    return (
        <div className='home'>
            <h1>coucou</h1>
            <label htmlFor="post">message:</label>
            <input onChange={(e)=>setPost(e.target.value)} type="text" name="post" id="post" />
            <button onClick={Submit} type="submit">Envoyer</button>
        </div>
    );
};

export default Home;