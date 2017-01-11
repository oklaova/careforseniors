import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'

class Home extends React.Component
{   render()
    {   return(
            <div className='container-fluid'>
                <Nav conn={ this.props.conn }/>
            </div>
        )
    }
}
module.exports = Home
