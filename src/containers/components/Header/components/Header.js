import React from 'react'
import { Link } from 'react-router'

const Header = (props) =>
{   let pad = props.loc.pathname === '/' ? '5%' : '5%';
    let style ={
        'textAlign': 'center',
        'backgroundColor': '#493737', //#282828
        'padding': `${pad} 15px ${pad} 15px`,
    }
    return(
        <div className='jumbotron' style={style}>
            <Link to='/' style={{'textDecoration': 'none'}}>
                <img src='/assets/img/logo.png' />
                <h2 style={{'fontFamily': 'nexa_rust_slabblack_shadow_01', 'color':'#037BA3'}}>
                    CARE FOR SENIORS
                    <p ><small style={{'color': '#15DA77'}}> EXPECT THE BEST </small></p>
                </h2>
            </Link>
        </div>
    )
}
module.exports = Header
