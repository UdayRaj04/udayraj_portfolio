import React, { useState, useEffect } from 'react';
import Loader from './Component/Loader';
import Home from './Component/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Skill from './Component/Skill';
import About from './Component/About';
import { Canvas } from '@react-three/fiber';
import Project from './Component/Project';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading ? <Loader /> : <Home />} */}
      <BrowserRouter>
        <Routes>
        <Route path='/' element={loading ? <Loader /> : <Home/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route>
        <Route path='/education' element={<Home />}></Route>
        <Route path='/skills' element={ <Home/> }></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
