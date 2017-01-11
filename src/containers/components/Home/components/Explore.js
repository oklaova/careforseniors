import React from 'react'
import { Link } from 'react-router'
export default props =>
{   return(
        <div className='container-fluid explore-container'>
            <div className='row'>
                <div className='col-md-4 col-md-offset-4 col-xs-12'>
                    <img src='/assets/img/heartbeat-3.png' className='img-responsive' />
                    <p>
                        You are part of the heart of the Kingdom. See the Gospel of Jesus Christ advancing in all nations.
                        Join the list of churches, ministries, organizations seeking Revival in the land. Meet those
                        in unknown territories showing the Love of GOD...
                    </p>
                    <div className='row'>
                        <Link className='col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2 btn' >
                            <h4>EXPLORE</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
