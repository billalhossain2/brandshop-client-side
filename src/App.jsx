import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContextProvider";
function App() {
  const {isDarkMode} = useContext(ThemeContext)
  console.log(isDarkMode)
  return (
    <div className={`${isDarkMode ? 'night-mode' : ''}`}>
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
