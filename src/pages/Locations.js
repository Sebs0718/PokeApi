import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

function Locations (){

    const sidebar = useSelector(state => state);
    const [pagintate, setPaginate] = useState(0);
    const [locations, setLocations] = useState([]);

    const getLocations = async ()=>{
        try {
            const { data } = await Axios.get(`https://pokeapi.co/api/v2/location/?limit=796&offset=0`);
            setLocations(data.results);   
        } catch (error) {
            console.error(error)
        }   
    }

    const nextPaginate = ()=>{
        setPaginate(pagintate + 10);
        getLocations();
    }

    const previousPaginate = ()=>{
        setPaginate(pagintate - 10);
        getLocations();
    }

    useEffect(()=>{
        getLocations();
    },[])

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>Locaciones</h1>
                </div>
                <div className='container body'>
                    <div className='row' >
                        {locations.map((item,index)=>{
                            if(index >= pagintate && index <= pagintate + 10){
                                return(
                                    <div className='col-md-4 my-3' key={index}>
                                        <div className='card'>
                                            <h6>{item.name}</h6>
                                            <Link to={`/LocationMore/${index + 1}`} >
                                                <button className='btn btn-success btn-sm'> Ver mas</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className='container footer'>
                    <h6 className='mx-3'>Resultados {(pagintate + 1) + "-" + (pagintate + 10)}</h6>
                    <button className='btn btn-sm btn-primary' onClick={pagintate >= 10 ? previousPaginate : ()=>{}}> <AiIcons.AiOutlineArrowLeft /> </button>
                    <button className='btn btn-sm btn-primary mx-2' onClick={pagintate < 786 ?nextPaginate : ()=>{}}> <AiIcons.AiOutlineArrowRight /> </button>
                </div>
            </div >
        </div>
    );
}

export default Locations;