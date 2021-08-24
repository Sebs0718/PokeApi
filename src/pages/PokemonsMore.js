import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function PokemonsMore(){

    const {id} = useParams();
    const sidebar = useSelector(state => state);
    const [pokemon, setPokemon] = useState({});

    const getPokemon = async ()=>{
        try {
            const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const newData = {
                name: data.name,
                experience: data.base_experience,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
            }
            setPokemon(newData);   
        } catch (error) {
            console.error(error)
        }   
    }

    useEffect(()=>{
        getPokemon();
    },[])

    return(
        <div className='page'>
            <Sidebar />
            <div className={sidebar ? 'content-page' : 'content-page-desactive'} >
                <div className='title'>
                    <h1>{pokemon.name}</h1>
                </div>
                <div className='container body'>
                    <div className='row' >
                        <div className='img'>
                            <img className='principal' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='img' />
                        </div>
                        <div className='table-responsive '>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Experinecia Base</th>
                                        <th>Hp</th>
                                        <th>Ataque</th>
                                        <th>Defensa</th>
                                        <th>Velocidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{pokemon.experience}</td>
                                        <td>{pokemon.hp}</td>
                                        <td>{pokemon.attack}</td>
                                        <td>{pokemon.defense}</td>
                                        <td>{pokemon.speed}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default PokemonsMore;