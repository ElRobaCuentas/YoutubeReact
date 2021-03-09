import React from 'react'
import Menu from '../common/Menu'
import MenuLeft from '../common/MenuLeft'
import MenuRight from '../views/main/MenuRight'
import CajaGeneral from '../views/main/CajaGeneral'
import './styles/wrapper.css'

const Wrapper = (props) => {
    return (
        <div>
            <div className="container"> 
                <header className="header">
                    <Menu />
                </header>
                <main className="main">
                    <div className="izquierda">
                        <MenuLeft />
                    </div>
                    <div className="derecha">
                        {props.children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Wrapper
