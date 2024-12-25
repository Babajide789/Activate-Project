import "./Adminnav.css"

import NotificationsIcon from '@mui/icons-material/Notifications';

import circleImg from "../../assets/images/Rectangleimg.png"





const Adminnav = () => {
  return (
    <>

        <div className="nav-panel">
            <div className="nav-logo">
                <p>The</p>
                <p className='next'>Next Gen</p>
                <p className='show'>SHOW</p>
            </div>

            
            
            <div className='image'>

              <div className='notif'>
                <NotificationsIcon/>
              </div>

              <img src={circleImg} alt="img" />

              <p>Admin Boss</p>
            </div>

        </div>
            
       


    </>
  )
}

export default Adminnav
