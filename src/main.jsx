// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The root element was not found in index.html");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
