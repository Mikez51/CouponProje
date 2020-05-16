function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <!-- Highlight Card -->\n  <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div>\n\n  <!-- Resources -->\n  <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div>\n\n  <!-- Next Steps -->\n  <h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div>\n\n  <!-- Terminal -->\n  <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div>\n\n  <!-- Links -->\n  <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n\n  <!-- Footer -->\n  <footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer>\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div>\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    \n\n\n</style>\n\n\n<table>\n\n<td>\n    Company <br/>\n    <a routerLink=\"/addcomp\">Add company</a> <br />\n      <a routerLink=\"/updatecomp\">Update Company</a> <br />\n    <a routerLink=\"/deletecomp\">Delete Company</a> <br />\n    <a routerLink=\"/allcompanies\">Get All Companies</a> <br />\n    <a routerLink=\"/getOneCompany\">Get One Company </a><br />\n\n</td>\n\n<td>\n    Customers<br/>\n      <a routerLink=\"/addcustomer\">Add New Costomer</a> <br />\n    <a routerLink=\"/updatecustomer\">Update customer</a> <br />\n    <a routerLink=\"/deletecustomer\">Delete customer</a> <br />\n    <a routerLink=\"/allcustomers\">Get all customers</a> <br />\n    <a routerLink=\"/customer\">Get One customer</a> <br />\n  \n</td>\n\n\n\n  \n  \n\n</table>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCompanyMethodesAddCompanyAddCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n  </style>\n  <body>\n    <div>\n        <div>\n           add a new company\n        <br>\n            <input type=\"name\" placeholder=\"name\" [(ngModel)]=\"company.name\">\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"company.email\">\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"company.password\">\n            <button (click)=\"addCompany()\">add company</button>\n        </div>\n    </div>\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCompanyMethodesDeleteCompanyDeleteCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<body>\n    \n        <div>\n            delete company <br>\n            <div>\n                <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"company.id\">\n                <input type=\"button\" value=\"Delete\" (click)=\"deleteCompany()\">\n            </div>\n        </div>\n    \n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCompanyMethodesGetAllCompaniesGetAllCompaniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<table>\n    <tr>\n        <td>id</td>\n        <td>email</td>\n        <td>name</td>\n        <td>password</td>\n    </tr>\n    <tr *ngFor=\"let c of companies\">\n        <td>\n            {{c.id}}\n        </td>\n        <td>\n            {{c.email}}\n        </td>\n        <td>\n            {{c.name}}\n        </td>\n        <td>\n            {{c.password}}\n        </td>\n    </tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCompanyMethodesGetOneCompanyGetOneCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"box\">\n\n    <h2>Pick Company By ID:</h2>\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"company.id\"><br />\n    <button (click)=\"getOneCompany()\">Get Company by Id</button>\n\n    <p *ngIf=\"company.id\">\n        <span>{{company.id}} : {{company.name}} , {{company.email}} , Password - {{company.password}}</span>\n    </p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCompanyMethodesUpdateCompanyUpdateCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <body>\n    <div>\n        <div>\nUpdate a company\n        <br>\n\n        <input type=\"id\" placeholder=\"id\" [(ngModel)]=\"company.id\">\n            <input type=\"text\" placeholder=\"name\" [(ngModel)]=\"company.name\">\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"company.email\">\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"company.password\">\n            <button (click)=\"updateCompany()\">update company</button>\n        </div>\n    </div>\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCustomerMethodesAddCustomerAddCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h3>add new Customer:</h3>\n<input type=\"text\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\"><br />\n<input type=\"text\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\"><br />\n<input type=\"email\" placeholder=\"email\" [(ngModel)]=\"customer.email\"><br />\n<input type=\"password\" placeholder=\"password\" [(ngModel)]=\"customer.password\"><br />\n<input type=\"button\" value=\"AddCustomer\" (click)=\"addCustomer()\" />\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCustomerMethodesDeleteCustomerDeleteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n    <h3>Delete Customer:</h3>\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"customer.id\"><br />\n    <input type=\"button\" value=\"delete\" (click)=\"deleteCustomer()\"/>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCustomerMethodesGetAllCustomersGetAllCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<table>\n    <tr>\n        <td>id</td>\n        <td>firstName</td>\n        <td>lastName</td>\n        <td>email</td>\n        <td>Password</td>\n    </tr>\n    <tr *ngFor=\"let c of customers\">\n        <td>\n            {{c.id}}\n        </td>\n        <td>\n            {{c.firstName}}\n        </td>\n        <td>\n            {{c.lastName}}\n        </td>\n        <td>\n            {{c.email}}\n        </td>\n        <td>\n            {{c.password}}\n        </td>\n    </tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCustomerMethodesGetOneCustomerGetOneCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n    <h2>Pick Customer By ID:</h2>\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"customer.id\"><br />\n    <button (click)=\"getOneCustomer()\">Get Customer by Id</button>\n\n    <p *ngIf=\"customer.id\">\n        <span>{{customer.id}} : {{customer.firstName}} {{customer.lastName}} , {{customer.email}} , Password - {{customer.password}}</span>\n    </p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminMethodesCustomerMethodesUpdateCustomerUpdateCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n\n    <h3>Update Customer:</h3><br /><br />\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"customer.id\"><br />\n    <input type=\"text\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\"><br />\n    <input type=\"text\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\"><br />\n    <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"customer.email\"><br />\n    <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"customer.password\"><br />\n    <input type=\"button\" value=\"update\" (click)=\"updateCustomer()\" />\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n\n\n    <table>\n\n        <td>  \n              <a routerLink=\"/addcoupon\">Add Coupon</a>\n\n        </td>\n        \n        <td>  \n              <a routerLink=\"/updatecoupon\">     Update Coupon</a>\n\n        </td>\n        \n        <td>\n<a routerLink=\"/couponsbyprice\">    get coupons by price</a>\n\n        </td>\n        \n          \n          \n        \n        </table>\n        <span> Company details</span> <br>\n<span>{{company.id}} , {{company.name}} , {{company.email}} , {{company.password}} </span>\n        \n</section>\n  <body>\n    <app-companycoupons></app-companycoupons>\n  </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/addcoupon/addcoupon.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/addcoupon/addcoupon.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesAddcouponAddcouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n        <h3>add new Coupon:</h3>\n        <select [(ngModel)]=\"coupon.categoryType\">\n            <option>Travel</option>\n            <option>Electronics</option>\n            <option>Food</option>\n        </select> <br />\n        <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\"><br />\n        <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\"><br />\n        <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\"><br />\n        <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\"><br />\n        <input type=\"number\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\"> <br />\n        <input type=\"number\" placeholder=\"price\" [(ngModel)]=\"coupon.price\"> <br />\n        <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\"><br />\n    \n        <input type=\"button\" value=\"add\" (click)=\"addNewCoupon()\" />\n    \n    \n    \n    \n    \n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companycoupons/companycoupons.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companycoupons/companycoupons.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesCompanycouponsCompanycouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <table>\n        <tr>\n            <td>id</td>\n            <td>title</td>\n            <td>image</td>\n            <td>description</td>\n            <td>category</td>\n            <td>amount</td>\n            <td>start date</td>\n            <td>end date</td>\n            <td>price</td>\n\n\n        </tr>\n        <tr *ngFor=\"let c of coupons\">\n            <td>\n                {{c.id}}\n            </td>\n            <td>\n                {{c.title}}\n            </td>\n            <td>\n                {{c.image}}\n            </td>\n            <td>\n                {{c.description}}\n            </td>\n            <td>\n                {{c.categoryType}}\n            </td>\n            <td>\n                {{c.amount}}\n            </td>\n            <td>\n                {{c.startDate}}\n            </td>\n            <td>\n                {{c.endDate}}\n            </td>\n            <td>\n                {{c.price}}\n            </td>\n        </tr>\n    </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companydetails/companydetails.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companydetails/companydetails.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesCompanydetailsCompanydetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>companydetails works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesCouponsbycategoryCouponsbycategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>couponsbycategory works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesCouponsbyprceCouponsbyprceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"number\" placeholder=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n<button (click)=\"getCompanyCouponsByPrice()\">Enter</button>\n\n    <table>\n        <tr>\n            <td>id</td>\n            <td>title</td>\n            <td>image</td>\n            <td>description</td>\n            <td>category</td>\n            <td>amount</td>\n            <td>start date</td>\n            <td>end date</td>\n            <td>price</td>\n\n\n        </tr>\n        <tr *ngFor=\"let c of coupons\">\n            <td>\n                {{c.id}}\n            </td>\n            <td>\n                {{c.title}}\n            </td>\n            <td>\n                {{c.image}}\n            </td>\n            <td>\n                {{c.description}}\n            </td>\n            <td>\n                {{c.categoryType}}\n            </td>\n            <td>\n                {{c.amount}}\n            </td>\n            <td>\n                {{c.startDate}}\n            </td>\n            <td>\n                {{c.endDate}}\n            </td>\n            <td>\n                {{c.price}}\n            </td>\n        </tr>\n    </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesDeletecouponDeletecouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>deletecoupon works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompanyMethodesUpdatecouponUpdatecouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    \n    <h3>Update Coupon:</h3>\n    <input type=\"number\" placeholder=\"id\" [(ngModel)]=\"coupon.id\" ><br />\n    <select [(ngModel)]=\"coupon.categoryType\">\n        <option>Travel</option>\n        <option>Electronics</option>\n        <option>Food</option>\n    \n    </select> <br />\n    <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\"><br />\n    <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\"><br />\n    <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\"><br />\n    <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\"><br />\n    <input type=\"number\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\"> <br />\n    <input type=\"number\" placeholder=\"price\" [(ngModel)]=\"coupon.price\"> <br />\n    <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\"><br />\n    \n    <input type=\"button\" value=\"Update\" (click)=\"updateCoupon()\" />\n    \n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<table>\n\n    <td>\n        <a routerLink=\"/customercoupons\">My coupons </a><br />\n    </td>\n    \n    <td>\n        <a routerLink=\"/customercouponsbyprice\">     All coupons by price</a> <br /> \n    </td>\n    \n    <td>\n        <a routerLink=\"/customerpurchase\">      Purchase coupon</a> <br /> \n    </td>\n    <td>\n        <a routerLink=\"/deletepurchasedcoupon\">     Delete coupon purchase</a> <br /> \n    </td>\n    \n    \n      \n      \n    \n    </table>\n<span>Customer details</span><br>\n<span>{{customer.id}} : {{customer.firstName}} {{customer.lastName}} , Email - {{customer.email}} , Password - {{customer.password}}</span>\n<body>\n\n\n<app-all-coupons></app-all-coupons>\n\n\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/all-coupons/all-coupons.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/all-coupons/all-coupons.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesAllCouponsAllCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <table>\n        <tr>\n            <td>id</td>\n            <td>title</td>\n            <td>image</td>\n            <td>description</td>\n            <td>category</td>\n            <td>amount</td>\n            <td>start date</td>\n            <td>end date</td>\n            <td>price</td>\n\n\n        </tr>\n        <tr *ngFor=\"let c of coupons\">\n            <td>\n                {{c.id}}\n            </td>\n            <td >\n                {{c.title}} \n            </td>\n            <td  >\n                {{c.image}}\n            </td>\n            <td>\n                {{c.description}}\n            </td>\n            <td >\n                {{c.categoryType}}\n            </td>\n            <td  >\n                {{c.amount}}\n            </td>\n            <td >\n                {{c.startDate}}\n            </td>\n            <td  >\n                {{c.endDate}}\n            </td>\n            <td >\n                {{c.price}}\n            </td>\n        </tr>\n    </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesCustomerCouponsByPriceCustomerCouponsByPriceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"number\" placeholder=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n<button (click)=\"getCustomerCouponsByPrice()\">Enter</button>\n<table>\n    <tr>\n        <td>id</td>\n        <td>title</td>\n        <td>image</td>\n        <td>description</td>\n        <td>category</td>\n        <td>amount</td>\n        <td>start date</td>\n        <td>end date</td>\n        <td>price</td>\n\n\n    </tr>\n    <tr *ngFor=\"let c of coupons\">\n        <td>\n            {{c.id}}\n        </td>\n        <td>\n            {{c.title}}\n        </td>\n        <td>\n            {{c.image}}\n        </td>\n        <td>\n            {{c.description}}\n        </td>\n        <td>\n            {{c.categoryType}}\n        </td>\n        <td>\n            {{c.amount}}\n        </td>\n        <td>\n            {{c.startDate}}\n        </td>\n        <td>\n            {{c.endDate}}\n        </td>\n        <td>\n            {{c.price}}\n        </td>\n    </tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesCustomerCouponsCustomerCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<table>\n    <tr>\n        <td>id</td>\n        <td>title</td>\n        <td>image</td>\n        <td>description</td>\n        <td>category</td>\n        <td>amount</td>\n        <td>start date</td>\n        <td>end date</td>\n        <td>price</td>\n\n\n    </tr>\n    <tr *ngFor=\"let c of coupons\">\n        <td>\n            {{c.id}}\n        </td>\n        <td>\n            {{c.title}}\n        </td>\n        <td>\n            {{c.image}}\n        </td>\n        <td>\n            {{c.description}}\n        </td>\n        <td>\n            {{c.categoryType}}\n        </td>\n        <td>\n            {{c.amount}}\n        </td>\n        <td>\n            {{c.startDate}}\n        </td>\n        <td>\n            {{c.endDate}}\n        </td>\n        <td>\n            {{c.price}}\n        </td>\n    </tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-details/customer-details.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-details/customer-details.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesCustomerDetailsCustomerDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <p>\n        <span>{{customer.id}} : {{customer.firstName}} {{customer.lastName}} , Email - {{customer.email}} , Password - {{customer.password}}</span>\n    </p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesDeleteCouponPurchaseDeleteCouponPurchaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "Delete coupon purchase\n\n\n<input type=\"button\" value=\"Delete\"(click)=\"deleteCouponPurchase(coupon)\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerMethodesPurchaseCouponPurchaseCouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <table>\n        <tr>\n            <td></td>\n            <td>title</td>\n            <td>image</td>\n            <td>description</td>\n            <td>category</td>\n            <td>start date</td>\n            <td>end date</td>\n            <td>price</td>\n\n\n        </tr>\n        <tr *ngFor=\"let c of coupons\">\n            <td>\n                <input type=\"button\" value=\"Buy\" (click)=\"purchaseCoupon(c)\">\n            </td>\n\n            \n            <td >\n                {{c.title}} \n            </td>\n            <td   >\n                {{c.image}}\n            </td>\n            <td >\n                {{c.description}}\n            </td>\n            <td >\n                {{c.categoryType}}\n            </td>\n            <td  >\n                {{c.startDate}}\n            </td>\n            <td >\n                {{c.endDate}}\n            </td>\n            <td >\n                {{c.price}}\n            </td>\n        </tr>\n    </table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n    body, html {\n      height: 100%;\n      text-align: center;\n\n    }\n </style>\n <body>\n All rights reserved Mike\n\n\n </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n    body, html {\n      height: 100%;\n    }\n </style>\n <body>\n   <div>\n     Coupons and us!    \n   </div>\n </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    body, html {\n      height: 100%;\n    }\n </style>\n <body>\n    <div>\n      Welcom to Coupons&Us your place for the best coupons online!\n    </div>\n    <div>\n      please login to procced or contact us following the info below\n    </div>\n </body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n    <header>\n        <app-header> </app-header>\n    </header>\n    <nav>\n        <app-navigation></app-navigation>\n    </nav>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n    <footer>\n        <app-footer></app-footer>\n    </footer>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <input type=\"text\" placeholder=\"email\" [(ngModel)]=\"email\" /><br/>\n    <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" /><br/>\n    <select  [(ngModel)]=\"type\">\n        <option>Admin</option>\n        <option>Company</option>\n        <option>Customer</option>\n    </select><br/>\n    <input type=\"button\" value=\"LOGIN\" (click)=\"login()\" />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    body,\n    html {\n      height: 100%;\n    }\n  </style>\n  \n  <body>\n    <div >\n      <br />\n      <button routerLink=\"home\">home</button>\n      <br />\n      <button routerLink=\"login\">Login</button>\n      <br />\n      <button routerLink=\"logout\">logout</button>\n      <br />\n    </div>\n  </body>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/add-company/add-company.component */
    "./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/update-company/update-company.component */
    "./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/delete-company/delete-company.component */
    "./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component */
    "./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/get-one-company/get-one-company.component */
    "./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/add-customer/add-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/delete-customer/delete-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/update-customer/update-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component */
    "./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.ts");
    /* harmony import */


    var _components_companyMethodes_couponsbycategory_couponsbycategory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/companyMethodes/couponsbycategory/couponsbycategory.component */
    "./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.ts");
    /* harmony import */


    var _components_companyMethodes_couponsbyprce_couponsbyprce_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/companyMethodes/couponsbyprce/couponsbyprce.component */
    "./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.ts");
    /* harmony import */


    var _components_companyMethodes_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/companyMethodes/companydetails/companydetails.component */
    "./src/app/components/companyMethodes/companydetails/companydetails.component.ts");
    /* harmony import */


    var _components_companyMethodes_companycoupons_companycoupons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/companyMethodes/companycoupons/companycoupons.component */
    "./src/app/components/companyMethodes/companycoupons/companycoupons.component.ts");
    /* harmony import */


    var _components_companyMethodes_deletecoupon_deletecoupon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/companyMethodes/deletecoupon/deletecoupon.component */
    "./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.ts");
    /* harmony import */


    var _components_companyMethodes_updatecoupon_updatecoupon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/companyMethodes/updatecoupon/updatecoupon.component */
    "./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.ts");
    /* harmony import */


    var _components_companyMethodes_addcoupon_addcoupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/companyMethodes/addcoupon/addcoupon.component */
    "./src/app/components/companyMethodes/addcoupon/addcoupon.component.ts");
    /* harmony import */


    var _components_company_company_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/company/company.component */
    "./src/app/components/company/company.component.ts");
    /* harmony import */


    var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/customer/customer.component */
    "./src/app/components/customer/customer.component.ts");
    /* harmony import */


    var _components_customerMethodes_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/customerMethodes/purchase-coupon/purchase-coupon.component */
    "./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.ts");
    /* harmony import */


    var _components_customerMethodes_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/customerMethodes/all-coupons/all-coupons.component */
    "./src/app/components/customerMethodes/all-coupons/all-coupons.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_coupons_customer_coupons_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-coupons/customer-coupons.component */
    "./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component */
    "./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-details/customer-details.component */
    "./src/app/components/customerMethodes/customer-details/customer-details.component.ts");
    /* harmony import */


    var _components_customerMethodes_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component */
    "./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.ts");

    var routes = [{
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "admin",
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: "addcomp",
      component: _components_adminMethodes_companyMethodes_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"]
    }, {
      path: "updatecomp",
      component: _components_adminMethodes_companyMethodes_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyComponent"]
    }, {
      path: "deletecomp",
      component: _components_adminMethodes_companyMethodes_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_8__["DeleteCompanyComponent"]
    }, {
      path: "allcompanies",
      component: _components_adminMethodes_companyMethodes_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__["GetAllCompaniesComponent"]
    }, {
      path: "getOneCompany",
      component: _components_adminMethodes_companyMethodes_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_10__["GetOneCompanyComponent"]
    }, {
      path: "addcustomer",
      component: _components_adminMethodes_customerMethodes_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__["AddCustomerComponent"]
    }, {
      path: "deletecustomer",
      component: _components_adminMethodes_customerMethodes_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__["DeleteCustomerComponent"]
    }, {
      path: "updatecustomer",
      component: _components_adminMethodes_customerMethodes_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCustomerComponent"]
    }, {
      path: "allcustomers",
      component: _components_adminMethodes_customerMethodes_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_14__["GetAllCustomersComponent"]
    }, {
      path: "getonecustomer",
      component: _components_adminMethodes_customerMethodes_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_15__["GetOneCustomerComponent"]
    }, {
      path: "addcoupon",
      component: _components_companyMethodes_addcoupon_addcoupon_component__WEBPACK_IMPORTED_MODULE_22__["AddcouponComponent"]
    }, {
      path: "updatecoupon",
      component: _components_companyMethodes_updatecoupon_updatecoupon_component__WEBPACK_IMPORTED_MODULE_21__["UpdatecouponComponent"]
    }, {
      path: "deletecoupon",
      component: _components_companyMethodes_deletecoupon_deletecoupon_component__WEBPACK_IMPORTED_MODULE_20__["DeletecouponComponent"]
    }, {
      path: "companyCoupons",
      component: _components_companyMethodes_companycoupons_companycoupons_component__WEBPACK_IMPORTED_MODULE_19__["CompanycouponsComponent"]
    }, {
      path: "couponsbycategory",
      component: _components_companyMethodes_couponsbycategory_couponsbycategory_component__WEBPACK_IMPORTED_MODULE_16__["CouponsbycategoryComponent"]
    }, {
      path: "couponsbyprice",
      component: _components_companyMethodes_couponsbyprce_couponsbyprce_component__WEBPACK_IMPORTED_MODULE_17__["CouponsbyprceComponent"]
    }, {
      path: "companydetails",
      component: _components_companyMethodes_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_18__["CompanydetailsComponent"]
    }, {
      path: "company",
      component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_23__["CompanyComponent"]
    }, {
      path: "customer",
      component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_24__["CustomerComponent"]
    }, {
      path: "customerpurchase",
      component: _components_customerMethodes_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_25__["PurchaseCouponComponent"]
    }, {
      path: "allcoupons",
      component: _components_customerMethodes_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_26__["AllCouponsComponent"]
    }, {
      path: "customercoupons",
      component: _components_customerMethodes_customer_coupons_customer_coupons_component__WEBPACK_IMPORTED_MODULE_27__["CustomerCouponsComponent"]
    }, {
      path: "customercouponsbyprice",
      component: _components_customerMethodes_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_28__["CustomerCouponsByPriceComponent"]
    }, {
      path: "customerdetails",
      component: _components_customerMethodes_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_29__["CustomerDetailsComponent"]
    }, {
      path: "deletepurchasedcoupon",
      component: _components_customerMethodes_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCouponPurchaseComponent"]
    }, {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angularphase3';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/components/layout/layout.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/add-company/add-company.component */
    "./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/update-company/update-company.component */
    "./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/delete-company/delete-company.component */
    "./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/get-one-company/get-one-company.component */
    "./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.ts");
    /* harmony import */


    var _components_adminMethodes_companyMethodes_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component */
    "./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/add-customer/add-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/update-customer/update-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/delete-customer/delete-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component */
    "./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.ts");
    /* harmony import */


    var _components_adminMethodes_customerMethodes_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component */
    "./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.ts");
    /* harmony import */


    var _components_company_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/company/company.component */
    "./src/app/components/company/company.component.ts");
    /* harmony import */


    var _components_companyMethodes_addcoupon_addcoupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/companyMethodes/addcoupon/addcoupon.component */
    "./src/app/components/companyMethodes/addcoupon/addcoupon.component.ts");
    /* harmony import */


    var _components_companyMethodes_updatecoupon_updatecoupon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/companyMethodes/updatecoupon/updatecoupon.component */
    "./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.ts");
    /* harmony import */


    var _components_companyMethodes_deletecoupon_deletecoupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/companyMethodes/deletecoupon/deletecoupon.component */
    "./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.ts");
    /* harmony import */


    var _components_companyMethodes_companycoupons_companycoupons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/companyMethodes/companycoupons/companycoupons.component */
    "./src/app/components/companyMethodes/companycoupons/companycoupons.component.ts");
    /* harmony import */


    var _components_companyMethodes_couponsbycategory_couponsbycategory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/companyMethodes/couponsbycategory/couponsbycategory.component */
    "./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.ts");
    /* harmony import */


    var _components_companyMethodes_couponsbyprce_couponsbyprce_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/companyMethodes/couponsbyprce/couponsbyprce.component */
    "./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.ts");
    /* harmony import */


    var _components_companyMethodes_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/companyMethodes/companydetails/companydetails.component */
    "./src/app/components/companyMethodes/companydetails/companydetails.component.ts");
    /* harmony import */


    var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/customer/customer.component */
    "./src/app/components/customer/customer.component.ts");
    /* harmony import */


    var _components_customerMethodes_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/customerMethodes/purchase-coupon/purchase-coupon.component */
    "./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_coupons_customer_coupons_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-coupons/customer-coupons.component */
    "./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component */
    "./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.ts");
    /* harmony import */


    var _components_customerMethodes_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/customerMethodes/customer-details/customer-details.component */
    "./src/app/components/customerMethodes/customer-details/customer-details.component.ts");
    /* harmony import */


    var _components_customerMethodes_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component */
    "./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.ts");
    /* harmony import */


    var _components_customerMethodes_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/customerMethodes/all-coupons/all-coupons.component */
    "./src/app/components/customerMethodes/all-coupons/all-coupons.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_adminMethodes_companyMethodes_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__["AddCompanyComponent"], _components_adminMethodes_companyMethodes_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCompanyComponent"], _components_adminMethodes_companyMethodes_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCompanyComponent"], _components_adminMethodes_companyMethodes_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__["GetOneCompanyComponent"], _components_adminMethodes_companyMethodes_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__["GetAllCompaniesComponent"], _components_adminMethodes_customerMethodes_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_19__["AddCustomerComponent"], _components_adminMethodes_customerMethodes_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_20__["UpdateCustomerComponent"], _components_adminMethodes_customerMethodes_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_21__["DeleteCustomerComponent"], _components_adminMethodes_customerMethodes_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_22__["GetOneCustomerComponent"], _components_adminMethodes_customerMethodes_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_23__["GetAllCustomersComponent"], _components_company_company_component__WEBPACK_IMPORTED_MODULE_24__["CompanyComponent"], _components_companyMethodes_addcoupon_addcoupon_component__WEBPACK_IMPORTED_MODULE_25__["AddcouponComponent"], _components_companyMethodes_updatecoupon_updatecoupon_component__WEBPACK_IMPORTED_MODULE_26__["UpdatecouponComponent"], _components_companyMethodes_deletecoupon_deletecoupon_component__WEBPACK_IMPORTED_MODULE_27__["DeletecouponComponent"], _components_companyMethodes_companycoupons_companycoupons_component__WEBPACK_IMPORTED_MODULE_28__["CompanycouponsComponent"], _components_companyMethodes_couponsbycategory_couponsbycategory_component__WEBPACK_IMPORTED_MODULE_29__["CouponsbycategoryComponent"], _components_companyMethodes_couponsbyprce_couponsbyprce_component__WEBPACK_IMPORTED_MODULE_30__["CouponsbyprceComponent"], _components_companyMethodes_companydetails_companydetails_component__WEBPACK_IMPORTED_MODULE_31__["CompanydetailsComponent"], _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerComponent"], _components_customerMethodes_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_33__["PurchaseCouponComponent"], _components_customerMethodes_customer_coupons_customer_coupons_component__WEBPACK_IMPORTED_MODULE_34__["CustomerCouponsComponent"], _components_customerMethodes_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_35__["CustomerCouponsByPriceComponent"], _components_customerMethodes_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_36__["CustomerDetailsComponent"], _components_customerMethodes_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_37__["DeleteCouponPurchaseComponent"], _components_customerMethodes_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_38__["AllCouponsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [],
      bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/admin/admin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/components/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesAddCompanyAddCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jb21wYW55TWV0aG9kZXMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: AddCompanyComponent */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesAddCompanyAddCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
      return AddCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/company/company.module */
    "./src/app/modules/company/company.module.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var AddCompanyComponent =
    /*#__PURE__*/
    function () {
      function AddCompanyComponent(myAdminService) {
        _classCallCheck(this, AddCompanyComponent);

        this.myAdminService = myAdminService;
        this.company = new src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__["Company"]();
      }

      _createClass(AddCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCompany",
        value: function addCompany() {
          this.myAdminService.addCompany(this.company).subscribe(function (Response) {
            alert("company added");
          });
        }
      }]);

      return AddCompanyComponent;
    }();

    AddCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }];
    };

    AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-company.component.css */
      "./src/app/components/adminMethodes/companyMethodes/add-company/add-company.component.css")).default]
    })], AddCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesDeleteCompanyDeleteCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jb21wYW55TWV0aG9kZXMvZGVsZXRlLWNvbXBhbnkvZGVsZXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: DeleteCompanyComponent */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesDeleteCompanyDeleteCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function () {
      return DeleteCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/company/company.module */
    "./src/app/modules/company/company.module.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var DeleteCompanyComponent =
    /*#__PURE__*/
    function () {
      function DeleteCompanyComponent(client) {
        _classCallCheck(this, DeleteCompanyComponent);

        this.client = client;
        this.company = new src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__["Company"]();
      }

      _createClass(DeleteCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteCompany",
        value: function deleteCompany() {
          this.client.deleteCompany(this.company.id).subscribe(function (Response) {
            alert("company deleted");
          });
        }
      }]);

      return DeleteCompanyComponent;
    }();

    DeleteCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }];
    };

    DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-company.component.css */
      "./src/app/components/adminMethodes/companyMethodes/delete-company/delete-company.component.css")).default]
    })], DeleteCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.css":
  /*!************************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.css ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesGetAllCompaniesGetAllCompaniesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td{\r\n    border: solid black 1px;\r\n    text-align: center;\r\n    margin: 8px ;\r\n    padding: 10px;\r\n\r\n}\r\ntable{\r\n    width: 450px;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n    margin-bottom: 25%;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbk1ldGhvZGVzL2NvbXBhbnlNZXRob2Rlcy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTs7QUFFakI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbk1ldGhvZGVzL2NvbXBhbnlNZXRob2Rlcy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHB4IDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjUlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: GetAllCompaniesComponent */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesGetAllCompaniesGetAllCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function () {
      return GetAllCompaniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var GetAllCompaniesComponent =
    /*#__PURE__*/
    function () {
      function GetAllCompaniesComponent(client) {
        _classCallCheck(this, GetAllCompaniesComponent);

        this.client = client;
        this.companies = new Array();
      }

      _createClass(GetAllCompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.client.getAllCompanies().subscribe(function (companies) {
            _this.companies = companies;
          });
        }
      }]);

      return GetAllCompaniesComponent;
    }();

    GetAllCompaniesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-all-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-all-companies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-all-companies.component.css */
      "./src/app/components/adminMethodes/companyMethodes/get-all-companies/get-all-companies.component.css")).default]
    })], GetAllCompaniesComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesGetOneCompanyGetOneCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jb21wYW55TWV0aG9kZXMvZ2V0LW9uZS1jb21wYW55L2dldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: GetOneCompanyComponent */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesGetOneCompanyGetOneCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function () {
      return GetOneCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/company/company.module */
    "./src/app/modules/company/company.module.ts");

    var GetOneCompanyComponent =
    /*#__PURE__*/
    function () {
      function GetOneCompanyComponent(client) {
        _classCallCheck(this, GetOneCompanyComponent);

        this.client = client;
        this.company = new src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_3__["Company"]();
      }

      _createClass(GetOneCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOneCompany",
        value: function getOneCompany() {
          var _this2 = this;

          this.client.getOneCompany(this.company.id).subscribe(function (result) {
            _this2.company = result;
          });
        }
      }]);

      return GetOneCompanyComponent;
    }();

    GetOneCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-one-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-one-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-one-company.component.css */
      "./src/app/components/adminMethodes/companyMethodes/get-one-company/get-one-company.component.css")).default]
    })], GetOneCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesUpdateCompanyUpdateCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jb21wYW55TWV0aG9kZXMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UpdateCompanyComponent */

  /***/
  function srcAppComponentsAdminMethodesCompanyMethodesUpdateCompanyUpdateCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function () {
      return UpdateCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/company/company.module */
    "./src/app/modules/company/company.module.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var UpdateCompanyComponent =
    /*#__PURE__*/
    function () {
      function UpdateCompanyComponent(myAdminService) {
        _classCallCheck(this, UpdateCompanyComponent);

        this.myAdminService = myAdminService;
        this.company = new src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__["Company"]();
      }

      _createClass(UpdateCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCompany",
        value: function updateCompany() {
          this.myAdminService.updateCompany(this.company).subscribe(function (Response) {
            alert("company updated");
          });
        }
      }]);

      return UpdateCompanyComponent;
    }();

    UpdateCompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }];
    };

    UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-company.component.css */
      "./src/app/components/adminMethodes/companyMethodes/update-company/update-company.component.css")).default]
    })], UpdateCompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesAddCustomerAddCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jdXN0b21lck1ldGhvZGVzL2FkZC1jdXN0b21lci9hZGQtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AddCustomerComponent */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesAddCustomerAddCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () {
      return AddCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/customer/customer.module */
    "./src/app/modules/customer/customer.module.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var AddCustomerComponent =
    /*#__PURE__*/
    function () {
      function AddCustomerComponent(client) {
        _classCallCheck(this, AddCustomerComponent);

        this.client = client;
        this.customer = new src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
      }

      _createClass(AddCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCustomer",
        value: function addCustomer() {
          this.client.addCustomer(this.customer).subscribe(function (result) {
            alert("Customer created with id: " + result.id);
          });
        }
      }]);

      return AddCustomerComponent;
    }();

    AddCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }];
    };

    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-customer.component.css */
      "./src/app/components/adminMethodes/customerMethodes/add-customer/add-customer.component.css")).default]
    })], AddCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.css":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.css ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesDeleteCustomerDeleteCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jdXN0b21lck1ldGhvZGVzL2RlbGV0ZS1jdXN0b21lci9kZWxldGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DeleteCustomerComponent */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesDeleteCustomerDeleteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function () {
      return DeleteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/customer/customer.module */
    "./src/app/modules/customer/customer.module.ts");

    var DeleteCustomerComponent =
    /*#__PURE__*/
    function () {
      function DeleteCustomerComponent(client) {
        _classCallCheck(this, DeleteCustomerComponent);

        this.client = client;
        this.customer = new src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
      }

      _createClass(DeleteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer() {
          this.client.deleteCustomer(this.customer.id).subscribe(function (result) {
            alert("The  Deleted!");
          });
        }
      }]);

      return DeleteCustomerComponent;
    }();

    DeleteCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-customer.component.css */
      "./src/app/components/adminMethodes/customerMethodes/delete-customer/delete-customer.component.css")).default]
    })], DeleteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.css":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.css ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesGetAllCustomersGetAllCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td{\r\n    border: solid black 1px;\r\n    text-align: center;\r\n    margin: 8px ;\r\n    padding: 10px;\r\n\r\n}\r\ntable{\r\n    width: 450px;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n    margin-bottom: 25%;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbk1ldGhvZGVzL2N1c3RvbWVyTWV0aG9kZXMvZ2V0LWFsbC1jdXN0b21lcnMvZ2V0LWFsbC1jdXN0b21lcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jdXN0b21lck1ldGhvZGVzL2dldC1hbGwtY3VzdG9tZXJzL2dldC1hbGwtY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cHggO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GetAllCustomersComponent */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesGetAllCustomersGetAllCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function () {
      return GetAllCustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var GetAllCustomersComponent =
    /*#__PURE__*/
    function () {
      function GetAllCustomersComponent(client) {
        _classCallCheck(this, GetAllCustomersComponent);

        this.client = client;
        this.customers = new Array();
      }

      _createClass(GetAllCustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.client.getAllCustomers().subscribe(function (result) {
            _this3.customers = result;
          });
        }
      }]);

      return GetAllCustomersComponent;
    }();

    GetAllCustomersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-all-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-all-customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-all-customers.component.css */
      "./src/app/components/adminMethodes/customerMethodes/get-all-customers/get-all-customers.component.css")).default]
    })], GetAllCustomersComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.css":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.css ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesGetOneCustomerGetOneCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jdXN0b21lck1ldGhvZGVzL2dldC1vbmUtY3VzdG9tZXIvZ2V0LW9uZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: GetOneCustomerComponent */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesGetOneCustomerGetOneCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function () {
      return GetOneCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/customer/customer.module */
    "./src/app/modules/customer/customer.module.ts");

    var GetOneCustomerComponent =
    /*#__PURE__*/
    function () {
      function GetOneCustomerComponent(client) {
        _classCallCheck(this, GetOneCustomerComponent);

        this.client = client;
        this.customer = new src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
      }

      _createClass(GetOneCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOneCustomer",
        value: function getOneCustomer() {
          var _this4 = this;

          this.client.getOneCustomer(this.customer.id).subscribe(function (result) {
            _this4.customer = result;
          });
        }
      }]);

      return GetOneCustomerComponent;
    }();

    GetOneCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-one-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-one-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./get-one-customer.component.css */
      "./src/app/components/adminMethodes/customerMethodes/get-one-customer/get-one-customer.component.css")).default]
    })], GetOneCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.css":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.css ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesUpdateCustomerUpdateCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5NZXRob2Rlcy9jdXN0b21lck1ldGhvZGVzL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: UpdateCustomerComponent */

  /***/
  function srcAppComponentsAdminMethodesCustomerMethodesUpdateCustomerUpdateCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function () {
      return UpdateCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/customer/customer.module */
    "./src/app/modules/customer/customer.module.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var UpdateCustomerComponent =
    /*#__PURE__*/
    function () {
      function UpdateCustomerComponent(client) {
        _classCallCheck(this, UpdateCustomerComponent);

        this.client = client;
        this.customer = new src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
      }

      _createClass(UpdateCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCustomer",
        value: function updateCustomer() {
          this.client.updateCustomer(this.customer).subscribe(function (result) {
            alert("Customer: " + result.id + " , " + result.firstName + " Updated!");
          });
        }
      }]);

      return UpdateCustomerComponent;
    }();

    UpdateCustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }];
    };

    UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-customer.component.css */
      "./src/app/components/adminMethodes/customerMethodes/update-customer/update-customer.component.css")).default]
    })], UpdateCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/company/company.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/company/company.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section{\r\n    text-align: center;\r\n    align-items: center;\r\n\r\n}\r\ntable{\r\n    align-items: center;\r\n}\r\nbody{\r\n    align-items: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbnRhYmxle1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5ib2R5e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/company/company.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/company/company.component.ts ***!
    \*********************************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppComponentsCompanyCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/company/company.module */
    "./src/app/modules/company/company.module.ts");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");

    var CompanyComponent =
    /*#__PURE__*/
    function () {
      function CompanyComponent(client) {
        _classCallCheck(this, CompanyComponent);

        this.client = client;
      }

      _createClass(CompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.company = new src_app_modules_company_company_module__WEBPACK_IMPORTED_MODULE_2__["Company"]();
          this.client.getCompanyDetails().subscribe(function (result) {
            _this5.company = result;
          });
        }
      }, {
        key: "getCompanyDetails",
        value: function getCompanyDetails() {
          var _this6 = this;

          this.client.getCompanyDetails().subscribe(function (result) {
            _this6.company = result;
          });
        }
      }]);

      return CompanyComponent;
    }();

    CompanyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }];
    };

    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company.component.css */
      "./src/app/components/company/company.component.css")).default]
    })], CompanyComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/addcoupon/addcoupon.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/companyMethodes/addcoupon/addcoupon.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesAddcouponAddcouponComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2FkZGNvdXBvbi9hZGRjb3Vwb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/addcoupon/addcoupon.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/companyMethodes/addcoupon/addcoupon.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddcouponComponent */

  /***/
  function srcAppComponentsCompanyMethodesAddcouponAddcouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcouponComponent", function () {
      return AddcouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");

    var AddcouponComponent =
    /*#__PURE__*/
    function () {
      function AddcouponComponent(client) {
        _classCallCheck(this, AddcouponComponent);

        this.client = client;
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_3__["Coupon"]();
      }

      _createClass(AddcouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewCoupon",
        value: function addNewCoupon() {
          this.client.addNewCoupon(this.coupon).subscribe(function (result) {
            alert("Coupon created with id: " + result.id + " and his name is: " + result.title);
          });
        }
      }]);

      return AddcouponComponent;
    }();

    AddcouponComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }];
    };

    AddcouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addcoupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addcoupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/addcoupon/addcoupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addcoupon.component.css */
      "./src/app/components/companyMethodes/addcoupon/addcoupon.component.css")).default]
    })], AddcouponComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/companycoupons/companycoupons.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/companycoupons/companycoupons.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesCompanycouponsCompanycouponsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td{\r\n    border: solid black 1px;\r\n    text-align: center;\r\n    margin: 8px ;\r\n    padding: 10px;\r\n\r\n}\r\ntable{\r\n    width: 450px;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n    margin-bottom: 25%;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55TWV0aG9kZXMvY29tcGFueWNvdXBvbnMvY29tcGFueWNvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2NvbXBhbnljb3Vwb25zL2NvbXBhbnljb3Vwb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cHggO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/companycoupons/companycoupons.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/companycoupons/companycoupons.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CompanycouponsComponent */

  /***/
  function srcAppComponentsCompanyMethodesCompanycouponsCompanycouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanycouponsComponent", function () {
      return CompanycouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");

    var CompanycouponsComponent =
    /*#__PURE__*/
    function () {
      function CompanycouponsComponent(client) {
        _classCallCheck(this, CompanycouponsComponent);

        this.client = client;
        this.coupons = new Array();
      }

      _createClass(CompanycouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.client.getCompanyCoupons().subscribe(function (result) {
            _this7.coupons = result;
          });
        }
      }]);

      return CompanycouponsComponent;
    }();

    CompanycouponsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }];
    };

    CompanycouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companycoupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companycoupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companycoupons/companycoupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./companycoupons.component.css */
      "./src/app/components/companyMethodes/companycoupons/companycoupons.component.css")).default]
    })], CompanycouponsComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/companydetails/companydetails.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/companydetails/companydetails.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesCompanydetailsCompanydetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2NvbXBhbnlkZXRhaWxzL2NvbXBhbnlkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/companydetails/companydetails.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/companydetails/companydetails.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CompanydetailsComponent */

  /***/
  function srcAppComponentsCompanyMethodesCompanydetailsCompanydetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanydetailsComponent", function () {
      return CompanydetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompanydetailsComponent =
    /*#__PURE__*/
    function () {
      function CompanydetailsComponent() {
        _classCallCheck(this, CompanydetailsComponent);
      }

      _createClass(CompanydetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompanydetailsComponent;
    }();

    CompanydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companydetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companydetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/companydetails/companydetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./companydetails.component.css */
      "./src/app/components/companyMethodes/companydetails/companydetails.component.css")).default]
    })], CompanydetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesCouponsbycategoryCouponsbycategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2NvdXBvbnNieWNhdGVnb3J5L2NvdXBvbnNieWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CouponsbycategoryComponent */

  /***/
  function srcAppComponentsCompanyMethodesCouponsbycategoryCouponsbycategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsbycategoryComponent", function () {
      return CouponsbycategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CouponsbycategoryComponent =
    /*#__PURE__*/
    function () {
      function CouponsbycategoryComponent() {
        _classCallCheck(this, CouponsbycategoryComponent);
      }

      _createClass(CouponsbycategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CouponsbycategoryComponent;
    }();

    CouponsbycategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-couponsbycategory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./couponsbycategory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./couponsbycategory.component.css */
      "./src/app/components/companyMethodes/couponsbycategory/couponsbycategory.component.css")).default]
    })], CouponsbycategoryComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesCouponsbyprceCouponsbyprceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2NvdXBvbnNieXByY2UvY291cG9uc2J5cHJjZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CouponsbyprceComponent */

  /***/
  function srcAppComponentsCompanyMethodesCouponsbyprceCouponsbyprceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsbyprceComponent", function () {
      return CouponsbyprceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");

    var CouponsbyprceComponent =
    /*#__PURE__*/
    function () {
      function CouponsbyprceComponent(client) {
        _classCallCheck(this, CouponsbyprceComponent);

        this.client = client;
        this.coupons = new Array();
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_3__["Coupon"]();
      }

      _createClass(CouponsbyprceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCompanyCouponsByPrice",
        value: function getCompanyCouponsByPrice() {
          var _this8 = this;

          this.client.getCompanyCouponsByPrice(this.maxPrice).subscribe(function (result) {
            _this8.coupons = result;
          });
        }
      }]);

      return CouponsbyprceComponent;
    }();

    CouponsbyprceComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }];
    };

    CouponsbyprceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-couponsbyprce',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./couponsbyprce.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./couponsbyprce.component.css */
      "./src/app/components/companyMethodes/couponsbyprce/couponsbyprce.component.css")).default]
    })], CouponsbyprceComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesDeletecouponDeletecouponComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL2RlbGV0ZWNvdXBvbi9kZWxldGVjb3Vwb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DeletecouponComponent */

  /***/
  function srcAppComponentsCompanyMethodesDeletecouponDeletecouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletecouponComponent", function () {
      return DeletecouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeletecouponComponent =
    /*#__PURE__*/
    function () {
      function DeletecouponComponent() {
        _classCallCheck(this, DeletecouponComponent);
      }

      _createClass(DeletecouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeletecouponComponent;
    }();

    DeletecouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deletecoupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deletecoupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deletecoupon.component.css */
      "./src/app/components/companyMethodes/deletecoupon/deletecoupon.component.css")).default]
    })], DeletecouponComponent);
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompanyMethodesUpdatecouponUpdatecouponComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueU1ldGhvZGVzL3VwZGF0ZWNvdXBvbi91cGRhdGVjb3Vwb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UpdatecouponComponent */

  /***/
  function srcAppComponentsCompanyMethodesUpdatecouponUpdatecouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatecouponComponent", function () {
      return UpdatecouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");

    var UpdatecouponComponent =
    /*#__PURE__*/
    function () {
      function UpdatecouponComponent(client) {
        _classCallCheck(this, UpdatecouponComponent);

        this.client = client;
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
      }

      _createClass(UpdatecouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCoupon",
        value: function updateCoupon() {
          this.client.updateCoupon(this.coupon).subscribe(function (result) {
            alert("Coupon: " + result.id + " , " + result.title + " updated");
          });
        }
      }]);

      return UpdatecouponComponent;
    }();

    UpdatecouponComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }];
    };

    UpdatecouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updatecoupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./updatecoupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./updatecoupon.component.css */
      "./src/app/components/companyMethodes/updatecoupon/updatecoupon.component.css")).default]
    })], UpdatecouponComponent);
    /***/
  },

  /***/
  "./src/app/components/customer/customer.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/customer/customer.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customer/customer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/customer/customer.component.ts ***!
    \***********************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppComponentsCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/customer/customer.module */
    "./src/app/modules/customer/customer.module.ts");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var CustomerComponent =
    /*#__PURE__*/
    function () {
      function CustomerComponent(client) {
        _classCallCheck(this, CustomerComponent);

        this.client = client;
        this.customer = new src_app_modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
      }

      _createClass(CustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.client.getCustomerDetails().subscribe(function (result) {
            _this9.customer = result;
          });
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer.component.css */
      "./src/app/components/customer/customer.component.css")).default]
    })], CustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/all-coupons/all-coupons.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/customerMethodes/all-coupons/all-coupons.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesAllCouponsAllCouponsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9hbGwtY291cG9ucy9hbGwtY291cG9ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/all-coupons/all-coupons.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/customerMethodes/all-coupons/all-coupons.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AllCouponsComponent */

  /***/
  function srcAppComponentsCustomerMethodesAllCouponsAllCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllCouponsComponent", function () {
      return AllCouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var AllCouponsComponent =
    /*#__PURE__*/
    function () {
      function AllCouponsComponent(client) {
        _classCallCheck(this, AllCouponsComponent);

        this.client = client;
        this.coupons = new Array();
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
      }

      _createClass(AllCouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.client.getAllCoupons().subscribe(function (result) {
            _this10.coupons = result;
          });
        }
      }, {
        key: "purchaseCoupon",
        value: function purchaseCoupon(coupon) {
          this.client.purchaseCoupon(coupon).subscribe(function (result) {
            alert("Coupon purchased");
            coupon = result;
          });
        }
      }]);

      return AllCouponsComponent;
    }();

    AllCouponsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    AllCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/all-coupons/all-coupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-coupons.component.css */
      "./src/app/components/customerMethodes/all-coupons/all-coupons.component.css")).default]
    })], AllCouponsComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesCustomerCouponsByPriceCustomerCouponsByPriceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9jdXN0b21lci1jb3Vwb25zLWJ5LXByaWNlL2N1c3RvbWVyLWNvdXBvbnMtYnktcHJpY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: CustomerCouponsByPriceComponent */

  /***/
  function srcAppComponentsCustomerMethodesCustomerCouponsByPriceCustomerCouponsByPriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerCouponsByPriceComponent", function () {
      return CustomerCouponsByPriceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var CustomerCouponsByPriceComponent =
    /*#__PURE__*/
    function () {
      function CustomerCouponsByPriceComponent(client) {
        _classCallCheck(this, CustomerCouponsByPriceComponent);

        this.client = client;
        this.coupons = new Array();
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
      }

      _createClass(CustomerCouponsByPriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.client.getAllCoupons().subscribe(function (result) {
            _this11.coupons = result;
          });
        }
      }, {
        key: "getCustomerCouponsByPrice",
        value: function getCustomerCouponsByPrice() {
          var _this12 = this;

          this.client.getCustomerCouponsByPrice(this.maxPrice).subscribe(function (result) {
            _this12.coupons = result;
          });
        }
      }]);

      return CustomerCouponsByPriceComponent;
    }();

    CustomerCouponsByPriceComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    CustomerCouponsByPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-coupons-by-price',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-coupons-by-price.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-coupons-by-price.component.css */
      "./src/app/components/customerMethodes/customer-coupons-by-price/customer-coupons-by-price.component.css")).default]
    })], CustomerCouponsByPriceComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesCustomerCouponsCustomerCouponsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9jdXN0b21lci1jb3Vwb25zL2N1c3RvbWVyLWNvdXBvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: CustomerCouponsComponent */

  /***/
  function srcAppComponentsCustomerMethodesCustomerCouponsCustomerCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerCouponsComponent", function () {
      return CustomerCouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var CustomerCouponsComponent =
    /*#__PURE__*/
    function () {
      function CustomerCouponsComponent(client) {
        _classCallCheck(this, CustomerCouponsComponent);

        this.client = client;
        this.coupons = new Array();
      }

      _createClass(CustomerCouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.client.getCustomerCoupons().subscribe(function (result) {
            _this13.coupons = result;
          });
        }
      }]);

      return CustomerCouponsComponent;
    }();

    CustomerCouponsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
      }];
    };

    CustomerCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-coupons.component.css */
      "./src/app/components/customerMethodes/customer-coupons/customer-coupons.component.css")).default]
    })], CustomerCouponsComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-details/customer-details.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-details/customer-details.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesCustomerDetailsCustomerDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/customer-details/customer-details.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/customer-details/customer-details.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: CustomerDetailsComponent */

  /***/
  function srcAppComponentsCustomerMethodesCustomerDetailsCustomerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function () {
      return CustomerDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerDetailsComponent =
    /*#__PURE__*/
    function () {
      function CustomerDetailsComponent() {
        _classCallCheck(this, CustomerDetailsComponent);
      }

      _createClass(CustomerDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerDetailsComponent;
    }();

    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/customer-details/customer-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-details.component.css */
      "./src/app/components/customerMethodes/customer-details/customer-details.component.css")).default]
    })], CustomerDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.css":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.css ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesDeleteCouponPurchaseDeleteCouponPurchaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9kZWxldGUtY291cG9uLXB1cmNoYXNlL2RlbGV0ZS1jb3Vwb24tcHVyY2hhc2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DeleteCouponPurchaseComponent */

  /***/
  function srcAppComponentsCustomerMethodesDeleteCouponPurchaseDeleteCouponPurchaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCouponPurchaseComponent", function () {
      return DeleteCouponPurchaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var DeleteCouponPurchaseComponent =
    /*#__PURE__*/
    function () {
      function DeleteCouponPurchaseComponent(client) {
        _classCallCheck(this, DeleteCouponPurchaseComponent);

        this.client = client;
        this.coupons = new Array();
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
      }

      _createClass(DeleteCouponPurchaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.client.getCustomerCoupons().subscribe(function (result) {
            _this14.coupons = result;
          });
        }
      }, {
        key: "deleteCouponPurchase",
        value: function deleteCouponPurchase(coupon) {
          this.client.deleteCouponsPurchase(coupon).subscribe(function (result) {
            alert("");
            coupon = result;
          });
        }
      }]);

      return DeleteCouponPurchaseComponent;
    }();

    DeleteCouponPurchaseComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    DeleteCouponPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-coupon-purchase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-coupon-purchase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-coupon-purchase.component.css */
      "./src/app/components/customerMethodes/delete-coupon-purchase/delete-coupon-purchase.component.css")).default]
    })], DeleteCouponPurchaseComponent);
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerMethodesPurchaseCouponPurchaseCouponComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJNZXRob2Rlcy9wdXJjaGFzZS1jb3Vwb24vcHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: PurchaseCouponComponent */

  /***/
  function srcAppComponentsCustomerMethodesPurchaseCouponPurchaseCouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function () {
      return PurchaseCouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/coupon/coupon.module */
    "./src/app/modules/coupon/coupon.module.ts");
    /* harmony import */


    var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/customer.service */
    "./src/app/services/customer.service.ts");

    var PurchaseCouponComponent =
    /*#__PURE__*/
    function () {
      function PurchaseCouponComponent(client) {
        _classCallCheck(this, PurchaseCouponComponent);

        this.client = client;
        this.coupons = new Array();
        this.coupon = new src_app_modules_coupon_coupon_module__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
      }

      _createClass(PurchaseCouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.client.getAllCoupons().subscribe(function (result) {
            _this15.coupons = result;
          });
        }
      }, {
        key: "purchaseCoupon",
        value: function purchaseCoupon(coupon) {
          this.client.purchaseCoupon(coupon).subscribe(function (result) {
            alert("Coupon purchased");
            coupon = result;
          });
        }
      }]);

      return PurchaseCouponComponent;
    }();

    PurchaseCouponComponent.ctorParameters = function () {
      return [{
        type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase-coupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchase-coupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./purchase-coupon.component.css */
      "./src/app/components/customerMethodes/purchase-coupon/purchase-coupon.component.css")).default]
    })], PurchaseCouponComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\r\n    text-align: center;\r\n    font-size: x-large;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\r\n    text-align: center;\r\n    font-size: 25pt;\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHQ7XHJcbiAgICB9XHJcbiAgICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    div{\r\n        text-align: center;\r\n         font-size: 16pt;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7UUFDSSxrQkFBa0I7U0FDakIsZUFBZTtJQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGRpdntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/layout/layout.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/layout/layout.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section{\r\n    height: 100%;\r\n  \r\n    display: grid;\r\n    grid-template-rows: 20% 65% 15%;\r\n    grid-template-columns: 10% 90%;\r\n\r\n}\r\nheader{\r\n    grid-column: span 2;\r\n    \r\n\r\n}\r\nnav{\r\n    grid-column: span 1;\r\n\r\n    text-align: center;\r\n}\r\nmain{\r\n    height: 100%;\r\n    grid-column-end: span 1;\r\n}\r\nfooter{\r\n    grid-column: span 2;\r\n    \r\n}\r\nsection >*\r\n{\r\n    border: solid black 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsOEJBQThCOztBQUVsQztBQUNBO0lBQ0ksbUJBQW1COzs7QUFHdkI7QUFDQTtJQUNJLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCO0FBQ0E7O0lBRUksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDY1JSAxNSU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XHJcblxyXG59XHJcbmhlYWRlcntcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgICBcclxuXHJcbn1cclxubmF2e1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMTtcclxufVxyXG5mb290ZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgXHJcbn1cclxuc2VjdGlvbiA+KlxyXG57XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/layout/layout.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/layout/layout.component.ts ***!
    \*******************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.css */
      "./src/app/components/layout/layout.component.css")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this16 = this;

          this.loginService.login(this.email, this.password, this.type).subscribe(function (response) {
            if (response.startsWith("Error")) {
              alert("Error! Try again...");
            } else {
              sessionStorage.token = response;

              switch (_this16.type) {
                case "Admin":
                  _this16.router.navigate(["/admin"]);

                  break;

                case "Company":
                  _this16.router.navigate(["/company"]);

                  break;

                case "Customer":
                  _this16.router.navigate(["/customer"]);

                  break;
              }
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    \r\n    button{\r\n        margin: 0.2cm;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVJO1FBQ0ksYUFBYTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIFxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMC4yY207XHJcbiAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/components/navigation/navigation.component.css")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/modules/company/company.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/company/company.module.ts ***!
    \***************************************************/

  /*! exports provided: Company */

  /***/
  function srcAppModulesCompanyCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Company", function () {
      return Company;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Company =
    /*#__PURE__*/
    function () {
      function Company(id, name, password, email) {
        _classCallCheck(this, Company);

        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
      }

      _createClass(Company, [{
        key: "toString",
        value: function toString() {
          return this.id + ":" + this.name + ", " + this.password + " ,pass " + this.email;
        }
      }]);

      return Company;
    }();
    /***/

  },

  /***/
  "./src/app/modules/coupon/coupon.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/coupon/coupon.module.ts ***!
    \*************************************************/

  /*! exports provided: Coupon */

  /***/
  function srcAppModulesCouponCouponModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Coupon", function () {
      return Coupon;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Coupon = function Coupon(id, company, categoryType, title, description, startDate, endDate, amount, price, image) {
      _classCallCheck(this, Coupon);

      this.id = id;
      this.company = company;
      this.categoryType = categoryType;
      this.title = title;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.amount = amount;
      this.price = price;
      this.image = image;
    };
    /***/

  },

  /***/
  "./src/app/modules/customer/customer.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/customer/customer.module.ts ***!
    \*****************************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppModulesCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Customer = function Customer(id, firstName, lastName, email, password) {
      _classCallCheck(this, Customer);

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(client) {
        _classCallCheck(this, AdminService);

        this.client = client;
      }

      _createClass(AdminService, [{
        key: "addCompany",
        value: function addCompany(company) {
          return this.client.post("http://localhost:8080/admin/addcomp/" + sessionStorage.token, company);
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          return this.client.put("http://localhost:8080/admin/updatecomp/" + sessionStorage.token, company);
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          return this.client.delete("http://localhost:8080/admin/deletecomp/" + sessionStorage.token + "/" + id);
        }
      }, {
        key: "getAllCompanies",
        value: function getAllCompanies() {
          return this.client.get("http://localhost:8080/admin/allcompanies/" + sessionStorage.token);
        }
      }, {
        key: "getOneCompany",
        value: function getOneCompany(id) {
          return this.client.get("http://localhost:8080/admin/getOneCompany/" + sessionStorage.token + "/" + id);
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(customer) {
          return this.client.post("http://localhost:8080/admin/addcustomer/" + sessionStorage.token, customer);
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          return this.client.put("http://localhost:8080/admin/updatecustomer/" + sessionStorage.token, customer);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          return this.client.delete("http://localhost:8080/admin/deletecustomer/" + sessionStorage.token + "/" + id);
        }
      }, {
        key: "getAllCustomers",
        value: function getAllCustomers() {
          return this.client.get("http://localhost:8080/admin/allcustomers/" + sessionStorage.token);
        }
      }, {
        key: "getOneCustomer",
        value: function getOneCustomer(id) {
          return this.client.get("http://localhost:8080/admin/customer/" + sessionStorage.token + "/" + id);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/services/company.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/company.service.ts ***!
    \*********************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppServicesCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CompanyService =
    /*#__PURE__*/
    function () {
      function CompanyService(client) {
        _classCallCheck(this, CompanyService);

        this.client = client;
      }

      _createClass(CompanyService, [{
        key: "addNewCoupon",
        value: function addNewCoupon(coupon) {
          return this.client.post("http://localhost:8080/company/addcoupon/" + sessionStorage.token, coupon);
        }
      }, {
        key: "updateCoupon",
        value: function updateCoupon(coupon) {
          return this.client.put("http://localhost:8080/company/updatecoupon/" + sessionStorage.token, coupon);
        }
      }, {
        key: "deleteCoupon",
        value: function deleteCoupon(id) {
          return this.client.delete("http://localhost:8080/company/deletecoupon/" + sessionStorage.token + "/" + id);
        }
      }, {
        key: "getCompanyCoupons",
        value: function getCompanyCoupons() {
          return this.client.get("http://localhost:8080/company/companyCoupons/" + sessionStorage.token);
        }
      }, {
        key: "getCompanyCouponsByCategory",
        value: function getCompanyCouponsByCategory(coupon) {
          return this.client.get("http://localhost:8080/company/couponsbycategory/" + sessionStorage.token + "/category/" + coupon);
        }
      }, {
        key: "getCompanyCouponsByPrice",
        value: function getCompanyCouponsByPrice(maxPrice) {
          return this.client.get("http://localhost:8080/company/couponsbyprice/" + sessionStorage.token + "/price/" + maxPrice);
        }
      }, {
        key: "getCompanyDetails",
        value: function getCompanyDetails() {
          return this.client.get("http://localhost:8080/company/companydetails/" + sessionStorage.token);
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CompanyService);
    /***/
  },

  /***/
  "./src/app/services/customer.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/customer.service.ts ***!
    \**********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppServicesCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CustomerService =
    /*#__PURE__*/
    function () {
      function CustomerService(client) {
        _classCallCheck(this, CustomerService);

        this.client = client;
      }

      _createClass(CustomerService, [{
        key: "purchaseCoupon",
        value: function purchaseCoupon(coupon) {
          return this.client.post("http://localhost:8080/customer/customerpurchase/" + sessionStorage.token, coupon);
        }
      }, {
        key: "getAllCoupons",
        value: function getAllCoupons() {
          return this.client.get("http://localhost:8080/customer/allcoupons/" + sessionStorage.token);
        }
      }, {
        key: "getCustomerCoupons",
        value: function getCustomerCoupons() {
          return this.client.get("http://localhost:8080/customer/customercoupons/" + sessionStorage.token);
        }
      }, {
        key: "getCustomerCouponsByCategory",
        value: function getCustomerCouponsByCategory(coupon) {
          return this.client.get("http://localhost:8080/customer/customercouponsbycategory/" + sessionStorage.token + "/category/" + coupon);
        }
      }, {
        key: "getCustomerCouponsByPrice",
        value: function getCustomerCouponsByPrice(maxPrice) {
          return this.client.get("http://localhost:8080/customer/customercouponsbyprice/" + sessionStorage.token + "/price/" + maxPrice);
        }
      }, {
        key: "getCustomerDetails",
        value: function getCustomerDetails() {
          return this.client.get("http://localhost:8080/customer/customerdetails/" + sessionStorage.token);
        }
      }, {
        key: "deleteCouponsPurchase",
        value: function deleteCouponsPurchase(coupon) {
          return this.client.put("http://localhost:8080/customer/deletepurchasedcoupon/" + sessionStorage.token, coupon);
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(client) {
        _classCallCheck(this, LoginService);

        this.client = client;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(email, password, type) {
          return this.client.post("http://localhost:8080/login/" + email + "/" + password + "/" + type, null, {
            responseType: 'text'
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MikeWork\WORKSPACE\AngularCoupons3\angularphase3\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map