import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Fade from "react-reveal/Fade";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Shared/Footer";
import Homepage from "./pages/Homepage";
import Messages from "./pages/Messages";
import NavBar from "./components/Shared/NavBar";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/Shared/ScrollToTop";
import { ToastContainer } from "react-toastify";
import WhatIDo from "./pages/WhatIDo.jsx";
import BuyMeACoffeeWidget from "./components/Shared/BuyMeCoffee.jsx";
import Submission from "./pages/Submission.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="mx-auto w-full bg-black p-2 md:w-full ">
        <ScrollToTop>
          <BuyMeACoffeeWidget />
          <Fade top>
            <NavBar />
          </Fade>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work" element={<WhatIDo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
