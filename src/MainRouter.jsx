import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Projects from './Projects';

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
        </Routes>
      </Layout>
    </>
  );
}; 
export default MainRouter;