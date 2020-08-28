import React from 'react'
import './Outils.css';
import { IconButton } from '@material-ui/core';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
function Outils() {
    return (
        <div>
            <h1 className="Outils_text"> Outils</h1>
        
        <div className="Outils">
            
            <IconButton className="Folder">
                <Link>
                    <FolderOutlinedIcon className="Folder"/>
                    <p className="Folder">Répertoire</p>
                </Link>
                
            </IconButton>

            <IconButton className="Documents">
            <Link>
            <DescriptionIcon className="Documents"/>
                <p>Documents</p>
                </Link>
            </IconButton>

            <IconButton className="Pensebete">
            <Link>
            <EmojiObjectsIcon className="Pensebete"/>
                <p>Pense-bête</p>
                </Link>
            </IconButton>

            <IconButton className="Statistiques">
            <Link>
                <EqualizerIcon className="Statistiques"/>
                <p>Statistiques</p>
            </Link>
                
            </IconButton>
        </div>
        </div>
    )
}

export default Outils
