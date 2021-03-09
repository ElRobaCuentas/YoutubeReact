import React from 'react'
import { Link } from 'react-router-dom';
import './styles/menu-left.css'

const MenuLeft = () => {
    return (
        <>
            <div className="caja_padre"> 
                <div className="cajaOne">
                    <Link to="/principal">
                        <i class="fas fa-home"></i>
                        <p>Principal</p>
                    </Link>
                    <Link to="/tendencias">
                        <i class="fas fa-home"></i>
                        <p>Tendencias</p>
                    </Link>
                    <Link to="/suscripciones">
                        <i class="fas fa-home"></i>
                        <p>Suscripciones</p>
                    </Link>
                </div> 
                <div className="cajaTwo">
                    <Link to="/biblioteca">
                        <i class="fas fa-home"></i>
                        <p>Biblioteca</p>
                    </Link>
                    <Link to="/historial">
                        <i class="fas fa-home"></i>
                        <p>Historial</p>
                    </Link>
                    <Link to="/tusVideos">
                        <i class="fas fa-home"></i>
                        <p>Tus videos</p>
                    </Link>
                    <Link to="/verMasTarde">
                        <i class="fas fa-home"></i>
                        <p>Ver más tarde</p>
                    </Link>
                    <Link to="/videosQueTeGustan">
                        <i class="fas fa-home"></i>
                        <p>Videos que te gustan</p>
                    </Link>
                    <Link to="/">
                        <i class="fas fa-home"></i>
                        <p>Motrar más</p>
                    </Link>
                </div>
                <div className="cajaThree">
                    <h4>SUSCRIPCIONES</h4>
                    <Link to="/">
                        <img src="https://oestadoonline.com.br/wp-content/uploads/2020/07/foto-de-um-dos-perfis-no-facebook-de-jonathan-galindo-tambem-conhecido-como-homem-pateta-1593104648342_v2_450x450-e1594756907777-450x330.jpg" alt=""/>
                        <p>El reino infantil</p>
                    </Link>
                    <Link to="/">
                        <img src="https://oestadoonline.com.br/wp-content/uploads/2020/07/foto-de-um-dos-perfis-no-facebook-de-jonathan-galindo-tambem-conhecido-como-homem-pateta-1593104648342_v2_450x450-e1594756907777-450x330.jpg" alt=""/>
                        <p>Underap</p>
                    </Link>
                    <Link to="/">
                        <img src="https://oestadoonline.com.br/wp-content/uploads/2020/07/foto-de-um-dos-perfis-no-facebook-de-jonathan-galindo-tambem-conhecido-como-homem-pateta-1593104648342_v2_450x450-e1594756907777-450x330.jpg" alt=""/>
                        <p>GENIAL</p>
                    </Link>
                    <Link to="/">
                        <img src="https://oestadoonline.com.br/wp-content/uploads/2020/07/foto-de-um-dos-perfis-no-facebook-de-jonathan-galindo-tambem-conhecido-como-homem-pateta-1593104648342_v2_450x450-e1594756907777-450x330.jpg" alt=""/>
                        <p>Pocoyo</p>
                    </Link>
                    <Link to="/">
                        <i class="fas fa-home"></i>
                        <p>Motrar más</p>
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default MenuLeft
