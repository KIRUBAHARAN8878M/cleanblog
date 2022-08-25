import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './Portal';
import MainComponent from './MainComponent';
import LinkData from './LinkData';
import About from './About';
import Contact from './Contact';
import Post from './Post';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portal />}>
            <Route index element={<MainComponent />} />
            <Route path=':id' element={<LinkData />} />
            <Route path='about' element={<About />} />
            <Route path='post' element={<Post />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
