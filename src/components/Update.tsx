import React, { useState,useContext } from 'react';
import{ClickContext} from './Post';

const Update = (props:any) => {
    const click:any = useContext(ClickContext);
    
    const toggleStyleBtn = () =>{
        click.setClick(false);
    }
    
     return (
         <div className='update' id='updateEl'>
             
             <input autoFocus type="text" name="update" id="update" defaultValue={props.affichePost}/>
             <button onClick={toggleStyleBtn}>X</button>
         </div>
     );
 };
 export default Update;