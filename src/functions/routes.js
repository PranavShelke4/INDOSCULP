import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Footer from "../components/Shared/Footer/footer";
import Header from "../components/Shared/Header/header";
import Agriculture from "../pages/Agriculture/Agriculture";
import PS25 from "../pages/PS25/PS25";
import Media from "../components/Shared/Social_Media_Bar/media";
import ContactBar from "../components/Shared/Social_Media_Bar/contactBar";
import InfoPage from "../pages/Info/Info";

const ConfigRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/blogs" element={<App />}></Route>
        <Route path="/contact" element={<App />}></Route>
        <Route path="/agriculture" element={<Agriculture />}></Route>
        <Route path="/PS25" element={<PS25 />}></Route>
        <Route path="/info" element={<InfoPage />}></Route>
      </Routes>
      <Media></Media>
      <ContactBar></ContactBar>
      <Footer />
    </>
  );
};

export default ConfigRoutes;
