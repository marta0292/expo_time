import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterPages = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <Link to="/" className='button'>
                    STRONA GŁÓWNA
                </Link>
            </div>
        </div>
    );
};

export default FooterPages;