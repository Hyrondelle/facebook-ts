import React, { useState,useContext } from 'react';
import{ClickContext} from './Post';

const Update = (props:any) => {
    const click:any = useContext(ClickContext);
    
    const toggleStyleBtn = () =>{
        click.setClick(false);
    }
    const submitChange = async() =>{
        await fetch('http://localhost:3000/updateposts/:'+props.id,{method: 'POST'})
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
     return (
         <div className='update' id='updateEl'>
             
             <input autoFocus type="text" name="update" id="update" defaultValue={props.affichePost}/>
             <button onClick={submitChange} type="submit">modifier</button>
             <button onClick={toggleStyleBtn}>X</button>
         </div>
     );
 };
 export default Update;