// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Footer />
    </>
  );
}

export default App;
