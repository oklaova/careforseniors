import React from 'react'
import reactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Home from './containers/components/Home'


const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./containers/components/Layout'),
        indexRoute: { component: Home },
        childRoutes:[
            require('./containers/components/Contact'),
            require('./containers/components/Services'),
            require('./containers/components/About')
        ]
    }]
}

const root = document.getElementById('root')
reactDOM.render(<Router history={ browserHistory } routes={ rootRoute} />, root)
