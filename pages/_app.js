import { useEffect } from "react";
import AOS from 'aos';
import Nabvar from "../components/navbar.jsx";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
  <>
      <Nabvar />
      <Component {...pageProps} />
  </>
  );
}
