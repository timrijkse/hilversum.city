import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import ARViewer from "../../ar/ARViewer";

const Skiff = () => {
  return (
    <div>
      <ARViewer />
      <video></video>
    </div>
  );
};

export default Skiff;
