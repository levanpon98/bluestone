module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "6XsT":
/***/ (function(module, exports) {



/***/ }),

/***/ "AmNh":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GKK4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./repositories/Repository.js

const baseDomain = 'http://localhost:3000/api'; // API for products

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ var Repository = (external_axios_default.a.create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");

// CONCATENATED MODULE: ./repositories/UserRepository.js



class UserRepository_UserRepository {
  login(values) {
    const res = Repository.post(`${baseUrl}/auth/login`, values);
    return res;
  }

  async register(values) {
    const reponse = await Repository.post(`${baseUrl}/users/register`, values).then(response => {
      return response;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
  }

  async getUser(userId, token) {
    const response = await Repository.get(`${baseUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data.status == 200) {
      return response.data.data;
    } else {
      return null;
    }
  }

  updateUser({
    payload
  }) {
    const res = Repository.post(`${baseUrl}/users/${payload.userId}`, payload.values, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    });
    return res;
  }

}

/* harmony default export */ var repositories_UserRepository = __webpack_exports__["a"] = (new UserRepository_UserRepository());

/***/ }),

/***/ "Gska":
/***/ (function(module, exports) {



/***/ }),

/***/ "Het6":
/***/ (function(module, exports) {



/***/ }),

/***/ "JHtx":
/***/ (function(module, exports) {



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "NOMj":
/***/ (function(module, exports) {



/***/ }),

/***/ "NZ7S":
/***/ (function(module, exports) {



/***/ }),

/***/ "QqKt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapper; });

// UNUSED EXPORTS: makeStore

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./store/auth/action.js
var auth_action = __webpack_require__("W80I");

// CONCATENATED MODULE: ./store/auth/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  userId: null,
  token: null,
  error: null,
  isLoggedIn: false,
  isActive: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case auth_action["a" /* actionTypes */].LOGIN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error,
        isLoggedIn: false
      });

    case auth_action["a" /* actionTypes */].LOGIN_SUCCESS:
      console.log(action);
      return _objectSpread(_objectSpread({}, state), {
        error: null,
        isLoggedIn: true,
        token: action.payload.token,
        userId: action.payload.userId,
        isActive: action.payload.isActive
      });

    case auth_action["a" /* actionTypes */].LOGOUT:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ var auth_reducer = (reducer);
// CONCATENATED MODULE: ./store/rootReducer.js


/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  auth: auth_reducer
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./repositories/UserRepository.js + 1 modules
var UserRepository = __webpack_require__("GKK4");

// CONCATENATED MODULE: ./store/auth/saga.js







const modal = (type, message, description) => {
  external_antd_["notification"][type]({
    message: message,
    description: description
  });
};

function* loginSaga(action) {
  const {
    email,
    password,
    route
  } = action.payload;

  try {
    console.log(email);
    console.log(password);
    const res = yield Object(effects_["call"])(UserRepository["a" /* default */].login, {
      email,
      password
    });
    const response = res.data.data;

    if (res.data.status == 200) {
      external_js_cookie_default.a.set('jwt', response.token);
      external_js_cookie_default.a.set('userId', response.userId);
      yield Object(effects_["put"])(Object(auth_action["d" /* loginSuccess */])(response));
      modal('success', "Login Successfully!!!", "Welcome Back!!!");
      route.push('/');
    } else {
      yield Object(effects_["put"])(Object(auth_action["c" /* loginFailure */])('Wrong username/password.'));
      modal('warning', "Login Fail", "Wrong username/password.");
    }
  } catch (err) {
    yield Object(effects_["put"])(Object(auth_action["c" /* loginFailure */])('Something went wrong.'));
    modal('warning', "Login Fail", "Wrong username/password.");
  }
}

function* registerSaga() {
  yield Object(effects_["put"])(loggingIn(true));
  const email = yield Object(effects_["select"])(selectEmail());
  const password = yield Object(effects_["select"])(selectPassword());

  try {
    const res = yield fetch('http://localhost:1337/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (res.ok) {
      yield Object(effects_["put"])(Object(auth_action["g" /* registerSuccess */])());
    } else {
      yield Object(effects_["put"])(Object(auth_action["f" /* registerFailure */])());
      modal('warning', "Register Fail", "Email is already used!!!");
    }
  } catch (err) {
    yield Object(effects_["put"])(Object(auth_action["f" /* registerFailure */])('Something went wrong.'));
  }
}

function* logoutSaga(action) {
  external_js_cookie_default.a.remove('jwt');
  external_js_cookie_default.a.remove('userId');
  yield Object(effects_["put"])(Object(auth_action["e" /* logoutSuccess */])({}));
}

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGIN, loginSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGOUT, logoutSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].REGISTER, registerSaga)]);
}
// CONCATENATED MODULE: ./store/rootSaga.js


function* rootSaga_rootSaga() {
  yield Object(effects_["all"])([rootSaga()]);
}
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// CONCATENATED MODULE: ./store/store.js






const {
  persistStore,
  persistReducer
} = __webpack_require__("VNb8");

const storage = __webpack_require__("T8f9").default;

const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const persistConfig = {
  key: 'bluestone',
  whitelist: ['auth'],
  storage
};
const makeStore = context => {
  const sagaMiddleware = external_redux_saga_default()();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = Object(external_redux_["createStore"])(persistedReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga_rootSaga);
  store.__persistor = persistStore(store);
  return store;
};
const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SqlY":
/***/ (function(module, exports) {



/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "VtRA":
/***/ (function(module, exports) {



/***/ }),

/***/ "W80I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* unused harmony export logout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginFailure; });
/* unused harmony export resetToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logoutSuccess; });
/* unused harmony export register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerSuccess; });
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  REGISTER: 'REGISTER',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS'
};
function login(payload) {
  return {
    type: actionTypes.LOGIN,
    payload: payload
  };
}
function logout() {
  return {
    type: actionTypes.LOGOUT
  };
}
function loginFailure(error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error
  };
}
function resetToken(token) {
  return {
    type: actionTypes.RESET_TOKEN,
    token
  };
}
function loginSuccess(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload
  };
}
function logoutSuccess(userData) {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    userData
  };
}
function register() {
  return {
    type: actionTypes.REGISTER
  };
}
function registerFailure(error) {
  return {
    type: actionTypes.REGISTER_FAILURE,
    error
  };
}
function registerSuccess() {
  return {
    type: actionTypes.REGISTER_SUCCESS
  };
}

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/modules/Head.jsx





const StyleSheets = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
    children: "BLUESTONE BUYERS AGENTS"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "32x32"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "192x192"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "apple-touch-icon-precomposed",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "format-detection",
    content: "telephone=no"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "author",
    content: "hmsp"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "keywords",
    content: "bluestone, bluestone reactjs"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "description",
    content: "BLUESTONE BUYERS AGENTS"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/flp4ysk.css"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "stylesheet",
    href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "stylesheet",
    href: "/static/fonts/font-awesome/css/font-awesome.min.css"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/slick.min.css"
  }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/ckeditor.css"
  })]
});

/* harmony default export */ var Head = (StyleSheets);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/layouts/DefaultLayout.jsx







const DefaultLayout = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "layout--default",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Head, {}), children, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "loader-wrapper",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "loader-section section-left"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "loader-section section-right"
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["BackTop"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "ps-btn--backtop",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
        className: "icon-arrow-up"
      })
    })
  })]
});

/* harmony default export */ var layouts_DefaultLayout = (DefaultLayout);
// EXTERNAL MODULE: ./store/store.js + 4 modules
var store_store = __webpack_require__("QqKt");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__("AmNh");

// EXTERNAL MODULE: ./scss/home-default.scss
var home_default = __webpack_require__("SqlY");

// EXTERNAL MODULE: ./scss/market-place-1.scss
var market_place_1 = __webpack_require__("Gska");

// EXTERNAL MODULE: ./scss/market-place-2.scss
var market_place_2 = __webpack_require__("Het6");

// EXTERNAL MODULE: ./scss/market-place-3.scss
var market_place_3 = __webpack_require__("eDIf");

// EXTERNAL MODULE: ./scss/market-place-4.scss
var market_place_4 = __webpack_require__("tf9W");

// EXTERNAL MODULE: ./scss/electronic.scss
var electronic = __webpack_require__("NOMj");

// EXTERNAL MODULE: ./scss/furniture.scss
var furniture = __webpack_require__("NZ7S");

// EXTERNAL MODULE: ./scss/organic.scss
var organic = __webpack_require__("cqNT");

// EXTERNAL MODULE: ./scss/technology.scss
var technology = __webpack_require__("JHtx");

// EXTERNAL MODULE: ./scss/autopart.scss
var autopart = __webpack_require__("6XsT");

// EXTERNAL MODULE: ./scss/custom.scss
var custom = __webpack_require__("VtRA");

// CONCATENATED MODULE: ./pages/_app.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import App from 'next/app';




















function App({
  Component,
  pageProps
}) {
  const store = Object(external_react_redux_["useStore"])();

  const getLayout = Component.getLayout || (page => /*#__PURE__*/Object(jsx_runtime_["jsx"])(layouts_DefaultLayout, {
    children: page
  }));

  Object(external_react_["useEffect"])(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
  }, []);
  return getLayout( /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["PersistGate"], {
    persistor: store.__persistor,
    loading: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: "Loading"
    }),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  }));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (store_store["a" /* wrapper */].withRedux(App));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cqNT":
/***/ (function(module, exports) {



/***/ }),

/***/ "eDIf":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tf9W":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });