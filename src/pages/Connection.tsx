import React from 'react';

const Connection = () => {
    return (
        <div className='connection'>
            <div className='container'>
                <div className='signup'>
                <h1>Inscription</h1>
                    <form >
                        
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input type="text" name="mdp" id="mdp" />
                        <label htmlFor="confirm">confirmer:</label>
                        <input type="text" name="confirm" id="confirm" />
                    </form>
                </div>
                <div className='trait'>

                </div>
                <div className='login'>
                <h1>connection</h1>
                <form >
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" />
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input type="text" name="mdp" id="mdp" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connection;