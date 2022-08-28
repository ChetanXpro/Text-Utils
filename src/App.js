import { useState } from "react";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import FormText from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#4a4c4e";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />

          <div className="container">
            <Routes>
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              ></Route>

              <Route
                exact
                path="/"
                element={
                  <FormText
                    mode={mode}
                    togglemode={togglemode}
                    heading="Enter the text to analyze"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
