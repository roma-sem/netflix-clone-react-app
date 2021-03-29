import React, { useState, useEffect } from 'react';
import './Header.scss';
import NavLogo from './NavLogo/NavLogo';
import Avatar from './Avatar/Avatar';
// import SearchBar from './SearchBar/SearchBar';
// import Nav from './Nav/Nav';

export default function Header () {
    const [blackHeader, setBlackHeader] = useState(false);

    const handleScroll = () => {
        window.scrollY > 100 ? setBlackHeader(true) : setBlackHeader(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header className={`Header ${blackHeader && "black-header"}`}>
            <NavLogo />
            <Avatar />
            {/*<SearchBar />*/}
            {/*<Nav />*/}
        </header>
    )
}
