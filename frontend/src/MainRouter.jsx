import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Login from './components/Login';

const MainRouter = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} /> 
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}; 
export default MainRouter;