import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nabvar from "../components/navbar.jsx";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nabvar />
      <Component {...pageProps} />
    </>
  );
}