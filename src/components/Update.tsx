import axios from 'axios';
import React, { useState,useContext } from 'react';
import{ClickContext} from './Post';

const Update = (props:any) => {
    const click:any = useContext(ClickContext);
    const [post,setPost] = useState<string>();
    const Post = props.fullPost;
    console.log(Post);
    
    const toggleStyleBtn = () =>{
        click.setClick(false);
    }
    const submitChange = async() =>{
        const idPost = props.fullPost._id
        Post.message = post;
        await axios.put('http://localhost:3000/updateposts/'+idPost,Post)
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
     return (
         <div className='update' id='updateEl'>
             
             <input onChange={(e)=>setPost(e.target.value)} autoFocus type="text" name="update" id="update" defaultValue={props.fullPost.message}/>
             <button onClick={submitChange} type="submit">modifier</button>
             <button onClick={toggleStyleBtn}>X</button>
         </div>
     );
 };
 export default Update;