import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import React from "react";
// - import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// + import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import Learnmore from "./component/learnmore.jsx";
const Notfound = () => {
  return (
    <>
      {" "}
      <h1>Not found!</h1>{" "}
    </>
  );
};
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          {/* <Home/><Home/> */}
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/learnmore" element={<Learnmore/>}></Route> */}
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="/single/:theid" element={<Single />}></Route>
            <Route element={<Notfound />}></Route>
          </Routes>
          <Learnmore />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
