import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-assets": any;
      "a-asset-item": any;
      "a-camera": any;
      "a-entity": any;
      "a-gltf-model": any;
      "a-plane": any;
      "a-scene": any;
    }
  }
}
