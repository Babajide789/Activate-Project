import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home-page/Home'
import About from './pages/about/About'
import Faq from './pages/FAQ/Faq'
import Footer from './components/footer-folder/Footer'
import Events from './components/Event/Events'



const App =()=> {
  return (
    <div>
      <BrowserRouter>
          

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/events' element={<Events/>}/>
          </Routes>
          
        <Footer/> 
      </BrowserRouter>
     
    </div>
  )
}


export default App
