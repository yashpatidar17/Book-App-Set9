import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./Index.css";
import {
  BookContext,
  BookContextProvider,
} from "./Context/BookContextProvider.jsx";

export {BookContext}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
