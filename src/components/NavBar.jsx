import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'


const NavBarStyle = styled.div`
.navBar{
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
    width: 100%;padding: 1rem 0;
    background: var(--dark-bg);
    
}
ul{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li{
        display: inline-block;
        border-radius: 8px;
        transition: .3s ease background-color;
        &:hover{
            background-color: var(--deep-dark);
        }
    }
    a{
        display: inline-block;
        font-family: 'RobotoMono Regular';
        padding: 1rem 2rem;
        font-size: 2rem;
        color: var(--gray-1);
        outline: none;
    }
    .active{
        color: var(--white);
    }
}
.mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
@media only screen and (max-width: 768px){
    padding:0;
    .hidden-items{
        transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon{
        display: block;
    }
    ${'' /* nav items for the phone menu */}
    .navItems{
        padding: 2rem;
        width: 90%;
        max-width:300px;
        border-radius: 12px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        transition: 0.3s ease transform;
        background-color: var(--deep-dark);
    .closeNavIcon{
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          ${'' /* pointer-events: none; */}
        }
    }
    li{
        display: block;
        margin-botom: 1rem; 
    }
    }
    
}
`;



export default function NavBar() {
    const [showNav, SetShowNav] = useState(false);

    return (
        <NavBarStyle>
            {/* this div contains code to close the nav bar when in mobile mode, in two sets of div */}
            <div
                className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hidden-items' : 'navItems'} >
                <div
                    className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink
                        to="/"
                        // exact
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Projects
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}