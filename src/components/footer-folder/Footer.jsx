

import "./Footer.css"





const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="footer-holder">
            <div className="nav-logo">
              <p className="the">The</p>
              <p className='next'>Next Gen</p>
              <p className='show'>SHOW</p>
            </div>

            <div className="footer-sections-holder">
              <div className="footer-section-head1">
                <p>COMPANY</p>

                <div className="footer-section-row1">
                  <p>How it works</p>
                  <p>Talents</p>
                  <p>Events</p>
                </div>

            </div>

          
            <div className="footer-section-head1">
              <p>RESOURCES</p>

              <div className="footer-section-row2">
                <p>Blog post name goes here</p>
                <p>Blog post name goes here</p>
                <p>Blog post name goes here</p>
                <p>Blog post name goes here</p>
              </div>

            </div>

            
            <div className="footer-section-head1">
              <p>ABOUT</p>

              <div className="footer-section-row3">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
        </div>
          </div>

      </div>
    </>
  )
}

export default Footer
