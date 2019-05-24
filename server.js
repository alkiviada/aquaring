/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(4);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
var bodyParser = __webpack_require__(16);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(_express2.default.json()); // to support JSON-encoded bodies
app.use(_express2.default.urlencoded({ extended: true }));

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {
  var context = {};

  var markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { context: context, location: req.url },
    _react2.default.createElement(_App2.default, null)
  ));
  console.log('haha');
  res.send("\n    <!DOCTYPE html>\n    <html lang=\"en-US\">\n      <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>AquaRingEnergy</title>\n        <link href=\"//fonts.googleapis.com/css?family=Harmattan|Julius+Sans+One|Pathway+Gothic+One\" rel=\"stylesheet\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"/main.css\">\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n\n      <body>\n        <div id=\"app\" class=\"aqr-container\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});
app.post('/', function (req, res) {
  console.log('i am sending response to post');
  var message = req.body;
  var msg_map = Object.keys(message).map(function (k) {
    return message[k].value;
  });
  console.log(msg_map);
  res.status(200).send({ 'message_recieved': '1' });
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(7);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _Home2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(8);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(13);

var _About2 = _interopRequireDefault(_About);

var _SVGSprites = __webpack_require__(11);

var _SVGSprites2 = _interopRequireDefault(_SVGSprites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = { headerCn: '' };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: "handleScroll",
    value: function handleScroll(e) {
      var lastScrollY = window.scrollY;
      var hCn = '';
      if (lastScrollY > 58) {
        this.setState({
          headerCn: 'aqr-header-sticky'
        });
      } else {
        this.setState({
          headerCn: ''
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_SVGSprites2.default, null),
        _react2.default.createElement(_Header2.default, { headerCn: this.state.headerCn }),
        _react2.default.createElement(
          "main",
          { role: "main" },
          _react2.default.createElement(
            "div",
            { className: "title-wrapper" },
            _react2.default.createElement(
              "h1",
              null,
              "AquaRing Energy"
            ),
            _react2.default.createElement(
              "h2",
              null,
              "CLEAN, RENEWABLE, ENERGY \u2013 24/7"
            )
          ),
          _react2.default.createElement(_About2.default, null),
          _react2.default.createElement(
            "section",
            { className: "aqr-tech" },
            _react2.default.createElement(
              "div",
              { className: "aqr-section-head-wrapper" },
              _react2.default.createElement(
                "svg",
                { className: "aqr-heading-icon", "aria-hidden": "true" },
                _react2.default.createElement("use", { xlinkHref: "#aqr-tech-icon" })
              ),
              _react2.default.createElement(
                "h3",
                null,
                "Our Technology"
              )
            ),
            _react2.default.createElement(
              "p",
              null,
              "Renewable energy is not dependable. Today, most of the world's energy needs are still met by the polluting energy resources. AquaRing Energy's solution is an offshore wave energy converter with intertial energy storage. Our system is submersible, so it can continue to generate during storms and thus act as a safety net for the grid. Our technology is a demand-response based, so unlike other sources of renewable energy, it can deliver consistent power. Ocean wave energy is a huge and essentially untapped resource. AquaRing Energy's technology can cost-effectively tap into it, and ultimately supply as much as one third of the US demand for reliable, grid stabilizing, electricity."
            )
          )
        ),
        _react2.default.createElement("footer", { role: "contentinfo" })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Logo = __webpack_require__(9);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        { role: "banner", className: this.props.headerCn },
        _react2.default.createElement(
          "a",
          { href: "/", tabIndex: "-1" },
          _react2.default.createElement(_Logo2.default, null),
          _react2.default.createElement(
            "span",
            { className: "visually-hidden" },
            "Aquaring Main Page"
          )
        ),
        _react2.default.createElement(
          "nav",
          { role: "navigation", "area-label": "AquaringEnergy Menu", className: "aqr-top-nav" },
          _react2.default.createElement(
            "ul",
            { className: "aqr-top-nav-list" },
            _react2.default.createElement(
              "li",
              { className: "aqr-top-nav-li" },
              _react2.default.createElement(
                "a",
                { className: "aqr-top-nav-link", href: "/", "area-label": "Our Team" },
                "Our Team"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "aqr-top-nav-li" },
              _react2.default.createElement(
                "a",
                { className: "aqr-top-nav-link", href: "/br", "area-label": "Join Us" },
                "Join Us"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: "-1.4 -0.8 35.8 39", height: "100%", width: "100%",
          xmlns: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", className: "aqr-logo", "aria-hidden": "true" },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement(
            "mask",
            { id: "sun-masking" },
            _react2.default.createElement("circle", { fill: "yellow",
              r: "5",
              cx: "23",
              cy: "10" }),
            " ",
            _react2.default.createElement("path", {
              d: " M 10 30 C 42 20, 17 -5, 2 10  M 2 10  C 15 0, 30 20, 10 30 ",
              fill: "black",
              stroke: "black",
              strokeWidth: ".2"
            })
          ),
          _react2.default.createElement(
            "clipPath",
            { id: "myClip" },
            _react2.default.createElement("circle", {
              r: "17",
              cx: "16",
              cy: "17",
              stroke: "black",
              strokeWidth: ".1"
            })
          ),
          _react2.default.createElement("path", { id: "energy-path",
            d: " M 19 6  A 5 5 0 0 1 25 16 ",
            stroke: "white",
            fill: "none",
            strokeWidth: ".7"
          }),
          _react2.default.createElement("path", { id: "aquaring-path-1",
            d: " M 2 10  C 15 0, 30 20, 10 30 ",
            fill: "none"
          }),
          _react2.default.createElement("path", { id: "aquaring-path-2",
            d: " M 10 30 C 42 20, 17 -5, 2 10  M 2 10  C 15 0, 30 20, 10 30 "
          }),
          _react2.default.createElement("path", { id: "aquaring-path-3",
            d: " M 25.5 16 Q 28 30 33 17 C 30 60 0 60 -1 17 Q -2 30 -.5 17 Q 8 37 25.5 16 "
          }),
          _react2.default.createElement(
            "linearGradient",
            { id: "waveGradient", x1: "0%", y1: "0%", x2: "50%", y2: "100%" },
            _react2.default.createElement("stop", { offset: "0%", className: "wave-grad-start" }),
            _react2.default.createElement("stop", { offset: "50%", className: "wave-grad-middle" }),
            _react2.default.createElement("stop", { offset: "100%", className: "wave-grad-stop" })
          ),
          _react2.default.createElement(
            "linearGradient",
            { id: "bgWaveGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            _react2.default.createElement("stop", { offset: "0%", className: "bg-grad-top" }),
            _react2.default.createElement("stop", { offset: "100%", className: "bg-grad-bottom" })
          )
        ),
        _react2.default.createElement(
          "g",
          { className: "wave" },
          _react2.default.createElement(
            "a",
            { href: "/", className: "active aqr-logo-link" },
            _react2.default.createElement("circle", { className: "aqr-logo-bg",
              r: "17",
              cx: "16",
              cy: "17"
            })
          ),
          _react2.default.createElement("use", { xlinkHref: "#aquaring-path-2", fill: "url(#waveGradient)" }),
          _react2.default.createElement("use", { xlinkHref: "#aquaring-path-3", className: "waves", clipPath: "url(#myClip)" }),
          _react2.default.createElement(
            "text",
            { className: "aqr-logo-water-text", textAnchor: "start", x: "13" },
            _react2.default.createElement(
              "textPath",
              { xlinkHref: "#aquaring-path-1" },
              "aquaring"
            )
          ),
          _react2.default.createElement("path", {
            d: " M 10 30 L 25 30 C 28 20, 25 20, 25 20  C 20 26, 17 28, 10 30  ",
            stroke: "none",
            strokeWidth: ".2",
            fill: "none"
          }),
          _react2.default.createElement("circle", { className: "aqr-logo-sun",
            r: "10",
            cx: "23",
            cy: "6",
            mask: "url(#sun-masking)"
          }),
          _react2.default.createElement(
            "text",
            { className: "aqr-logo-sun-text" },
            _react2.default.createElement(
              "textPath",
              { xlinkHref: "#energy-path" },
              "energy"
            )
          )
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGSprites = function (_Component) {
  _inherits(SVGSprites, _Component);

  function SVGSprites() {
    _classCallCheck(this, SVGSprites);

    return _possibleConstructorReturn(this, (SVGSprites.__proto__ || Object.getPrototypeOf(SVGSprites)).apply(this, arguments));
  }

  _createClass(SVGSprites, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { className: "svg-icons", width: "0", height: "0", "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        _react2.default.createElement(
          "symbol",
          { id: "aqr-about-icon", viewBox: "-1.4 -0.2 42 38" },
          _react2.default.createElement("circle", { fill: "none",
            r: "17",
            cx: "16",
            cy: "17"
          }),
          _react2.default.createElement("path", { fill: "none",
            d: " M 3 28 C 15 20 5 10 16 0 L 16 25 M -1 17 C 7 24 12 24 16 15 M 16 0 A 1 1 0 0 1 16 15 C 22 15 23 33 40 32 "
          })
        ),
        _react2.default.createElement(
          "symbol",
          { id: "aqr-input-icon", viewBox: "0 0 10 10" },
          _react2.default.createElement("path", { d: "M 0 0 L 5 5 L 0 10" })
        ),
        _react2.default.createElement(
          "symbol",
          { viewBox: "-3 -2 42 40", id: "aqr-tech-icon" },
          _react2.default.createElement(
            "defs",
            null,
            _react2.default.createElement("rect", { x: "16", y: "-1", height: "36", width: "2", id: "line" }),
            _react2.default.createElement("rect", { x: "16", y: "8", width: "8.5", height: "2", id: "line-small" }),
            _react2.default.createElement("circle", { cx: "23.5", cy: "7", r: "1.5", id: "cog-small" }),
            _react2.default.createElement(
              "mask",
              { id: "cog-masking" },
              _react2.default.createElement(
                "g",
                { stroke: "white", fill: "white" },
                _react2.default.createElement("use", { xlinkHref: "#cog-small" })
              ),
              _react2.default.createElement("path", {
                d: " M 16 0 A 1 1 0 0 1 16 15 ",
                stroke: "black",
                strokeWidth: "1",
                fill: "black"
              })
            ),
            _react2.default.createElement(
              "mask",
              { id: "line-masking" },
              _react2.default.createElement(
                "g",
                { stroke: "white", fill: "white" },
                _react2.default.createElement("use", { xlinkHref: "#line-small" }),
                _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(-20) translate(-4.2, 3.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(17) translate(1.7, -3.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(35) translate(1.5, -8)" })
              ),
              _react2.default.createElement("path", {
                d: " M 16 2  A 1 1 0 0 1 16 15 A 1 1 0 1 1 16 2 ",
                stroke: "black",
                strokeWidth: "2",
                fill: "black"
              })
            ),
            _react2.default.createElement(
              "mask",
              { id: "masking" },
              _react2.default.createElement(
                "g",
                { fill: "white", stroke: "white", strokeWidth: "2" },
                _react2.default.createElement("use", { xlinkHref: "#line", stroke: "white" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(90) translate(0, -33)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(45) translate(7, -16.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-45) translate(-17, 6.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-22.5) translate(-8, 5)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(22.5) translate(6, -7.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(67.5) translate(5, -25.3)" }),
                _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-67.5) translate(-26, 4.3)" })
              ),
              _react2.default.createElement("circle", { fill: "black",
                r: "16",
                cx: "16",
                cy: "17",
                stroke: "black",
                strokeWidth: "2"
              })
            )
          ),
          _react2.default.createElement(
            "g",
            { mask: "url(#masking)", fill: "black", stroke: "black" },
            _react2.default.createElement("use", { xlinkHref: "#line" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(90) translate(0, -33)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(45) translate(7, -16.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-45) translate(-17, 6.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-22.5) translate(-8, 5)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(22.5) translate(6, -7.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(67.5) translate(5, -25.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line", transform: "rotate(-67.5) translate(-26, 4.3)" })
          ),
          _react2.default.createElement(
            "g",
            { mask: "url(#line-masking)" },
            _react2.default.createElement("use", { xlinkHref: "#line-small" }),
            _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(-20) translate(-4.2, 3.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(17) translate(1.7, -3.3)" }),
            _react2.default.createElement("use", { xlinkHref: "#line-small", transform: "rotate(35) translate(1.5, -8)" })
          ),
          _react2.default.createElement("circle", { fill: "none",
            r: "16",
            cx: "16",
            cy: "17",
            stroke: "black",
            strokeWidth: "2"
          }),
          _react2.default.createElement("path", { fill: "none", stroke: "black", strokeWidth: ".8",
            d: " M 3 28 C 15 20 5 10 16 2 L 16 25 M -1 17 C 7 24 12 24 16 15 M 16 2 A 1 1 0 0 1 16 15 C 22 15 23 33 40 32 "
          }),
          _react2.default.createElement("path", {
            d: " M 16 2 A 1 1 0 0 1 16 15 ",
            stroke: "black",
            strokeWidth: "2",
            fill: "none"
          })
        )
      );
    }
  }]);

  return SVGSprites;
}(_react.Component);

exports.default = SVGSprites;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this.userNameLabelRef = _react2.default.createRef();
    _this.emailLabelRef = _react2.default.createRef();
    _this.messageLabelRef = _react2.default.createRef();
    _this.state = { error: '',
      messageSent: '',
      username: { 'value': '', 'label_cn': 'floating-label' },
      email: { 'value': '', 'label_cn': 'floating-label' },
      message: { 'value': '', 'label_cn': 'floating-label' }
    };
    _this.inputOrLabel = _this.inputOrLabel.bind(_this);
    _this.hideLabel = _this.hideLabel.bind(_this);
    _this.showLabel = _this.showLabel.bind(_this);
    _this.sendMessage = _this.sendMessage.bind(_this);
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'sendMessage',
    value: function sendMessage(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.state.message.value) {
        console.log('i will send');
        var _state = this.state,
            email = _state.email,
            username = _state.username,
            message = _state.message;

        var headers = { "Content-Type": "application/json" };
        var body = JSON.stringify({ username: username, email: email, message: message });

        return fetch("/", { headers: headers, body: body, method: "POST" }).then(function (res) {
          if (res.status < 500) {
            return res.json().then(function (data) {
              return { status: res.status, data: data };
            });
          } else {
            console.log("Server Error!");
            throw res;
          }
        }).then(function (res) {
          if (res.status === 200) {
            _this2.setState({ messageSent: 1 });
            return res.data;
          } else if (res.status === 403 || res.status === 401) {
            throw res;
          } else {
            throw res.data;
          }
        }).catch(function (err) {
          _this2.setState({ error: err });
          return err;
        });
      } else {
        console.log('i will not send');
      }
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(e) {
      var key = e.target.id;
      this.setState(_defineProperty({}, key, { 'label_cn': this.state[key]['label_cn'], 'value': e.target.value }));
    }
  }, {
    key: 'hideLabel',
    value: function hideLabel(e, labelRef) {
      var key = labelRef.current.htmlFor;
      this.setState(_defineProperty({}, key, { 'value': e.target.value, 'label_cn': 'floating-label top-label' }));
    }
  }, {
    key: 'showLabel',
    value: function showLabel(e, labelRef) {
      var key = labelRef.current.htmlFor;
      this.setState(_defineProperty({}, key, { 'value': e.target.value, 'label_cn': 'floating-label' }));
    }
  }, {
    key: 'inputOrLabel',
    value: function inputOrLabel(e, labelRef) {
      if (e.target.value == "") {
        this.showLabel(e, labelRef);
      } else if (e.target.value != "") {
        this.hideLabel(e, labelRef);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('from render with');
      console.log(this.state.error);
      var error = this.state.error.status;
      var messageSent = this.state.messageSent;
      console.log(error);
      return _react2.default.createElement(
        'section',
        { className: 'aqr-about' },
        _react2.default.createElement(
          'div',
          { className: 'aqr-section-head-wrapper' },
          _react2.default.createElement(
            'svg',
            { className: 'aqr-heading-icon', 'aria-hidden': 'true' },
            _react2.default.createElement('use', { xlinkHref: '#aqr-about-icon' })
          ),
          _react2.default.createElement(
            'h3',
            { className: 'aqr-section-heading' },
            'About Us'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Welcome! AquaRing Energy is a startup based in Bellevue, Washington. We are focused on renewable energy and energy storage technology, and providing power to communities worldwide.'
        ),
        error ? '' : messageSent ? _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'em',
            null,
            'Thank you for getting in touch with us'
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'We would like you to share in our journey to provide safe, reliable, renewable energy to the world. Please use the form below to let us know you would like to receive our newsletter, or to otherwise get in touch with us. Thank you!'
        ),
        error == 500 ? _react2.default.createElement(
          'div',
          { className: 'aqr-alert' },
          _react2.default.createElement(
            'em',
            null,
            'An error has occurred, while sending your message. Shall you try again?'
          )
        ) : '',
        messageSent ? '' : _react2.default.createElement(
          'form',
          { className: 'aqr-form' },
          _react2.default.createElement(
            'div',
            { className: 'aqr-input-wrapper' },
            _react2.default.createElement(
              'label',
              { className: this.state.username.label_cn, htmlFor: 'username', ref: this.userNameLabelRef },
              'Name'
            ),
            _react2.default.createElement('input', { className: 'aqr-input', onFocus: function onFocus(e) {
                return _this3.hideLabel(e, _this3.userNameLabelRef);
              }, onInput: function onInput(e) {
                return _this3.inputOrLabel(e, _this3.userNameLabelRef);
              }, onBlur: function onBlur(e) {
                return _this3.inputOrLabel(e, _this3.userNameLabelRef);
              }, type: 'text', value: this.state.username.value, id: 'username', name: 'username', onChange: this.handleValueChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'aqr-input-wrapper' },
            _react2.default.createElement(
              'label',
              { className: this.state.email.label_cn, htmlFor: 'email', ref: this.emailLabelRef },
              'Email'
            ),
            _react2.default.createElement('input', { className: 'aqr-input', onFocus: function onFocus(e) {
                return _this3.hideLabel(e, _this3.emailLabelRef);
              }, onInput: function onInput(e) {
                return _this3.inputOrLabel(e, _this3.emailLabelRef);
              }, onBlur: function onBlur(e) {
                return _this3.inputOrLabel(e, _this3.emailLabelRef);
              }, type: 'email', value: this.state.email.value, id: 'email', name: 'email', onChange: this.handleValueChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'aqr-input-wrapper' },
            _react2.default.createElement(
              'label',
              { className: this.state.message.label_cn, htmlFor: 'message', ref: this.messageLabelRef },
              'What you have to say'
            ),
            _react2.default.createElement('textarea', { className: 'aqr-input-textarea', onFocus: function onFocus(e) {
                return _this3.hideLabel(e, _this3.messageLabelRef);
              }, onInput: function onInput(e) {
                return _this3.inputOrLabel(e, _this3.messageLabelRef);
              }, onBlur: function onBlur(e) {
                return _this3.inputOrLabel(e, _this3.messageLabelRef);
              }, type: 'message', value: this.state.message.value, id: 'message', name: 'message', onChange: this.handleValueChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'aqr-input-wrapper' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'aqr-send-button', onClick: this.sendMessage },
              'Send'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);