import React, { useState } from "react";

function TextForm({ heading, mode, showAlert }) {
  const handleUpClick = () => {
    // console.log("clicked " + text);
    const newText = text.toUpperCase();
    setText(newText);
    showAlert(": Converted to Upper Case", "success")
  };

  const handleLoClick = () => {
    // console.log("clicked " + text);
    const newText = text.toLowerCase();
    setText(newText);
    showAlert(": Converted to Lower Case", "success")
  };

  const handleClearClick = () => {
    // console.log("clicked " + text);
    const newText = "";
    setText(newText);
    showAlert(": Text cleared", "success")
  };


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };


  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert(": Copied the Text", "success")
  }

  const handleExtraSpaces = () => {

    let nexText = text.split(/[ ]+/);
    setText(nexText.join(" "));
    showAlert(": Removed the extra spaces", "success")
  }
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color : mode === "dark" ? "white" : "black"}}>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-4" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-4" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-4" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-4" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>
        Remove Spaces
      </button>
    </div>
    <div className="container my-3" style={{color : mode === "dark" ? "white" : "black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm;
