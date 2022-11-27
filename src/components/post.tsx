import React from 'react';

const Post = (props:any) => {
    return (
        <div className='post'>
            <p>{props.post.title}</p>
            
        </div>
    );
};

export default Post;