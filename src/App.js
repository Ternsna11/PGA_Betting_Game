import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/home/Home";
import NavBar from "./Routes/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
