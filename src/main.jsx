import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // Импортируем App
import "./index.css";          // Подключаем стили

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />   {/* Рендерим App */}
  </React.StrictMode>
);
