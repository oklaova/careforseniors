import React from 'react'
import { Link } from 'react-router'

const Nav = (props) =>
{     let style={};
    style.container ={
        'textAlign': 'center',
        padding: '3% 15px 4% 15px'
    }

    style.thumbnail={
        'border': 0
    }

    return(
            <div className='container' style={style.container}>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <h5 style={{'fontFamily': 'nexa_rust_sansblack', 'color': '#464646'}}> PSALMS 116</h5>
                        <h5>
                            "I love the Lord, for he heard my voice<br />
                            he heard my cry for mercy.<br />
                            Because he turned his ear to me,
                            I will call on him as long as I live"
                        </h5>
                        <h3>{ props.conn } </h3>
                    </div>
                    <div className='col-md-12'>
                        <Link to='/post-prayer'  className='' style={{'textDecoration':'none'}}>
                            <div className='thumbnail col-sm-6' style={style.thumbnail}>
                                <img src='/assets/img/1.jpg' />
                                <div className='caption'>

                                    <div  style={{  'padding': '15px', 'textDecoration':'none'}}>
                                        <h5 style={{'fontFamily': 'nexa_rust_sansblack', 'color': '#3D9991'}}>POST A PRAYER</h5>
                                        <p>Help other carry you through your days</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/post-prayer'  className='nav' style={{'textDecoration':'none'}}>
                            <div className='thumbnail col-sm-6' style={style.thumbnail}>
                                <img src='/assets/img/1.jpg' />
                                <div className='caption'>
                                    <div className='pillars-link'  style={{ 'padding': '15px', 'textDecoration':'none'}}>
                                        <h5 style={{'fontFamily': '', 'color': ''}}>PRAY FOR SOMEONE</h5>
                                        <p>Those that refresh others shall themselves be refreshed. Prov 11:25</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col-sm-4 col-sm-offset-4 '>
                        <Link to='/pillars-of-prayer'   style={{'textDecoration':'none'}}>
                            <div   style={{'padding': '15px','textDecoration':'none'}}>
                                <h5>VIEW PILLARS OF PRAYERS</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

    )
}
export default Nav

{/*<div className='thumbnail col-xs-6'>
    <img src='/img/2.jpg' />
    <div className='caption'>
    <Link to='/login' className='' style={{'textDecoration':'none'}}>
    <div style={{ 'border': '1px grey solid', 'padding': '15px'}}>
    <h6>ALL PRAYERS</h6>
    </div>
    </Link>
    </div>
</div>*/}
