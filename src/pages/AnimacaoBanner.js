import React from "react";
import "./AnimacaoBanner.css";
import { Link } from 'react-router-dom';

const AnimacaoBanner = () => {
    return (
        <div className="tudo">
            <button type="button"><Link to="/" className="home-button">skip</Link></button>
        </div>
    )
}

export default AnimacaoBanner;