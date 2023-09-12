import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
function DropdownMenu(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="dropdown-menu-327">
            <div className="menu-item-327" onClick={toggleDropdown}>
                <span className='me-2'>
                    {props.name}
                </span>
                {isDropdownOpen ? <FaAngleDown /> : < FaAngleUp />}
            </div>
            {isDropdownOpen && (
                <div className="dropdown-content-327">
                    <p>Product 1</p>
                    <p>Product 2</p>
                    <p>Product 3</p>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
