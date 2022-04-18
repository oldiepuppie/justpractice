import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const container = document.getElementById("root");
const root = createRoot(container);
const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxThunk.withExtraArgument({ history: customHistory }),
    logger
  )
);

root.render(
  <BrowserRouter history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
