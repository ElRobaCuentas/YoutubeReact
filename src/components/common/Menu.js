import React from 'react'
import { Link } from 'react-router-dom';
import './styles/menu.css'

const menu = () => {
    return (
        <>
                <div className="padre">
                    <div className="logo">
                        <Link to="/">
                            <i class="fas fa-bars"></i>
                        </Link>
                        <Link to="/">
                            <i class="fab fa-youtube">Youtube</i>
                        </Link>
                    </div>
                    <div className="buscar">
                        <input type="text" placeholder="Buscar"/>
                        <i class="fas fa-microphone"></i>
                    </div>
                    <div className="iconos">
                        <Link to="/">
                            <i class="fas fa-bars"></i>
                        </Link>
                        <Link to="/">
                            <i class="fas fa-bars"></i>
                        </Link>
                        <Link to="/">
                            <i class="fas fa-bars"></i>
                        </Link>
                        <Link to="/">
                            {/* <img src="https://i.pinimg.com/originals/ba/6d/27/ba6d2700ff6e5945c8e2710c8a38f421.jpg" alt=""/> */}
                        </Link>
                    </div>
                
                </div> 
        </>
    )
}

export default menu
