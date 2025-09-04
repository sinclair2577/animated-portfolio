
import "@google/model-viewer";
import { useRef } from "react";

const Model = () => {
  return (
    <model-viewer
      alt="before-concert-musical-instruments"
      src="/before_concert.glb"
      ar
      shadow-intensity="1"
      camera-controls
      style={{ width: "100%", height: "100%" }}
    ></model-viewer>
  );
};

export default Model;
