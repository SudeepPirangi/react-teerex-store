import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import ProductsContainer from "./pages/Products/ProductsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
