
import { Typography } from '@mui/material';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Faq.css"

import frame from "../../assets/images/Frame 49.png"
import SimplePaper from '../../components/paper/Paper';
import Nav from '../../components/nav-folder/Nav';

import SearchIcon from '@mui/icons-material/Search';





function Accordions() {
  // Array of accordion data
  const accordionData = [
    { id: 1, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 2, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 3, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 4, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 5, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 6, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 7, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 8, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 9, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: 10, title: "Do you Over Customer Support", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },

  ];

  return (
    <div style={{maxWidth: "1268px", marginLeft: "0px", padding: "20px" }}>
      {accordionData.map(({ id, title, content }) => (
        <Accordion key={id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}


const Faq = () => {
  return (
    <>

        <div className="faq-container-faq">
          {/* Your existing JSX */}
         
          
          <Nav/>


          <div className='section-head'>
            <h4>How can we help</h4>
        
            <div className='email-container'>
              <SearchIcon className="search-icon" />
              <input className='email' type="text" placeholder='Search for answers' />

            </div>
          </div>

        </div>


        

        <div className='paper'>
          {/* ADD MAYBE Paper */}
          
          <SimplePaper/>
        </div>
        

        <div className='faq'>
          <h4>Frequently asked Questions</h4>
          
          {/* INSERT ACCORDION */}
          
        </div>

        <div className='accordion'>
            <Accordions/>
        </div>

        <div className='faq-first-section'>
          <div className='faq-first-section-header'>
            <h4>Didn't find what you are looking for</h4>
            <p>Our Team is active to attend to your email</p>
          </div>
          

          {/* INSERT PNG IMG */}
          <div className='faq-first-section-image'>
            <img src={frame} alt="frame" />
          </div>
          

          <button>Contact Us</button>
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

export default Faq
