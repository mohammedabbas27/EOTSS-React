import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";

// eslint-disable-next-line no-undef
ReactDOM.render(<Router />, document.getElementById("root"));
unregister();
// registerServiceWorker();

document.addEventListener("DOMContentLoaded", function() {
  // window.onscroll = function() {
  //   myFunction();
  // };
  // // var navbar = document.querySelector(".ma__header__nav-container");
  // let header = document.querySelector(".ma__header__hamburger");
  // // let topBar = document.querySelector(".ma__header__utility-nav--wide");
  // // let blueBar = document.querySelector(".ma__utility-nav");
  // let sidebar = document.querySelector(".sidebar");
  // var sticky = header.offsetTop + 40;
  // function myFunction() {
  //   console.log("duh");
  //   if (window.pageYOffset >= sticky && window.innerWidth > 840) {
  //     // topBar.classList.add("topbar-hide");
  //     header.classList.add("sticky1");
  //     // header.classList.add("remove-padding");
  //     if (sidebar) {
  //       sidebar.classList.add("sidebar-margin");
  //     }
  //   } else {
  //     // topBar.classList.remove("topbar-hide");
  //     header.classList.remove("sticky1");
  //     // header.classList.remove("remove-padding");
  //     if (sidebar) {
  //       sidebar.classList.remove("sidebar-margin");
  //     }
  //   }
  // }
});
