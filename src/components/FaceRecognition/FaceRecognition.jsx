import React, { useLayoutEffect, useRef, useState } from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ src, box }) => {
  const ref = useRef();
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    setImgSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
  }, [box]);
  console.log(box);
  return (
    <div className="">
      <div className="face">
        <img src={src} ref={ref} />
        {box.map((item, index) => (
          <div
            className="bounding-box"
            style={{
              top: item.top_row * imgSize.height,
              right: imgSize.width - item.right_col * imgSize.width,
              bottom: imgSize.height - item.bottom_row * imgSize.height,
              left: item.left_col * imgSize.width,
            }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default FaceRecognition;
