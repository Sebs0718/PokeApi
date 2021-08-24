import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function LocationMore(){

    const {id} = useParams();
    const sidebar = useSelector(state => state);
    const [location, setLocation] = useState({});

    const getLocation = async ()=>{
        try {
            const { data } = await Axios.get(`https://pokeapi.co/api/v2/location/${id}`);
            console.log(data)
            const newData = {
                name: data.name,
                region: data.region.name,
                area: data.areas[0].name,
                game: data.game_indices[0].generation.name
            }
            console.log(newData);
            setLocation(newData);   
        } catch (error) {
            console.error(error)
        }   
    }

    useEffect(()=>{
        getLocation();
    },[])

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>{location.name}</h1>
                </div>
                <div className='container body'>
                    <div className='row' >
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Región</th>
                                    <th>Aréa</th>
                                    <th>Juego</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{location.region}</td>
                                    <td>{location.area}</td>
                                    <td>{location.game}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LocationMore;