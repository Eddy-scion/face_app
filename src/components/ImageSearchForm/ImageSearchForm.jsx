import React, { useState } from "react";
import "./ImageSearchForm.css";

const ImageSearchForm = (props) => {
  const [text, setText] = useState({ input: "" });

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
        <button
          onClick={() => {
            props.onSubmit(text.input);
            setText({ input: "" });
          }}
        >
          <b>Detect</b>
        </button>
      </div>
    </div>
  );
};

export default ImageSearchForm;
