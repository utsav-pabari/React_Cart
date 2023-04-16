import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Product";
import WishList from "./components/WishList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
