import React, { useState } from 'react';
import {FaPen} from 'react-icons/fa';
import Update from './Update';

const Post = (props:any) => {
    const [click,setClick] = useState<boolean>(false);
    const affichePost = props.post.message
    const modify = () =>{
        console.log('click');
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
                    {click?<Update affichePost={affichePost}/>:<div></div>}
                </div>
            </div>
        </div>
    );
};

export default Post;