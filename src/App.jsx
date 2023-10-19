import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1140px] mx-auto px-2">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
