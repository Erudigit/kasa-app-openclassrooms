import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import RealEstate from "../pages/RealEstate";
import NoPage from "../pages/NoPage";

/* React.routDom */

function App() { 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="real-estates/:estateId" element={<RealEstate />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
