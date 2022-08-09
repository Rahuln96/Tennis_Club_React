import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
      <div className="container-fluid footer-bg">
         <div className="container  p-5">
            <div className="row">
                <div className="col-md-4">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Optio inventore in aspernatur provident sapiente! Cum alias
                         corporis ratione delectus. Corrupti natus cumque suscipit harum modi 
                        a blanditiis doloribus iusto nemo.</p>
                </div>
                <div className="col-md-2">
                    <h4>Quick Link</h4>
                    <ul>
                        <li><Link to="/" className='text-decoration-none text-white '>Home</Link></li>
                        <li><Link to="/About" className='text-decoration-none text-white '>About</Link></li>
                        <li><Link to="/Contact" className='text-decoration-none text-white '>Contact</Link></li>
                        <li><Link to="/Service" className='text-decoration-none text-white '>Service</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Subscribe Now</h4>
                    <p>Don’t miss our future updates! 
                        Get Subscribed Today!</p>
                        <input type="email" placeholder='Your Email Address' className='form-control rounded ' />
                         <button className='btn btn-primary mt-4'>Subscribe</button>
                </div>
                <div className="col-md-3">
                    <h4>Contact Us</h4>
                   <p>Basant Kunj, Delhi India</p>
                   
                </div>
            </div>
         </div>
      </div>

  )
}
