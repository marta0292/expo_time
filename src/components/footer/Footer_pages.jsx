import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

const FooterPages = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <Link exact to="/"><button className='button'>STRONA GŁÓWNA</button></Link>
            </div>
        </div>
    );
};

export default FooterPages;