import { motion } from "framer-motion";
import "./Navbar.scss";
import SideBar from "../sidebar/SideBar";

function Navbar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Strox7
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100022610319803&mibextid=ZbWKwL">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/mostaffa_bh?igshid=NzZlODBkYWE4Ng==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/Strox7">
            <img src="/github2.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mostafa-bouhanout-4a2656298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
