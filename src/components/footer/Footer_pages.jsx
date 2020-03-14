import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterPages = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <button className='button'><Link exact to="/">STRONA GŁÓWNA</Link></button>
            </div>
        </div>
    );
};

export default FooterPages;