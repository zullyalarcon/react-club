import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.png";
import "./App.css";

import Menu from './components/menu/Menu';
import Home from './components/pages/Home'

const App = () => {
    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, []);

    const [isSticky, setSticky] = useState(false)

    const stickyRef = useRef(null);
    const handleScroll = () => {
        window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false)
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <div className="main">
            <header className="app-header">
                <div className="logo" ref={stickyRef}>
                    <img alt="logo-club-liderazgo" src={logo} />
                    CLUB DE <strong>LIDERAZGO</strong>
                </div>
                <Menu sticky={isSticky} />
            </header>
            <Home sticky={isSticky} />
        </div>
    )
}

export default App;
