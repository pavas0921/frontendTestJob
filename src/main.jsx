import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App.jsx";
import styles from "./index.module.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider className={styles.div_root} store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
