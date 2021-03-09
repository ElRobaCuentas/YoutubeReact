import React from 'react'
import { Link } from 'react-router-dom'
import MenuLeft from '../../common/MenuLeft'
import './styles/menu-left-replic.css'

const MenuLeftReplic = (props) => {
    // const titles = props.tituloMenu
    const animal = props.gato2
    const logosLeft = props.gato3
    console.log("aca esta el animal:", logosLeft)
    return (
        <>
            <div className="replica">
                <Link className="prueba">
                    <i class={logosLeft}></i>
                    <p>{animal}</p>
                </Link>
            </div>
        </>
    )
}

export default MenuLeftReplic
