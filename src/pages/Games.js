import React from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

function Games (){

    const sidebar = useSelector(state => state);

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>Juegos</h1>
                </div>
            </div >
        </div>
    );
}

export default Games;