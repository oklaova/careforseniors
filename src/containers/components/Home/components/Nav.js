import React from 'react'
import { Link } from 'react-router'

let services0=[
    'Assistance with walking and mobility',
    'Medication reminders',
    'Light housekeeping, Change linens and bedding',
    'Arrange appointments'
];
let services1=[
    'Assist writing and bill paying',
    'General moral support',
    'Errands, shopping, Laundry and Assistance with pets',
    'Dressing, grooming, bathing, guidance'
];

let services2=[
    'Meal preparation and planning',
    'Accompany to doctor appointments and social events',
    'Read to care recipient',
    'Joyful companionship and conversation'
];




const Nav = (props) =>
{   let style={};
    style.container ={'textAlign': 'center',padding: '1% 15px 1% 15px'}
    style.thumbnail={'border': 0}

    let list0 = <ul className='list-unstyled'>{services0.map((s, k) => <li key={k}><h4>{s}</h4></li>)}</ul>;
    let list1 = <ul className='list-unstyled'>{services1.map((s, k) => <li key={k}><h4>{s}</h4></li>)}</ul>;
    let list2 = <ul className='list-unstyled'>{services2.map((s, k) => <li key={k}><h4>{s}</h4></li>)}</ul>;

    return(
            <div className='row' style={style.container}>
                <div className='col-md-8 col-md-offset-2'>
                    <p style={{'marginBottom': '4%'}}>
                        <span style={{'color':'#60AEC8'}} >CARE FOR SENIORS LLC </span>, DBA <span style={{'color':'#60AEC8'}}> Hopewell Assisted Living </span> is
                        a personalized adult respite care services and assisted living care services, 24 hours a day, 7 days a week.
                        We provide services in the D.C. Metro Area, New Jersey, and Massachusetts.
                        We are trustworthy in caring for your loved ones and have been operating since 1995.
                        We are a family owned and operated business. Take a moment and read what our past and current clients have to say about us.
                        With us, you can be sure that you or your loved ones are comfortable.
                        We provide quality care with patients, respect and love in maintaining the dignity of our clients.
                    </p>
                    <h5 style={{'fontFamily': 'nexa_rust_sansblack', 'color': '#586261'}}>
                        <span style={{'color':'#60AEC8'}}>PROVIDING ELDERLY CARE</span> from the heart
                    </h5>
                    <p style={{'marginBottom': '5%'}}>
                        Our mission at Care For Seniors is to provide seniors in need with a high quality home care service that they would have received
                        from a loving family members to enhance their quality of life. For this Professionalism and good service that were demonstrated,
                        Care For Senior has been awarded <b>CARING FOR THE ELDERLY AWARD</b> by The Division of Licensing in 2009 and <b>BEST CARE AWARD</b> by the Alzeimer's Disease Association in 2006
                    </p>
                </div>
                <div className='col-sm-12'>
                    <div className='row'>
                        <hr />
                        <Link to='#'   style={{'textDecoration':'none'}}>
                            <div>
                                <h4 style={{'marginBottom': '1%'}}> SERVICE FOR SENIORS </h4>
                                <img className='img-responsive' style={{'margin': '0 auto', 'marginBottom': '3%'}} src='/assets/img/elderly_assistance.jpg' />
                            </div>
                        </Link>
                        <div className='col-sm-12'>
                            <div className='row' style={{'color':'#344E71'}}>
                                <div className='col-sm-4'>{list0}</div>
                                <div className='col-sm-4'>{list1}</div>
                                <div className='col-sm-4'>{list2}</div>

                            </div>
                        </div>
                        <div className='col-md-8 col-md-offset-2' style={{'textAlign': 'justify'}}>
                            <p style={{'marginBottom': '4%', 'marginTop':'4%'}}>
                                We take charge in bringing relief to family members in providing quality care for their parents, grand parents or loved ones in our
                                assisted home facility or in the comfort of their own home. We are a set dedicated group of ethical experienced nurses as well as home
                                care assistants and companions. We understand that family
                                is everything Give your loved ones the care they deserve with Care for Seniors,a family owned business since 1995.
                                <br /><br />
                                Care for seniors offers: Hourly (Part-time and Full-time), Overnight, and 24 hour live-in care (weekly and weekend).
                                <br /><br />
                                Our services can be arranged for a few hours a week or around the clock every day. We begin by reviewing your specific needs through
                                discussions with involved family members. When necessary we consult with the care recipient’s doctor, social workers, therapy, and nursing staff.
                                A customized program of care is developed to manage the care recipient’s daily needs. Help At Home will then match your needs to the best possible
                                caregiver.  Our caregiver is then informed about the physical capabilities, mental status, general health, interests and hobbies of the care recipient.
                                This enables us to provide the best possible care and a safe and secure household.
                            </p>
                        </div>
                        <div className='col-md-8 col-md-offset-2'>
                            <hr />
                            <h4 style={{'color':'#8B0002'}}><b> HOME ASSESSMENT </b> </h4>
                            <p style={{'marginBottom': '4%', 'marginTop':'1%'}}>
                                Whether you’re looking for companionship, a live-in aide, hospice care, bathing, toileting, or
                                grooming assistance for yourself or a loved one, we’ll be sure to match you with qualified in-home care tailored to your personal preferences and needs. Learn more about Care For Senior home care service to get started.
                                CONTACT US for free assessment 7 days a week 24 hours a day. Help us meet the needs of your loved one(s)<br />
                                <span className='glyphicon glyphicon-phone-alt'> 855-425-2976 </span>

                            </p>

                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Nav
