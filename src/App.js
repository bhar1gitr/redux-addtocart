import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarPanel from "./Components/NavBarPanel";
import Product from "./Components/Product";
import Card from "./Components/Card";

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Card></Card>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
