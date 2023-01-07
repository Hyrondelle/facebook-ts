import React from 'react';

const Update = (props:any) => {
    
    return (
        <div className='update'>
            
            <input autoFocus type="text" name="update" id="update" defaultValue={props.affichePost}/>
        </div>
    );
};

export default Update;