import React, { useEffect, useRef } from "react";

const ARViewer = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;

    if (!sceneEl) {
      return;
    }

    const arSystem = sceneEl.systems["mindar-image-system"];

    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });

    return () => {
      arSystem.stop();
    };
  }, [sceneRef]);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: ./places/skiff/skiff.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img id="card" src="./places/skiff/skiff.png" />
        <a-asset-item
          id="avatarModel"
          src="./places/skiff/skiff.glb"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane
          src="#card"
          position="0 0 0"
          height="1"
          width="1"
          rotation="0 0 0"
        ></a-plane>

        <a-gltf-model
          rotation="0 0 0 "
          position="0 0 0"
          scale="2 2 2"
          src="#avatarModel"
          animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default ARViewer;
