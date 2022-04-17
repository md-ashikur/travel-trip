
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <h5><i className="fa fa-road"></i> Travel Trip</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><Link to="">Product</Link></li>
                            <li><Link to="">Benefits</Link></li>
                            <li><Link to="">Partners</Link></li>
                            <li><Link to="">Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><Link to="">Documentation</Link></li>
                            <li><Link to="">Support</Link></li>
                            <li><Link to="">Legal Terms</Link></li>
                            <li><Link to="">About</Link></li>
                        </ul>
                    </div>
                </div>
               
            </div>
            <div className="col-md-2">
                <h5 className="text-md-right">Contact Us</h5>
                <hr></hr>
            </div>
            <div className="col-md-5">
                <form>
                    <fieldset className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
                    </fieldset>
                    <fieldset className="form-group">
                        <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn  btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    <hr></hr>
    <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <Link to="/"> MD Ashik</Link>.
            </p>
          </div>

         
        </div>
      </div>
</footer>

        </div>
    );
};

export default Footer;