import React, { useState } from "react";
import "./ImageSearchForm.css";

const ImageSearchForm = (props) => {
  const [text, setText] = useState({ input: "" });

  const handleChange = (e) => {
    setText({ input: e.target.value });
  };

  return (
    <div className="center">
      <div className="form center">
        <input
          className="in-form"
          placeholder=" Enter image URL..."
          type="text"
          onChange={handleChange}
          value={text.input}
        />
        <button
          className="in-form"
          onClick={() => {
            props.onSubmit(text.input);
          }}
        >
          <b>Detect</b>
        </button>
      </div>
    </div>
  );
};

export default ImageSearchForm;
