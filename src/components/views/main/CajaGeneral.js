import React from 'react'
import './styles/caja-general.css'

const CajaGeneral = () => {
    return (
        <>
                <div className="replicado">
                        <img src="https://static.dw.com/image/54975072_303.jpg" alt=""/>
                        <a className="imagen_titulo" href="">
                            <img src="https://lh3.googleusercontent.com/SVrYChVgqbeXea-hWEy-eSJR6tMxZiudq6-CSmaFAbRky9RGE7yQ1vvwQL-gUowAj99G3w=s68" alt=""/>
                            <p>Coronavirus Perú: EsSalud publica cronograma para...</p>
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <a  className="descripcion_video" href="">
                            <p className="agencia">Urban Rooster</p>
                            <p>19,664 vistas · hace 1 día</p>
                        </a>
                </div>              
        </>
    )
}

export default CajaGeneral
