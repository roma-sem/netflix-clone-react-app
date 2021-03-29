import React from 'react';
import './NavLogo.scss';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/images/netflix-logo.jpg';
import logo from '../../../assets/images/netflix-logo-transparent.png';

export default function NavLogo () {
    return (
        <React.Fragment>
            {/*<Link to="/">*/}
                <img className="NavLogo-img" src={logo} alt="logo" />
            {/*</Link>*/}
        </React.Fragment>
    );
}
