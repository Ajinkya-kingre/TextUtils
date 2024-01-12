import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(": Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode enabled", "success");
    }
  };

  return (
    <div className="App">
      {/* <BrowserRouter > */}
      <NavBar title="textUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm 
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to analyze "
          mode={mode}
        />
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
