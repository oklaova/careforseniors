import React from 'react'
import axios from 'axios'

class Post extends React.Component
{   submit(e)
    {   e.preventDefault();
        let data={
            name: this.refs.name.value,
            email: this.refs.email.value,
            message: this.refs.message.value,
            phone: this.refs.phone.value
        };
        axios({
            url:'https://formspree.io/careone4@aol.com',
            method:'POST',
            data: data,
            dataType: 'json'
        });


        name: this.refs.name.value='';
        email: this.refs.email.value='';
        message: this.refs.message.value='';
        phone: this.refs.phone.value='';
        alert('Form submitted. Thank You!');
    }

    render()
    {   return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2' style={{'color':'#17355D', 'marginBottom': '4%', 'marginTop':'4%', 'textAlign': 'center'}} >
                        <h4 ><b> CONTACT US </b> </h4>
                        <p>
                            Thank you for your interest. For questions or comments please use the form below. We look forward to hearing from you!
                        </p>
                    </div>
                    <div className='col-md-8 col-md-offset-2'>
                        <form onSubmit={ this.submit.bind(this) }>
                            <div className='form-group'>
                                <label> Name: </label>
                                <input ref='name' type="text" className="form-control" />
                            </div>
                            <div className='form-group'>
                                <label> Phone </label>
                                <input ref='phone' type="text" className="form-control"/>
                            </div>
                            <div className='form-group'>
                                <label> Email </label>
                                <input ref='email' type="text" className="form-control"/>
                            </div>
                            <div className='form-group'>
                                <label>Message </label>
                                <textarea ref='message' rows='10' className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <button type="submit" className="btn btn-primary">SEND</button>
                            </div>
                        </form>
                    </div>

                    <div className='col-md-8 col-md-offset-2' style={{'textAlign': 'center'}}>
                        <h4 ><b> CORPORATE HEADQUATERS </b> </h4>
                        <p>
                            12030 Sunrise Valley Dr<br />
                            Reston, VA 20191<br />
                            Phone: 703-680-2666 / 703.349.0738 /  Fax: 571.659.9772 <br />
                            Toll Free: 855-425-2976
                        </p>
                    </div>
                    <div className='col-md-8 col-md-offset-2' style={{'textAlign': 'center'}}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h5 ><b> NEW JERSEY </b> </h5>
                                <p>
                                    Phone: 732.908.1077 /  Fax: 855.425.2976<br />
                                    Email: careone4@aol.com
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <h5 ><b> MASSACHUSETTS </b> </h5>
                                <p>
                                    Phone: 732.908.1077 /  Fax: 855.425.2976<br />
                                    Email: careone4@aol.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Post
