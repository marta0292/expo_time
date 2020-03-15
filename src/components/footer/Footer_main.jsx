import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterMain = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <Link exact to="/newproject"><button className='button'><p>NEW PROJECT</p></button></Link>
            </div>
        </div>
    );
};

export default FooterMain;