import React from 'react';
import DropdownMenu from './DropdownComponents';
import { FaAngleRight } from "react-icons/fa";
import Logo from './../assets/images/logo_sprint.png';
function NavbarHeader(props) {
    return (
        <div>
            <header className="navbar">
                <div className='container'>
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li>
                                <a href="#">
                                    <DropdownMenu name="Product" />
                                </a>
                            </li>
                            <li><a href="#">Business Insight</a></li>
                            <li>
                                <a href="#">
                                    <DropdownMenu name="Company" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="action-button">
                        <span className='me-2'>
                            Book a Demo 
                        </span>
                        <FaAngleRight />
                    </button>
                </div>
            </header>
        </div>
    );
}

export default NavbarHeader;