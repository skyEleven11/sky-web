import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nabvar from "../components/navbar.jsx";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
const [api, setApi] = useState([])

  useEffect(()  => {
    fetch("/api/test")
    .then((response) => response.json())  
    .then((dog) => console.log("datos-->", dog));
 
}, [])





  return (
    <>
      <Nabvar />
      <Component {...pageProps} />
    </>
  );
}
