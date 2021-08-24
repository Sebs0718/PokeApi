import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function GamesMore(){

    const {id} = useParams();
    const sidebar = useSelector(state => state);
    const [game, setGame] = useState({});

    const getGame = async ()=>{
        try {
            const { data } = await Axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
            console.log(data)
            const newData = {
                name: data.name,
                region: data.main_region.name,
                version: data.version_groups.map((item)=> item.name)
            }
            setGame(newData);   
        } catch (error) {
            console.error(error)
        }   
    }

    useEffect(()=>{
        getGame();
    },[])

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>{game.name}</h1>
                </div>
                <div className='container body'>
                    <div className='row' >
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Región</th>
                                    <th>Version</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{game.region}</td>
                                    <td>{game.version ? game.version.map((item)=>item + ', ') : ""}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default GamesMore;