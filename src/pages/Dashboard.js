import React from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Dashboard() {

    const sidebar = useSelector(state => state);

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>Dashboard</h1>
                </div>
                <div className='container body'>
                    <div className='row'>
                        <div className='col-md-4 my-3'>
                            <div className='card'>
                                <h6>Pokemons</h6>
                                <Link to={`/Pokemons/`} >
                                    <button className='btn btn-success btn-sm'> Ir ahí</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='card'>
                                <h6>Juegos</h6>
                                <Link to={`/Games/`} >
                                    <button className='btn btn-success btn-sm'> Ir ahí</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='card'>
                                <h6>Locaciones</h6>
                                <Link to={`/Locations/`} >
                                    <button className='btn btn-success btn-sm'> Ir ahí</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Dashboard;