import React from 'react';

const Post = (props:any) => {
    return (
        <div className='post'>
            <p>{props.post.message}</p>
            
        </div>
    );
};

export default Post;