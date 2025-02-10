import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorite from "./pages/Favorite";


function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" position="top-center"/>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} /> 
          </Routes>
          <Footer />
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
