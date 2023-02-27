import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nabvar from "../components/navbar.jsx";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
const [api, setApi] = useState([])

  useEffect(()  => {

    const excelRequest = async () => {
      try{
        const response = await (await fetch("/api/test")).json()
        setApi(response)
      } catch(err) {  
        console.log("err-->",err);
      }
    }
  
    excelRequest()
 
}, [])

console.log("api -->", api);



  return (
    <>
      <Nabvar />
      <Component {...pageProps} />
    </>
  );
}
