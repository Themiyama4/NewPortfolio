import mainlogo from '../src/OIP.jpg';
import './App.css';
import NavBar from './compenents/Navbar';
import MyBody from './compenents/body';
import Name from './compenents/Name';
import Icons from './compenents/socialico';
import About from './Pages/About';
import MySkills from './Pages/skills';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Footer from './compenents/footer';
function App() {
  return (<>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/about' element={<About />}></Route>
    <Route path='/'      element={<div className='Maincontainer'>
                                  <div className='container1'>
                                  <Name Name="Themiya Madushanka" /> 
                                  <MyBody/>
                                  <Icons />
                                  </div><img data-aos="fade-up" data-aos-duration="1000" src={mainlogo} alt='logo'/></div>}></Route>
    <Route path='/skills' element={<MySkills/>}> </Route>
  </Routes>
  
  <Footer />
  </BrowserRouter> 



    
 </> );
}

export default App;
