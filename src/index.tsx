import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimationProvider } from "./context/Animation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </React.StrictMode>
);
