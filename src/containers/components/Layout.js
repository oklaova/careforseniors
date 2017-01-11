import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component
{  render()
    {   return(
            <div>
                <nav className="navbar navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">HOME <span className="sr-only">(current)</span></Link></li>
                                <li><Link to="/services">SERVICES</Link></li>
                                <li><Link to="/contact-us">CONTACT US</Link></li>
                                <li><Link to="/about-us">ABOUT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Header  loc = {this.props.location} />
                { this.props.children  }
                <Footer />
            </div>
        )
    }
}
module.exports = Layout
