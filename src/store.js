import { createStore, applyMiddleware, compose } from "redux";
import createHistory from 'history/createBrowserHistory';
import { reducers } from "./reducers/index";
import { routerMiddleware, push } from "react-router-redux";

const history = createHistory();

let middlewares = [];
middlewares.push(routerMiddleware(history));

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const preloadedState = window.__PRELOADED_STATE__;

// delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState || {}, middleware);

export { store, history };
