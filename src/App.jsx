import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Destinations from "./pages/Destinations";
import Join from "./pages/Join";
import Error from "./pages/Errorpage";
import Gallery from "./pages/Gallery";
import Loadingpage from "./components/Loadingpage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  return (
  <>
  {
    loading ? <Loadingpage /> : (
      <div className="App" data-scroll-container>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </div>
    )
  }
  </>
  );
}

export default App;
