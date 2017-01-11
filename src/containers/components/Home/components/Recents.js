import React from 'react'
import ViewPrayer from '../../viewPrayer'

export default props =>
{   let style={};
    style.title ={
        'textAlign': 'center',
        'fontFamily': 'nexa_rust_sansblack',
        'color': '#464646',
        'marginBottom': '2%'
    }
    return(
        <div className='container-fluid'>
            <div className='row'>
                <h5 style={style.title}>INDIVIDUAL PRAYER REQUEST</h5>
                <div className='col-sm-12'>
                    { [1,2,3,4,5, 6].map(x => <ViewPrayer key={ x } num={x}/>) }
                </div>
            </div>
        </div>
    )
}
