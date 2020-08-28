import React , { useState } from 'react'
import { Button } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


function Header() {
    const [users, setUsers] = useState([
        {
            name:"Dupont",
        }
    ])
    
    return ( 
        <div>
            {users.map(users =>(
                <div className="Header">
                    <p className="Goodmorning">Bonjour</p>
                    <h1 className="Genderuser">Dr. {users.name}</h1>
                    <p className="On_off">Vous êtes hors-ligne, connecter vous pour commencer à consulter.</p>
                    <Link>
                             <Button className="btn_onoff"><p className="Text_onoff">Passer en ligne</p></Button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Header
