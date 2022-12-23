import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/product/:id" element={<ProductScreen/>} />
            <Route path="/cart/:id?" element={<CartScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
