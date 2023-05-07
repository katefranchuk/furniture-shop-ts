import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyles";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { ResponsiveProvider } from "./utils/responsive/ResponsiveContext";
import { theme } from "./components/styles";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ResponsiveProvider>
            <GlobalStyle />
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </ResponsiveProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
