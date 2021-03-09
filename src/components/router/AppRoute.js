import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Principal from '../views/Principal'
import Tendencias from '../views/Tendencias'
import Suscripciones from '../views/Suscripciones'
import Biblioteca from '../views/Biblioteca'
import Historial from '../views/Historial'
import TusVideos from '../views/TusVideos'
import VerMasTarde from '../views/VerMasTarde'
import VideosQueTeGustan from '../views/VideosQueTeGustan'

const AppRoute = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route path="/" exact component={ Principal }/>
                <Route path="/tendencias" component={ Tendencias }/>
                <Route path="/suscripciones" component={ Suscripciones }/>
                <Route path="/biblioteca" component={ Biblioteca }/>
                <Route path="/historial" component={ Historial }/>
                <Route path="/tusVideos" component={ TusVideos }/>
                <Route path="/verMasTarde" component={ VerMasTarde }/>
                <Route path="/videosQueTeGustan" component={ VideosQueTeGustan }/>
                
                <Redirect to="/"/>
            </Switch>
        </Router>
        </>
    )
}

export default AppRoute
