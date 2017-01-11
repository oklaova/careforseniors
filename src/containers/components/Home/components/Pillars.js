import React from 'react'
import ViewPrayer from '../../viewPrayer'
import Pillars from '../../Pillars'

export default props =>
{   let style={};
    style.container ={
        'paddingBottom': '5%',
        'textAlign': 'center'
    }

    return(
        <div className='container-fluid' style={ style.container }>
            <div className='row'>
                { Pillars.map((p,i) => <ViewPrayer key={ i } index={ i } {...p}/>) }
            </div>
        </div>
    )
}
