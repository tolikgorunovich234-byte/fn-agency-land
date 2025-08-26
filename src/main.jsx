import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css"; // ⬅️ временно отключим, чтобы исключить влияние стилей

console.log("BOOT: main.jsx loaded");

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>   // ⬅️ тоже временно уберём, чтобы исключить двойной монтёж
    <App />
  // </React.StrictMode>
);
