import React from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

function Locations (){

    const sidebar = useSelector(state => state);

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>Locaciones</h1>
                </div>
            </div >
        </div>
    );
}

export default Locations;