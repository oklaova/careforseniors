import React from 'react'
import { Link } from 'react-router'
export default props =>
{   let style={};
    style.container ={
        'textAlign': 'center',
        padding: '3% 15px 1% 15px'
    }

    style.thumbnail={
        'border': 0
    }



    return(
        <div className='container-fluid' style={ style.container }>
            <div className='row'>
                <div className='col-sm-6' >
                    <Link to='/post-prayer'  className='' style={{'textDecoration':'none'}}>
                        <div className=''>
                            <div  style={{'padding': '15px', 'textDecoration':'none'}}>
                                <h1 style={{'padding': '1% 0 1% 0' , 'fontFamily': 'nexa_rust_slabblack_shadow_01', 'color': '#9C6D4B'}}>
                                    NETWORKS
                                </h1>
                                <p>Join the list of churches, ministries, organization, and business pursuing REVIVAL</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-sm-6' >
                    <Link to='/post-prayer'  className='' style={{'textDecoration':'none'}}>
                        <div className=''>
                            <div  style={{'padding': '15px', 'textDecoration':'none'}}>
                                <h1 style={{'padding': '1% 0 1% 0' , 'fontFamily': 'nexa_rust_slabblack_shadow_01', 'color': '#9C6D4B'}}>
                                    MISSIONARIES
                                </h1>
                                <p>See the kingdom of GOD advancing in all nations. Meets the missionaries...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}
