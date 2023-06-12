import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import HomeRes from "./components/HomeRes/HomeRes.jsx";
import Reserve from "./components/Reserve/Reserve.jsx";
import Orders from "./components/Orders/Orders.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ];
  const linksRestaurant = [
    { name: "Home", url: "/home" },
    { name: "Reserve", url: "/reserve" },
    { name: "Orders", url: "/orders" },
  ];
  return (
    <>
      <div>
        <BrowserRouter>
          <Header links={links} linksRes={linksRestaurant} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<HomeRes />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
