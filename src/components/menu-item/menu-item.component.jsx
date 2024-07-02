import React from "react";
import './menu-item.sytles.scss';
import { Link } from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    return (
        <Link
            to={`/${linkUrl}`}
            style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }
            className={`${size} menu-item`}
        >
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </Link>
        
    )
}

export default MenuItem;