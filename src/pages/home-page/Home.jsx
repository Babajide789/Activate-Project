import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Paper from '@mui/material/Paper';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import rectangle4 from "../../assets/images/Rectangle4.jpg"
import rectangle5 from "../../assets/images/Rectangle 5.jpg"
import rectangle6 from "../../assets/images/Rectangle 6.jpg"
import "./Home.css"


import sponsors from "../../assets/images/Content.jpg"

import arise from "../../assets/images/Logo arise.png"
import phicent from "../../assets/images/Logo eph.png"
import year from "../../assets/images/Logo 2020.png"
import paak from "../../assets/images/Logo Paak.png"
import pipe from "../../assets/images/Logo Pipe.png"
import gether from "../../assets/images/Logo gether.png"

import background_img from "../../assets/images/Gallery Scroll.png"

import image1 from "../../assets/images/Image0.png"
import image2 from "../../assets/images/Image1.png"
import image3 from "../../assets/images/Image5.png"

import vector from "../../assets/images/Vector 1.png"

import create from "../../assets/images/Vector create.png"
import join from "../../assets/images/Vector join.png"
import submit from "../../assets/images/Vector sub.png"
import get from "../../assets/images/Vector short.png"
import vote from "../../assets/images/Vector vote.png"
import Nav from "../../components/nav-folder/Nav";


import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';




// VerticalTabs Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 9 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 200,
        bgcolor: "background.paper",
        display: "flex",
        height: 300,
        width: "80%",
        marginLeft: 5
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Create an Account " {...a11yProps(0)} />
        <Tab label="Join an Event" {...a11yProps(1)} />
        <Tab label="Submit Requirements" {...a11yProps(2)} />
        <Tab label="Get Shortlisted" {...a11yProps(3)} />
        <Tab label="Get the Highest Votes" {...a11yProps(4)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <img src={create} alt="create" style={{ marginBottom: '20px' }}/>

        <h4 style={{ marginBottom: '15px' }}>Create an account</h4>

        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <img src={join} alt="join" style={{ marginBottom: '20px' }}/>

        <h4 style={{ marginBottom: '15px' }}>Join an Event</h4>

        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <img src={submit} alt="submit" style={{ marginBottom: '20px' }}/>

        <h4 style={{ marginBottom: '15px' }}>Submit Requirements</h4>

        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <img src={get} alt="get" style={{ marginBottom: '20px' }}/>

        <h4 style={{ marginBottom: '15px' }}>Get Shortlisted</h4>

        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
      
      <TabPanel value={value} index={4}>
        <img src={vote} alt="vote" style={{ marginBottom: '20px' }}/>

        <h4 style={{ marginBottom: '15px' }}>Get the Highest Votes</h4>

        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
      
    </Box>

    
  );
}

// SimplePaper Component
function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": {
          m: 3,
          width: { xs: "90%", md: 300 },
          height: "auto",
        },
        maxWidth: "100%", // Ensure it does not overflow
        padding: 2, // Add padding to avoid overlap
        margin: "auto", // Center within the parent
        boxSizing: "border-box", // Include padding and border in width/height
      }}
    >
      <Paper elevation={3}>
        <Typography variant="body1">
          <div className="elevation-card1">
            <div className="elevation-card-paragraph">
              <p>"Amet minim mollit non deserunt</p>
              <p>ullamco est sit aliqua dolor do</p>
              <p>amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
              <p>veniam consequat."</p>
            </div>
            <div className="elevation-card-desc">
              <div className="elevation-card-image">
                <img src={image1} alt="image1" />
              </div>
              <div className="elevation-card-text">
                <p>
                  <b>Emmanuel J</b>
                </p>
                <p>Photographer</p>
              </div>
            </div>
          </div>
        </Typography>
      </Paper>

      <Paper elevation={3}>
        <Typography variant="body2">
          <div className="elevation-card1">
            <div className="elevation-card-paragraph">
              <p>"Amet minim mollit non deserunt</p>
              <p>ullamco est sit aliqua dolor do</p>
              <p>amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
              <p>veniam consequat."</p>
            </div>
            <div className="elevation-card-desc">
              <div className="elevation-card-image">
                <img src={image2} alt="image2" />
              </div>
              <div className="elevation-card-text">
                <p>
                  <b>John Woods</b>
                </p>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </Typography>
      </Paper>

      <Paper elevation={3}>
        <Typography variant="body3">
          <div className="elevation-card1">
            <div className="elevation-card-paragraph">
              <p>"Amet minim mollit non deserunt</p>
              <p>ullamco est sit aliqua dolor do</p>
              <p>amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>
              <p>veniam consequat."</p>
            </div>
            <div className="elevation-card-desc">
              <div className="elevation-card-image">
                <img src={image3} alt="image3" />
              </div>
              <div className="elevation-card-text">
                <p>
                  <b>Sidwell Mako</b>
                </p>
                <p>Artist</p>
              </div>
            </div>
          </div>
        </Typography>
      </Paper>
    </Box>
  );
}


function ActionAreaCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap', // Wraps cards to the next row if there's not enough space
        gap: 3, // Adds spacing between the cards
      }}
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={rectangle4}
            alt="rectangle4"
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                26th June
              </Typography>
              <ArrowCircleRightOutlinedIcon
                sx={{
                  fontSize: '24px', // Adjust the icon size
                  color: 'text.secondary', // Match the text color
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Lorem Ipsum</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={rectangle5}
            alt="rectangle5"
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                26th June
              </Typography>
              <ArrowCircleRightOutlinedIcon
                sx={{
                  fontSize: '24px',
                  color: 'text.secondary',
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Lorem Ipsum</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={rectangle6}
            alt="rectangle6"
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                26th June
              </Typography>
              <ArrowCircleRightOutlinedIcon
                sx={{
                  fontSize: '24px',
                  color: 'text.secondary',
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Lorem Ipsum</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}



// Home Component
function Home() {
  return (
    <>
      <div className="faq-container-home">
          {/* Your existing JSX */}
          
        <Nav/>
      
        <div className="section1">
          <div className="first-section">
            <p>Impacting</p>
            <p>Lives of Young</p>
            <p>People in Africa.</p>
          </div>

          <div className="first-section-paragraph">
            <p>Making youngsters leverage their</p>
            <p>skills, abilities and talents stand</p>
            <p>out as a goal getter</p>
          </div>

          <div className="button-section1">
            <button className="join">Join Us</button>
            <button className="works"> <PlayCircleFilledWhiteIcon/> How it works</button>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="second-section-head">
          <h4>How it works</h4>
        </div>

        <div className="second-section-paragraph">
          <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo</p>
          <p>tellus amet. Ut placerat dolor massa metus quisque sodales semper.</p>
          <p>Hac donec vulputate pharetra augue eu congue.</p>
        </div>

        
      </div>

      <div className="MUI-section">
        <VerticalTabs />
      </div>

      <div className="partners-section">
        <div className="partners-section-head">
          <h4>Our Partners</h4>
        </div>

        

        <div className="partners-section-paragraph">
          <p>People who have trust in us</p>
        </div>
        

        
        
      </div>

      {/* INSERT LOGOS OF SPONSORS */}

      <div className="sponsors">
        <img src={sponsors} alt="sponsors" />

        {/* <img src={arise} alt="1" />
        <img src={phicent} alt="2" />
        <img src={year} alt="3" />
        <img src={paak} alt="4" />
        <img src={pipe} alt="5" />
        <img src={gether} alt="6" /> */}
      </div>

      <div className="extended-image">
        {/* INSERT IMAGE */}
        <img src={background_img} alt="background_image" />

      </div>

      <div className="third-section">
        <div className="third-section-head">
          <h4>What people say about Us</h4>
        </div>

        {/* INSERT MUI FOR CARDS */}
        <div className="paper-cards">
          <SimplePaper />
        </div>
        
      </div>

      <div className="fourth-section">
        <div className="fourth-section-p">
          <div className="fourth-section-head">
            <h4>Our Blog</h4>
          </div>

        

          <div className="fourth-section-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Sit curabitur nulla justo tellus amet</p>
          </div>
        </div>


        <div className="vector1">
          {/* INSERT VECTOR1 */}
          <img src={vector} alt="vector" />
          
        </div>

      </div>

      <div className="MUI-cards">
        <div className="cards">
          {/* INSERT CARDS */}
          
          <ActionAreaCard/>
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
  );
}

export default Home;
