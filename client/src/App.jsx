import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
