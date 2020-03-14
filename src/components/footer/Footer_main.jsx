import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterMain = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <button className='button'><Link exact to="/newproject"><p>NEW PROJECT</p></Link></button>
            </div>
        </div>
    );
};

export default FooterMain;