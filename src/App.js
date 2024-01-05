
import './App.css';
// import Greet from './components/Greet';
// import ClassComponents from './components/ClassComponents';
// import PropsExample from './components/PropsExample';
// import StateExample from './components/StateExample';
import Navigation from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about"  element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="service" element={<Service />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
