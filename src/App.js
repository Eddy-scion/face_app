import React, { useState } from "react";
import ImageSearchForm from "./components/ImageSearchForm/ImageSearchForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const App = (props) => {
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState([]);

  const onSubmit = (url) => {
    setImageURL(url);
    const USER_ID = "eddy_scion";
    const PAT = "8046f1d396ce4ca4bb0a75bf531842ef";
    const APP_ID = "first-app";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = url;
    const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5"; //This is optional, you can specify a model or an empty string

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: url,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then(
        (result) => {
          const clarifaiFaces = result.outputs[0].data.regions;
          const arr = [];
          clarifaiFaces.forEach((item) =>
            arr.push(item.region_info.bounding_box)
          );
          setBox(arr);
        } /*console.log(result)*/
      )
      .catch((error) => console.log("Error", error));
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="app">
        <div className="container">
          <ImageSearchForm onSubmit={onSubmit} />
          <FaceRecognition src={imageURL} box={box} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
