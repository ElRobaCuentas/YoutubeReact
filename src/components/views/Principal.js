import React from 'react'
import Wrapper from '../layout/Wrapper'
import Menu from '../common/Menu'
import CajaGeneral from '../views/main/CajaGeneral'
import MenuRight from './main/MenuRight'
import { Link } from 'react-router-dom'
import MenuLeft from '../common/MenuLeft'

const Principal = () => {
    return (
        <>  
            <Wrapper>
                <MenuRight />
            </Wrapper>
        </>
    )
}

export default Principal
