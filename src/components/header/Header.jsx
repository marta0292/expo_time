import React from "react";
import './header.scss';
import Logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const userIcon = <FontAwesomeIcon icon={faUser}/>;
    return (
        <div className='header'>
            <div className='container'>
                <img src={Logo} alt='logo'/>
                <div className='user'>
                    {userIcon}
                    <h2 className='userName'>Marta</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;