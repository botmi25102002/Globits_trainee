import React from "react";
import { Link } from "react-router-dom";
import '../../Style/Sidebar.css';
import { IoHomeOutline } from "react-icons/io5";
import { RiEarthLine } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li>

                    <Link to="/" className="sidebar-link">< IoHomeOutline style={{ marginRight: "10px" }} />Home</Link>
                </li>
                <li>
                    <Link to="/countries" className="sidebar-link"><RiEarthLine style={{ marginRight: "10px" }} />Countries</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

