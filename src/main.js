// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Can't use dotenv in vue. use config/dev.evn.js
//
// require("dotenv").load();
// const Dotenv = require("dotenv").config();
console.log(process.env.HOSTADRa);
//
let t21 = "t21. show use of .env... http://".concat(
  process.env.HOSTADR,
  ":3000/register"
);
console.log(t21);
console.log("The value for nodeenv is:", process.env.NODE_ENV);

import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
