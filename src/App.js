
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
      <NavBar/> 
      {/* <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>   */}
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Skill' element={<Skills/>}/>
        <Route path='/Projects'  element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
     </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
