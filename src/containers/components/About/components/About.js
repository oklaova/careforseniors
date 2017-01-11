import React from 'react'
import { Link }  from 'react-router'

module.exports = props =>
{   let style={};
    style.container ={
        'paddingBottom': '5%',
        'textAlign': 'center'
    }

    let { pathname } = props.location;
    return(
            <div className='container-fluid' style={ style.container }>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2'>
                        <h4 style={{'color':'#17355D'}}><b> WHO WE ARE... </b> </h4>
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'justify'}}>
                            Care for seniors provides loving care for your loved ones .We can bring your loved one to our Assisted Facility homes,
                            or have us go to their homes. Our caregivers and staff members are very professional, neat, punctual, and friendly.
                            We take charge in bring relief to the family members in providing quality care for their loved ones. Each individual is
                            personalized with a care plan to suits your loved ones needs, in areas of their health and wellness.
                        </p>

                    </div>
                    <div className='col-md-8 col-md-offset-2'>
                        <h4 style={{'color':'#17355D'}}><b> ...MISSION & VISION </b> </h4>
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'justify'}}>
                            Care for seniors is dedicated to helping people achieve and maintain healthy lives in restoring wellness, and maximum strength.
                            Care for seniors is nationally recognized for performing her best in improving the health and wellness of the citizens of Virginia, Massachusetts,
                            New Jersey, Metro areas, Baltimore, and Delaware.
                            These are accomplished through word of mouths, advertising, and Seminars, Caregiver’s meetings, hospital’s and innovative networking.
                        </p>
                    </div>
                    <div className='col-md-8 col-md-offset-2'>
                        <h4 style={{'color':'#17355D'}}><b> VALUES & GOALS... </b> </h4>
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'justify'}}>
                            We strive to recognize and support excellence in health care organizations by applying the best methods to meet our client’s personal needs.
                            Examples: Our care givers always maintain a clean environment in the client’s surroundings. Our clients are always presentable. We ensure their safety. To be nationally recognized as the health organization that best prepares health care and wellness.
                            Be nationally recognized for having the highest levels of patient safety and transformation and consistency.
                        </p>
                    </div>
                    
                    <div className='col-md-8 col-md-offset-2' style={{'backgroundColor':'#D3D3D3'}}>
                        <div className='row'>
                            <div className='col-md-12' style={{'backgroundColor':'#890000'}}>
                                <h4 style={{'color':'white'}}><b> SPECIALIZED CARES </b> </h4>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <p style={{'marginBottom': '4%', 'marginTop':'4%','textAlign': 'justify'}}>
                                    Trust us to provide attentive care for wheelchair-bound elders, as well as those with dementia, Alzheimer's, and mobility issues.
                                    Those who are experiencing incontinence can depend on us as well. Our services include help with Alzheimer's, Dementia, memory care,
                                    rehab, wheel chair access, mobility, bedridden, incontinent care, respite care, live-in care, and including all daily living activities.
                                    We help with bathing, dressing, grooming, incontinence, medication administration and we also provide three healthy meals and three healthy snacks a day.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 col-md-offset-2'>
                        <h4 style={{'color':'#8B0002', 'marginTop': '4%'}}><b> HOME ASSESSMENT </b> </h4>
                        <p style={{'marginBottom': '4%', 'marginTop':'1%'}}>
                            Whether you’re looking for companionship, a live-in aide, hospice care, bathing, toileting, or
                            grooming assistance for yourself or a loved one, we’ll be sure to match you with qualified in-home care tailored to your personal preferences and needs. Learn more about Care For Senior home care service to get started.
                            CONTACT US for free assessment 7 days a week 24 hours a day. Help us meet the needs of your loved one(s)<br />
                            <span className='glyphicon glyphicon-phone-alt'> 855-425-2976 </span>
                        </p>
                    </div>
                    <Link className='col-md-8 col-md-offset-2' to='/contact-us'>click here to contact us for more information</Link>
                </div>
            </div>
    )
}
