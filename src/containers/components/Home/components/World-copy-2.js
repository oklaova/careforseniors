import React from 'react'
import { Link } from 'react-router'
export default props =>
{   return(
        <div className='container-fluid world-container'>
            <div className='row'>
                <div className='col-sm-4 col-sm-offset-4'>
                    <img src='/assets/img/heartbeat.png' className='img-responsive' />
                    <p>
                        You are part of the heart of the Kingdom.
                        You are part of the heart of the Kingdom. See the Gospel of Jesus Christ advancing in all nations.
                        Join the list of churches, ministries, organizations seeking Revival in the land. Meet those
                        in unknown territories showing the Love of GOD...
                    </p>
                    <div className='row'>
                        <Link className='col-sm-8 col-sm-offset-2 btn' style={{'verticalAlign': 'middle'}}>
                            EXPLORE
                        </Link>
                    </div>
                </div>
                {/*<div className='col-sm-8 col-sm-offset-2'>
                    <div classname='row'>
                        <div className='col-sm-6'>
                            <img src='/assets/img/1.jpg' className='img-responsive' />
                        </div>
                        <div className='col-sm-6'>
                            <div className='row'>
                                <Link className='col-sm-8 col-sm-offset-2 btn' style={{'verticalAlign': 'middle'}}>
                                    EXPLORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6' >
                    <Link to='/post-prayer'  className='' style={{'textDecoration':'none'}}>
                        <div  style={{'padding': '15px', 'textDecoration':'none'}}>
                            <h3 style={{'padding': '1% 0 1% 0' , 'fontFamily': 'nexa_rust_slabblack_shadow_01', 'color': '#9C6D4B'}}>
                                LIST OF REVIVAL SEEKERS...
                                <p>
                                    <i className="fa fa-caret-left fa-2x"></i>
                                </p>
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className='col-md-6' >
                    <Link to='/post-prayer'  className='' style={{'textDecoration':'none'}}>
                        <div  style={{'padding': '15px', 'textDecoration':'none'}}>
                            <h3 style={{'padding': '1% 0 1% 0' , 'fontFamily': 'nexa_rust_slabblack_shadow_01', 'color': '#9C6D4B'}}>
                                MEET THE LABORERS...
                            </h3>
                        </div>
                    </Link>
                </div>*/}
            </div>
        </div>

    )
}
