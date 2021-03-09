import React from 'react'
import { Link } from 'react-router-dom';
import MenuLeftReplic from '../views/main/MenuLeftReplic';
import './styles/menu-left.css'

const MenuLeft = () => {
    const gato = ["Principal","Tendencias","Biblioteca","Historial","Tus videos","Ver más tarde", "Video que me gustan", 
    "Mostar más", "El reino infantil", "Willyrex", "GENIAL", "Popoyo", "Anuel", "Underap", "Rapstyle"]
    
    const gato2 = [
        {titulo: "Principal", logo: "fas fa-home"},
        {titulo: "Tendencias", logo: "fas fa-fire"},
        {titulo: "Biblioteca", logo: "fas fa-magnet"},
        {titulo: "Historial", logo: "fas fa-save"},
        {titulo: "Tus videos", logo: "fas fa-undo"},
        {titulo: "Ver más tarde", logo: "fas fa-stop-circle"},
        {titulo: "Video que me gustan", logo: "fas fa-clock"}, 
        {titulo: "El reino infantil", logo: "fas fa-thumbs-up"},
        {titulo: "Mostar más", logo: "fas fa-caret-down"},

    ]
    return (
        <>
            <div className="caja_padre">
                {
                    gato2.map(  titulos => {
                        return <MenuLeftReplic gato2={titulos.titulo} gato3={titulos.logo} />
                    } )
                }
            </div>
        </>
    )
}

export default MenuLeft

{/* <div className="caja_padre"> 
    <div className="cajaOne">
        <Link to="/principal">
            <i class="fas fa-home"></i>
            <p>Principal</p>
        </Link> */}
        {/* <Link to="/tendencias">
            <i class="fas fa-home"></i>
            <p>Tendencias</p>
        </Link>
        <Link to="/suscripciones">
            <i class="fas fa-home"></i>
            <p>Suscripciones</p>
        </Link> */}
    {/* </div>  */}
    {/* <div className="cajaTwo">
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
    </div> */}
    {/* <div className="cajaThree">
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
     */}
{/* </div> */}