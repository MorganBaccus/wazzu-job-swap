import React from 'react';
import './../App.css';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon class="header__icon" fontSize="large" color="" />
            </IconButton>
            <img
                class="header__logo"
                src="https://1000logos.net/wp-content/uploads/2021/07/Washington-State-Cougars-logo.png"
                alt="logo"
            />
            <IconButton>
                <ChatBubbleIcon class="header__icon" fontSize="large" color="" />
            </IconButton>
        </div>
    );
}

export default Header;