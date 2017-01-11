import React from 'react'
import ViewPrayer from '../../viewPrayer'

export default props =>
{   return(
        <div className='container-fluid'>
            <div className='row'>
                <hr />
                <h5 style={{'textAlign': 'center'}}>INDIVIDUAL PRAYER REQUEST</h5>
                <div className='col-md-8 col-md-offset-2'>
                    { [1,2,3,4,5, 6].map(x => <ViewPrayer key={ x } num={x}/>) }
                </div>
            </div>
        </div>
    )
}
