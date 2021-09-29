import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import SimpleSlider from "./components/Slider/Slider";
import Modal from "./components/Modal/Modal";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {showModal ? <Modal close={setShowModal} showModal={showModal} /> : null}
      <SimpleSlider />
      <Header counter={counter} />
      <Banner />
      <Products
        counter={counter}
        setCounter={setCounter}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Footer />
    </div>
  );
};

export default App;
