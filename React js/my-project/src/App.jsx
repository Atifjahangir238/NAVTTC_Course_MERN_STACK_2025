import "./App.css";
// import Playlist from './components/Playlist'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    //   <div className="min-h-screen bg-gray-100 p-4">
    //   <Playlist />
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
