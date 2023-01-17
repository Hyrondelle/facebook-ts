import React, { useState, createContext,useContext } from 'react';
import {FaPen} from 'react-icons/fa';
import Update from './Update';
export const ClickContext = createContext({});
const Post = (props:any) => {
    const [click,setClick] = useState<boolean>(false);
    const affichePost = props.post.message
    
    const modify = () =>{
        setClick(true);
    }

    return (
        <div className='post'>
            <ClickContext.Provider value={{click,setClick}}>
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
            </ClickContext.Provider>
        </div>
    );
};


 
export default Post;

     
     

 