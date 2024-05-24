import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>

    <footer className="footer">
        <div className="container">
            <div className="column">
                <a href="!"><img src="data:image/jpeg;base64,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" alt="Company Logo" width="100"/></a>
                <h3> WE ARE REVOLUTIONARY<br/>
                    <span className="footer-heading-span">Black Box</span></h3>
                <p>AI Shaping Tomorrow <br />
                    Today For Brighter Future</p>
            </div>
            <div className="column">
                <h3>Best AI</h3>
                <ul>
                    <li><a href="!">ChatGPT</a></li>
                    <li><a href="!">Mid Journey</a></li>
                    <li><a href="!">Beautiful AI</a></li>
                    <li><a href="!">Invideo AI</a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Useful Link</h3>
                <ul>
                    <li><a href="!">Deep Fake</a></li>
                    <li><a href="!">Claude AI</a></li>
                    <li><a href="!">AllinoneAI</a></li>
                    <li><a href="!">Notion</a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Study Abroad</h3>
                <ul>
                    <li><a href="!">USA</a></li>
                    <li><a href="!">UK</a></li>
                    <li><a href="!">Canada</a></li>
                    <li><a href="!">Australia</a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Contact Us</h3>
                <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Arabia Terra, Mars</p>
                <p><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;+12345678988</p>
                <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;abc123@gmail.com</p>
                <div className="social-icons">
                    <a href="!"><i className="fab fa-facebook-square"></i></a>
                    <a href="!"><i className="fab fa-linkedin"></i></a>
                    <a href="!"><i className="fab fa-whatsapp-square"></i></a>
                </div>
            </div>
        </div>
    
        <hr />
    
        <div className="copyright">
            <p>&copy; 2024 Your Company. All rights reserved || Developed by <span>&!10084;</span> CodeWithLoremHacker</p>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer