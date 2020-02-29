import React from "react";
import './footer_pages.scss';
import {Link} from "react-router-dom";

const FooterPages = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <button className='btn-back-to-main'><Link exact to="/">STRONA GŁÓWNA</Link></button>
            </div>
        </div>
    );
};

export default FooterPages;