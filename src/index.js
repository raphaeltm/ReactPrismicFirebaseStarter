import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/wrapper";
import {Provider} from "react-redux";
import {store, history} from "./store";
import "./main.scss";
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router";
import {loadSettings} from "../common/prismic";

loadSettings(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={'/'} render={() => {
          return <Wrapper match={{params: {type: 'homepage'}}}/>
        }}/>
        <Route exact path={'/:type'} component={Wrapper}/>
        <Route exact path={'/:type/:uid'} component={Wrapper}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);