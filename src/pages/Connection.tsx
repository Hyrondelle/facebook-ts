import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Connection = () => {
    const [nodal,setNodal] = useState<boolean>(false);
    const NodalBtn = () =>{
        setNodal(!nodal)
    }
    return (
        <div className='connection'>
            <div className="nodal">
                <div className='nodal-btn' onClick={NodalBtn}></div>
                {nodal?<Signup/>:<Login/>}
            </div>
        </div>
    );
};

export default Connection;