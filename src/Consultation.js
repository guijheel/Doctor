import React , { useState } from 'react';
import './Consultation.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Button } from '@material-ui/core';
  


function Consultation() {
    const [nbrnotif, setNbrnotif] = useState([
        {
            nbr:4,
        }
    ])
    
    return (

        
        <div>
        {nbrnotif.map(nbrnotif =>(
           <div className="Consultation">
            
           <h1 className="titre_consultation">Consultations</h1>
           <Link>
               <rect className="rect_attente">
                   <span className="opc">
                    <h1 className="titre_attente">En attentes</h1>
                   </span>
                   <p className="text_attente">Vous avez {nbrnotif.nbr} consultations en attentes.</p>
               </rect>
           </Link>
           <Link>
               <rect className="rect_avenir">
                   <span className="opc">
                    <h1 className="titre_avenir">A venir</h1>
                   </span>
                   <p className="text_avenir">Vous avez {nbrnotif.nbr} consultations à venir.</p>
               </rect>
           </Link>
       </div>
        ))}
    </div>
    )
}

export default Consultation
