import React from "react";
import ReactDOM from "react-dom";

import "./index.less";
// import '@assets/less/antd.customize.less';
// import '@assets/less/index.less';
import App from "./pages/App";
// import { AppProviders} from '@src/context'
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
// <AppProviders><App /></AppProviders>,

console.log("process.env.", process.env);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
