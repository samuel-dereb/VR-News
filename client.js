
import {ReactInstance, Location, Surface} from 'react-360-web';
import CustomRaycaster from "./src/controller/custom-raycaster";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
	fullScreen: true,
	...options,
  });

  const leftPanel = new Surface(1000, 600, Surface.SurfaceShape.Cylinder);

  r360.renderToSurface(
    r360.createRoot('Home', { /* initial props */ }),
    leftPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('Tatooine.jpg'));

  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(CustomRaycaster);
}

window.React360 = {init};
