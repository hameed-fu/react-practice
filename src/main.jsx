import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App title="React Tuturials" num1={20} num2={30} content="React Code" />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
