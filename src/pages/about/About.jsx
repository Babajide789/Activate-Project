
import logos from "../../assets/images/Content.jpg"
import Nav from "../../components/nav-folder/Nav"

import "./About.css"






function About() {
    return (
        <>

          <div className="faq-container-faq">
            {/* Your existing JSX */}

            <Nav/>

            <div className="section-head">
              <h4>About Us</h4>
            </div>


          </div>

         
  
          <div className="section1">
            <div className="section1-head">
              <p>Meet Our Partner</p>
            </div>

            {/* INSERT LOGOS */}

            <div className="partners">
              <img src={logos} alt="logo" />
            </div>
          </div>

          <div className="newsletter">
            <div className="newsletter-header">
              <h4>Subscribe to our Newsletter</h4>
            </div>

            <div className="newsletter-paragraph">
              <p>Join our mailing list to get the latest news</p>
            </div>
            
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
 
          
        </>
    )
}

export default About
