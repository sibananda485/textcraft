import Navbar from "./Navbar";
import Text from "./Text";
import About from "./About";
import Alert from "./Alert";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mesg, setMesg] = useState("null");
  const [mode, setmode] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      setmode(localStorage.getItem("mode"));
      if (localStorage.getItem("mode") === "dark") {
        document.body.style.backgroundColor = "#000318";
        document.body.style.color = "white";
      }
    }
  }, []);

  const toggle = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000318";
      setAlert("success", "Light Mode Enabled");
      localStorage.setItem("mode", "light");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#000318";
      document.body.style.color = "white";
      setAlert("success", "Dark mode Enabled");
      localStorage.setItem("mode", "dark");
    }
  };

  const setAlert = (a1, b1) => {
    setMesg({
      a: a1,
      b: b1,
    });
    setTimeout(() => {
      setMesg("null");
    }, 1500);
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggle={toggle} />
        <Alert message={mesg} />
        <Routes>
          <Route exact path="/" element={<Text mode={mode} fun={setAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
