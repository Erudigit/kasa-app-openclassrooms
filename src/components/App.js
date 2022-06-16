import '../styles/App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import RealEstate from "../pages/RealEstate";
import RealEstates from "../pages/RealEstates";
import NoPage from "../pages/NoPage";

/* React.routDom */

function App() { 
  return (
  <Router>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="real_estates" element={<RealEstates />}>
        <Route path=":estateId" element={<RealEstate />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Router>
  );
}

export default App;
