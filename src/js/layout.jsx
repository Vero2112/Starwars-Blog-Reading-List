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
import LearnmorePersonaje from "./component/LearnmorePersonaje.jsx";
import LearnmorePlaneta from "./component/LearnmorePlaneta.jsx";
import LearnmoreStarship from "./component/LearnmoreStarship.jsx";
import Personajes from "./component/personajes.jsx";
import Planetas from "./component/planetas.jsx";
import Categorias from "./component/categorias.jsx";
import Construction from "./component/construction.jsx";
import Starship from "./component/starships.jsx";
import Vehicles from "./component/vehicles.jsx"
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
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters/:id" element={<LearnmorePersonaje/>}></Route>
            <Route path="/planets/:id" element={<LearnmorePlaneta/>}></Route>
            <Route path="/starships/:id" element={<LearnmoreStarship/>}></Route>
            <Route path="/vehicles" element={<Vehicles/>}></Route>
            <Route path="/learnmore" element={<Learnmore/>}></Route>
            <Route path="/characters" element={<Personajes/>}></Route>
            <Route path="/planets" element={<Planetas/>}></Route>
            <Route path="/categorias" element={<Categorias/>}></Route>
            <Route path="/construction" element={<Construction/>}></Route>
            <Route path="/starships" element={<Starship/>}></Route>
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="/single/:theid" element={<Single />}></Route>
            <Route element={<Notfound />}></Route>
          </Routes>
         
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
