import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import 'react-pro-sidebar/dist/css/styles.css';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as CgIcons from 'react-icons/cg'
import { Link } from 'react-router-dom';


function Sidebar (){

    const sidebar = useSelector(state => state);
    const dispatch = useDispatch();

    const showSidebar = ()=> dispatch({type: "change"});

    return(
        <ProSidebar collapsed={sidebar}>
            <SidebarHeader>
                <h2 className='mx-5' onClick={showSidebar}>PokeApi</h2>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<AiIcons.AiFillDashboard />}>
                        Dashboard
                        <Link to='/' />
                    </MenuItem>
                    <MenuItem icon={<CgIcons.CgGames />}>
                        Juegos
                        <Link to='/Games' />
                    </MenuItem>
                    <MenuItem icon={<BiIcons.BiCurrentLocation />}>
                        Locaciones
                        <Link to='/Locations' />
                    </MenuItem>
                    <MenuItem icon={<CgIcons.CgPokemon />}>
                        Pokémons
                        <Link to='/Pokemons' />
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h6 className='mx-4'>App Created for Sebastian</h6>
            </SidebarFooter>
        </ProSidebar>
    ); 
}

export default Sidebar;