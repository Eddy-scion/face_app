import React, { useEffect, useRef, useState } from "react";
import "./ImageSearchForm.css";

const ImageSearchForm = (props) => {
  const [text, setText] = useState({ input: "" });

  const btnHold = (e) => {
    if (text.input.trim().length === 0) {
      e.preventDefault();
    }

    if (text.input.trim().length > 0) {
      {
        props.onSubmit(text.input);
        setText({ input: "" });
      }
    }
  };

  const handleChange = (e) => {
    setText({ input: e.target.value });
  };

  return (
    <div className="search-form">
      <div className="container">
        <input
          placeholder=" Enter image URL..."
          type="text"
          onChange={handleChange}
          value={text.input}
        />
        <button onClick={btnHold}>
          <b>Detect</b>
        </button>
      </div>
    </div>
  );
};

export default ImageSearchForm;
