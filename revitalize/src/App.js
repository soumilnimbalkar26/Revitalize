// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

function App() {
  return (
    <>
      <Navbar>
        <Screen1 />
      </Navbar>
      <Screen2 />
    </>
  );
}

export default App;
