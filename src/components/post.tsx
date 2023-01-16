import React, { useState, useEffect } from 'react';
import {FaPen} from 'react-icons/fa';

const Post = (props:any) => {
    const [click,setClick] = useState<boolean>();
    const affichePost = props.post.message
    
    const modify = () =>{
        setClick(true);
    }

    return (
        <div className='post'>
            <div className='post-contain'>
                <p>{affichePost}</p>
            </div>
            <div className="social">
                <div className="total">
                    <div className='like btn'>nblike</div>
                    <div className='btn_x2'>
                        <div className='comment btn'>nbcomment</div>
                        <div className='partage btn'>nbpartage</div>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='like btn centre'>like</div>
                    <div className='comment btn centre'>comment</div>
                    <div className='partage btn centre'>partage</div>
                    <button onClick={modify} className='modify'><FaPen/></button>
                    {click &&<Update affichePost={affichePost}/>}   
                </div>
            </div>
        </div>
    );
};

const Update = (props:any) => {
    const updateElement = document.getElementById('updateEl');
    const toggleStyleBtn = () =>{
        updateElement?.remove();
        
    }
    
     return (
         <div className='update' id='updateEl'>
             
             <input autoFocus type="text" name="update" id="update" defaultValue={props.affichePost}/>
             <button onClick={toggleStyleBtn}>X</button>
         </div>
     );
 };
 
export default Post;

     
     

 