import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterMain = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <Link to="/newproject" className='button'>
                    NEW PROJECT
                </Link>
            </div>
        </div>
    );
};

export default FooterMain;