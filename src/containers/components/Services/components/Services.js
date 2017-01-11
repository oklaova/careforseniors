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
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'justify'}}>
                            Care For Seniors provides loving care for your loved ones . We can bring your loved one to our Assisted Facility homes, or have us go to their homes. Our caregivers and staff members are very professional, neat,
                            punctual, and friendly.We take charge in bring relief to the family members in providing quality care for their loved ones. Each individual is personalized with a care plan to suits your loved ones needs, in areas
                            of their health and wellness. Care for Seniors in Virginia, D.C. and Maryland, offers dependable senior home care services. Aside from helping seniors with daily living Activities. We have more than 15 years of
                            experience in assisting people aged 60 years and older, as well as those who can't take care of themselves, but don't want to go to a nursing facility.
                            Elderly Assistance is provided in the different categories listed below
                        </p>
                        <h4 style={{'color':'#17355D'}}><b> PROGRAMS FOR THE ELDERLY </b> </h4>
                    </div>
                    <div className='col-md-4'>
                        <h4 style={{'color':'#8B0002'}}><b> DEMENTIA & ALZEIMER'S DISEASE ELDERLY ASSISTANCE</b></h4>
                        <img src='/assets/img/elder-medication-safety.jpg' style={{'margin': '0 auto'}} />
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'left'}}>
                            Alzheimer's disease and other types of dementia can be a challenging journey, not only for the person diagnosed but
                            also for their family members and loved ones. Caring for someone with Alzheimer's or dementia can be overwhelming at times.
                            We are there to help you along the journey. We treat the whole person by providing an environment that allows the person to
                            feel safe and independent.<br />

                            Care For Seniors aides understand each case is unique and requires special attention. We are well trained and experienced to
                            do the following duties:<br />


                            Medication reminder and administration<br />
                            Vital signs, Blood Pressure Readings<br />
                            Blood Sugar Readings/Insulin Injection<br />
                            Errands, shopping, joyful companionship and conversation<br />
                            Arrange and accompany to doctor appointments and social events<br />
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <h4 style={{'color':'#8B0002'}}><b> ACCOMODATIONS </b> </h4>
                        <img src='/assets/img/elderly-homecare-services.jpg' style={{'margin': '0 auto'}} />
                                <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'left'}}>
                                    Care For Seniors home health aides are certified professionals, trained to perform additional “hands-on”
                                    senior care services. A home health aide will be certified to perform duties of a personal care aide plus the following:<br />
                                    Bathing & Dressing<br />
                                    Commode Assistance<br />
                                    Physical Therapy<br />
                                    Feeding assistance<br />
                                    Light housekeeping and laundry
                                </p>
                            </div>
                            <div className='col-md-4'>
                                <h4 style={{'color':'#8B0002'}}><b> MOBILITY & AMBULATION ASSISTANCE </b> </h4>
                                <img className='img-responsive' src='/assets/img/elderly-care-companionship.jpg' style={{'margin': '0 auto'}}/>
                        <p style={{'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'left'}}>
                            A part of aging is lack of mobility which can be frustrating because your loved ones might find
                            they are unable to perform activities they would like to or maybe their body does not respond to their mind.
                            Being able to move as one would like to in certain ways defines our independence and not being able to do so can
                            trigger depression, lost in motivation or even circulation problems.
                            Our experienced caregivers help your loved one onvercome the feeling of anxiety and frustration.
                            They do this by assisting your loved ones with the following duties:<br />

                            Assistance with walking and mobility<br />
                            Physical Therapy<br />
                            Change linens and bedding<br />
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
