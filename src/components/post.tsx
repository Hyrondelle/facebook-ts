import React from 'react';

const Post = (props:any) => {
    return (
        <div className='post'>
            <div className='post-contain'>
                <p>{props.post.message}</p>
            </div>
            <div className="total">
                <div className='like btn'>like</div>
                <div>
                    <div className='comment btn'>comment</div>
                    <div className='partage btn'>partage</div>
                </div>
            </div>
            <div className='buttons'>
                <div className='like btn'>like</div>
                <div className='comment btn'>comment</div>
                <div className='partage btn'>partage</div>
            </div>
        </div>
    );
};

export default Post;