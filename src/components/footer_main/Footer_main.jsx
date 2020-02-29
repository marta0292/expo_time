import React from "react";
import './footer_main.scss';
import {Link} from "react-router-dom";

const FooterMain = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <button className='btn-add-new-project'><Link exact to="/newproject"><p>NEW PROJECT</p></Link></button>
            </div>
        </div>
    );
};

export default FooterMain;