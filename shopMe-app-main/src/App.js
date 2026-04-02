import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/common/ScrollToTop";


function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center" autoClose={2200} />
      <PageContainer>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
