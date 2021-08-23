import React from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

function Dashboard() {

    const sidebar = useSelector(state => state);

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>Dashboard</h1>
                </div>
            </div >
        </div>
    );
}

export default Dashboard;