import React, { useState } from 'react';

const Update = (props:any) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    
    return (
        <div className='update'>
            
            <input autoFocus type="text" name="update" id="update" defaultValue={props.affichePost}/>
            <button onClick={setClick(false)}>X</button>
        </div>
    );
};

export default Update;