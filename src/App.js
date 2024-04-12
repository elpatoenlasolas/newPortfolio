import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Music from './pages/Music/Music';
import Visual from './pages/Visual/Visual';
import Root from './pages/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> } />
    <Route path="portfolio" element={ <Portfolio /> } />
    <Route path="about" element={ <About/> } />
    <Route path="contact" element={ <Contact/> } />
    <Route path="music" element={ <Music/> } />
    <Route path="visual" element={ <Visual/> } />
  </Route>
))

function App() {

return (
    <RouterProvider router={appRouter}/> 
    );
}

export default App;