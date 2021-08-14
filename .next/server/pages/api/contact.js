module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"./node_modules/next-connect/dist/index.cjs\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.MONGODB_DB;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](MONGODB_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\nasync function database(req, res, next) {\n  if (!client.isConnected()) await client.connect();\n  req.dbClient = client;\n  req.db = client.db(MONGODB_DB);\n  return next();\n}\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddleware.use(database);\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9mYjY2Il0sIm5hbWVzIjpbIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREIiLCJFcnJvciIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiZGJDbGllbnQiLCJkYiIsIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQS9COztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlJLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEOztBQUVELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFnQk4sV0FBaEIsRUFBNkI7QUFDMUNPLGlCQUFlLEVBQUUsSUFEeUI7QUFFMUNDLG9CQUFrQixFQUFFO0FBRnNCLENBQTdCLENBQWY7O0FBS0EsZUFBZUMsUUFBZixDQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUN0QyxNQUFJLENBQUNQLE1BQU0sQ0FBQ1EsV0FBUCxFQUFMLEVBQTJCLE1BQU1SLE1BQU0sQ0FBQ1MsT0FBUCxFQUFOO0FBQzNCSixLQUFHLENBQUNLLFFBQUosR0FBZVYsTUFBZjtBQUNBSyxLQUFHLENBQUNNLEVBQUosR0FBU1gsTUFBTSxDQUFDVyxFQUFQLENBQVViLFVBQVYsQ0FBVDtBQUNBLFNBQU9TLElBQUksRUFBWDtBQUNEOztBQUNELE1BQU1LLFVBQVUsR0FBR0MsbURBQVcsRUFBOUI7QUFDQUQsVUFBVSxDQUFDRSxHQUFYLENBQWVWLFFBQWY7QUFDZVEseUVBQWYiLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQlxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoTU9OR09EQl9VUkksIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKCFjbGllbnQuaXNDb25uZWN0ZWQoKSkgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgcmVxLmRiQ2xpZW50ID0gY2xpZW50O1xuICByZXEuZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG4gIHJldHVybiBuZXh0KCk7XG59XG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcbm1pZGRsZXdhcmUudXNlKGRhdGFiYXNlKTtcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./node_modules/next-connect/dist/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/next-connect/dist/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Trouter = __webpack_require__(/*! trouter */ \"trouter\");\n\nconst onerror = (err, req, res) =>\n  (res.statusCode = err.status || 500) && res.end(err.message);\nconst isResSent = (res) => res.finished || res.headersSent || res.writableEnded;\nconst mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);\n\nmodule.exports = function factory({\n  onError = onerror,\n  onNoMatch = onerror.bind(null, { status: 404, message: \"not found\" }),\n  attachParams = false,\n} = {}) {\n  function nc(req, res) {\n    return nc.run(req, res).then(\n      () => !isResSent(res) && onNoMatch(req, res),\n      (err) => onError(err, req, res)\n    );\n  }\n  nc.routes = [];\n  const _use = Trouter.prototype.use.bind(nc);\n  const _find = Trouter.prototype.find.bind(nc);\n  const _add = Trouter.prototype.add.bind(nc);\n  function add(method, base, ...fns) {\n    if (typeof base !== \"string\") return add(method, \"*\", base, ...fns);\n    _add(method, base, ...fns);\n    return nc;\n  }\n  nc.use = function use(base, ...fns) {\n    if (typeof base !== \"string\") return this.use(\"/\", base, ...fns);\n    if (base !== \"/\") {\n      let slashAdded = false;\n      fns.unshift((req, _, next) => {\n        req.url = req.url.substring(base.length);\n        if ((slashAdded = req.url[0] !== \"/\")) req.url = \"/\" + req.url;\n        next();\n      });\n      fns.push(\n        (req, _, next) =>\n          (req.url = base + (slashAdded ? req.url.substring(1) : req.url)) &&\n          next()\n      );\n    }\n    _use(base, ...fns.map(mount));\n    return nc;\n  };\n  nc.all = add.bind(nc, \"\");\n  nc.get = add.bind(nc, \"GET\");\n  nc.head = add.bind(nc, \"HEAD\");\n  nc.post = add.bind(nc, \"POST\");\n  nc.put = add.bind(nc, \"PUT\");\n  nc.delete = add.bind(nc, \"DELETE\");\n  nc.options = add.bind(nc, \"OPTIONS\");\n  nc.trace = add.bind(nc, \"TRACE\");\n  nc.patch = add.bind(nc, \"PATCH\");\n  nc.run = function run(req, res) {\n    return new Promise((resolve, reject) => {\n      this.handle(req, res, (err) => (err ? reject(err) : resolve()));\n    });\n  };\n  nc.handle = function handle(req, res, done) {\n    const idx = req.url.indexOf(\"?\");\n    const { handlers, params } = _find(\n      req.method,\n      idx !== -1 ? req.url.substring(0, idx) : req.url\n    );\n    if (attachParams) req.params = params;\n    let i = 0;\n    const len = handlers.length;\n    const loop = async (next) => handlers[i++](req, res, next);\n    const next = (err) => {\n      i < len\n        ? err\n          ? onError(err, req, res, next)\n          : loop(next).catch(next)\n        : done && done(err);\n    };\n    next();\n  };\n  return nc;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC1jb25uZWN0L2Rpc3QvaW5kZXguY2pzPzAwMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQtY29ubmVjdC9kaXN0L2luZGV4LmNqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRyb3V0ZXIgPSByZXF1aXJlKCd0cm91dGVyJyk7XG5cbmNvbnN0IG9uZXJyb3IgPSAoZXJyLCByZXEsIHJlcykgPT5cbiAgKHJlcy5zdGF0dXNDb2RlID0gZXJyLnN0YXR1cyB8fCA1MDApICYmIHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xuY29uc3QgaXNSZXNTZW50ID0gKHJlcykgPT4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudCB8fCByZXMud3JpdGFibGVFbmRlZDtcbmNvbnN0IG1vdW50ID0gKGZuKSA9PiAoZm4ucm91dGVzID8gZm4uaGFuZGxlLmJpbmQoZm4pIDogZm4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhY3Rvcnkoe1xuICBvbkVycm9yID0gb25lcnJvcixcbiAgb25Ob01hdGNoID0gb25lcnJvci5iaW5kKG51bGwsIHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6IFwibm90IGZvdW5kXCIgfSksXG4gIGF0dGFjaFBhcmFtcyA9IGZhbHNlLFxufSA9IHt9KSB7XG4gIGZ1bmN0aW9uIG5jKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5jLnJ1bihyZXEsIHJlcykudGhlbihcbiAgICAgICgpID0+ICFpc1Jlc1NlbnQocmVzKSAmJiBvbk5vTWF0Y2gocmVxLCByZXMpLFxuICAgICAgKGVycikgPT4gb25FcnJvcihlcnIsIHJlcSwgcmVzKVxuICAgICk7XG4gIH1cbiAgbmMucm91dGVzID0gW107XG4gIGNvbnN0IF91c2UgPSBUcm91dGVyLnByb3RvdHlwZS51c2UuYmluZChuYyk7XG4gIGNvbnN0IF9maW5kID0gVHJvdXRlci5wcm90b3R5cGUuZmluZC5iaW5kKG5jKTtcbiAgY29uc3QgX2FkZCA9IFRyb3V0ZXIucHJvdG90eXBlLmFkZC5iaW5kKG5jKTtcbiAgZnVuY3Rpb24gYWRkKG1ldGhvZCwgYmFzZSwgLi4uZm5zKSB7XG4gICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gYWRkKG1ldGhvZCwgXCIqXCIsIGJhc2UsIC4uLmZucyk7XG4gICAgX2FkZChtZXRob2QsIGJhc2UsIC4uLmZucyk7XG4gICAgcmV0dXJuIG5jO1xuICB9XG4gIG5jLnVzZSA9IGZ1bmN0aW9uIHVzZShiYXNlLCAuLi5mbnMpIHtcbiAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLnVzZShcIi9cIiwgYmFzZSwgLi4uZm5zKTtcbiAgICBpZiAoYmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIGxldCBzbGFzaEFkZGVkID0gZmFsc2U7XG4gICAgICBmbnMudW5zaGlmdCgocmVxLCBfLCBuZXh0KSA9PiB7XG4gICAgICAgIHJlcS51cmwgPSByZXEudXJsLnN1YnN0cmluZyhiYXNlLmxlbmd0aCk7XG4gICAgICAgIGlmICgoc2xhc2hBZGRlZCA9IHJlcS51cmxbMF0gIT09IFwiL1wiKSkgcmVxLnVybCA9IFwiL1wiICsgcmVxLnVybDtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgICBmbnMucHVzaChcbiAgICAgICAgKHJlcSwgXywgbmV4dCkgPT5cbiAgICAgICAgICAocmVxLnVybCA9IGJhc2UgKyAoc2xhc2hBZGRlZCA/IHJlcS51cmwuc3Vic3RyaW5nKDEpIDogcmVxLnVybCkpICYmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICApO1xuICAgIH1cbiAgICBfdXNlKGJhc2UsIC4uLmZucy5tYXAobW91bnQpKTtcbiAgICByZXR1cm4gbmM7XG4gIH07XG4gIG5jLmFsbCA9IGFkZC5iaW5kKG5jLCBcIlwiKTtcbiAgbmMuZ2V0ID0gYWRkLmJpbmQobmMsIFwiR0VUXCIpO1xuICBuYy5oZWFkID0gYWRkLmJpbmQobmMsIFwiSEVBRFwiKTtcbiAgbmMucG9zdCA9IGFkZC5iaW5kKG5jLCBcIlBPU1RcIik7XG4gIG5jLnB1dCA9IGFkZC5iaW5kKG5jLCBcIlBVVFwiKTtcbiAgbmMuZGVsZXRlID0gYWRkLmJpbmQobmMsIFwiREVMRVRFXCIpO1xuICBuYy5vcHRpb25zID0gYWRkLmJpbmQobmMsIFwiT1BUSU9OU1wiKTtcbiAgbmMudHJhY2UgPSBhZGQuYmluZChuYywgXCJUUkFDRVwiKTtcbiAgbmMucGF0Y2ggPSBhZGQuYmluZChuYywgXCJQQVRDSFwiKTtcbiAgbmMucnVuID0gZnVuY3Rpb24gcnVuKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlKHJlcSwgcmVzLCAoZXJyKSA9PiAoZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKCkpKTtcbiAgICB9KTtcbiAgfTtcbiAgbmMuaGFuZGxlID0gZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzLCBkb25lKSB7XG4gICAgY29uc3QgaWR4ID0gcmVxLnVybC5pbmRleE9mKFwiP1wiKTtcbiAgICBjb25zdCB7IGhhbmRsZXJzLCBwYXJhbXMgfSA9IF9maW5kKFxuICAgICAgcmVxLm1ldGhvZCxcbiAgICAgIGlkeCAhPT0gLTEgPyByZXEudXJsLnN1YnN0cmluZygwLCBpZHgpIDogcmVxLnVybFxuICAgICk7XG4gICAgaWYgKGF0dGFjaFBhcmFtcykgcmVxLnBhcmFtcyA9IHBhcmFtcztcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuID0gaGFuZGxlcnMubGVuZ3RoO1xuICAgIGNvbnN0IGxvb3AgPSBhc3luYyAobmV4dCkgPT4gaGFuZGxlcnNbaSsrXShyZXEsIHJlcywgbmV4dCk7XG4gICAgY29uc3QgbmV4dCA9IChlcnIpID0+IHtcbiAgICAgIGkgPCBsZW5cbiAgICAgICAgPyBlcnJcbiAgICAgICAgICA/IG9uRXJyb3IoZXJyLCByZXEsIHJlcywgbmV4dClcbiAgICAgICAgICA6IGxvb3AobmV4dCkuY2F0Y2gobmV4dClcbiAgICAgICAgOiBkb25lICYmIGRvbmUoZXJyKTtcbiAgICB9O1xuICAgIG5leHQoKTtcbiAgfTtcbiAgcmV0dXJuIG5jO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next-connect/dist/index.cjs\n");

/***/ }),

/***/ "./pages/api/contact.jsx":
/*!*******************************!*\
  !*** ./pages/api/contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"./node_modules/next-connect/dist/index.cjs\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/mongodb */ \"./lib/mongodb.js\");\n\n\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.post(async (req, res) => {\n  let data = req.body;\n  data = JSON.parse(data);\n  await req.db.collection('config').updateOne({\n    name: 'contact'\n  }, {\n    $set: data\n  });\n  return res.status(200).json({\n    message: \"OK\",\n    status: 200,\n    success: true\n  });\n});\nhandler.get(async (req, res) => {\n  const contact = await req.db.collection('config').findOne({\n    name: 'contact'\n  });\n\n  if (contact) {\n    return res.status(200).json({\n      data: contact,\n      message: \"OK\",\n      status: 200,\n      success: true\n    });\n  } else {\n    return res.status(400).json({\n      status: 400,\n      success: false\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qc3g/MmQ3ZCJdLCJuYW1lcyI6WyJiY3J5cHQiLCJyZXF1aXJlIiwiand0IiwiaGFuZGxlciIsIm5leHRDb25uZWN0IiwidXNlIiwibWlkZGxld2FyZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImRiIiwiY29sbGVjdGlvbiIsInVwZGF0ZU9uZSIsIm5hbWUiLCIkc2V0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZ2V0IiwiY29udGFjdCIsImZpbmRPbmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUNBLE1BQU1FLE9BQU8sR0FBR0MsbURBQVcsRUFBM0I7QUFFQUQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLG9EQUFaO0FBRUFILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUM3QixNQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBZjtBQUNBRCxNQUFJLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDQSxRQUFNRixHQUFHLENBQUNNLEVBQUosQ0FBT0MsVUFBUCxDQUFrQixRQUFsQixFQUE0QkMsU0FBNUIsQ0FBc0M7QUFBQ0MsUUFBSSxFQUFFO0FBQVAsR0FBdEMsRUFBeUQ7QUFBQ0MsUUFBSSxFQUFDUjtBQUFOLEdBQXpELENBQU47QUFFQSxTQUFPRCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QkMsV0FBTyxFQUFFLElBRGU7QUFFeEJGLFVBQU0sRUFBRSxHQUZnQjtBQUd4QkcsV0FBTyxFQUFFO0FBSGUsR0FBckIsQ0FBUDtBQUtILENBVkQ7QUFZQW5CLE9BQU8sQ0FBQ29CLEdBQVIsQ0FBWSxPQUFPZixHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDNUIsUUFBTWUsT0FBTyxHQUFHLE1BQU1oQixHQUFHLENBQUNNLEVBQUosQ0FBT0MsVUFBUCxDQUFrQixRQUFsQixFQUE0QlUsT0FBNUIsQ0FBb0M7QUFBQ1IsUUFBSSxFQUFFO0FBQVAsR0FBcEMsQ0FBdEI7O0FBRUEsTUFBSU8sT0FBSixFQUFhO0FBQ1QsV0FBT2YsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJWLFVBQUksRUFBRWMsT0FEa0I7QUFFeEJILGFBQU8sRUFBRSxJQUZlO0FBR3hCRixZQUFNLEVBQUUsR0FIZ0I7QUFJeEJHLGFBQU8sRUFBRTtBQUplLEtBQXJCLENBQVA7QUFNSCxHQVBELE1BT087QUFDSCxXQUFPYixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QkQsWUFBTSxFQUFFLEdBRGdCO0FBRXhCRyxhQUFPLEVBQUU7QUFGZSxLQUFyQixDQUFQO0FBSUg7QUFFSixDQWpCRDtBQW9CZW5CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICd+L2xpYi9tb25nb2RiJztcblxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XG5cbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IGRhdGEgPSByZXEuYm9keTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignY29uZmlnJykudXBkYXRlT25lKHtuYW1lOiAnY29udGFjdCd9LCB7JHNldDpkYXRhfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgfSlcbn0pXG5cbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignY29uZmlnJykuZmluZE9uZSh7bmFtZTogJ2NvbnRhY3QnfSlcblxuICAgIGlmIChjb250YWN0KSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiBjb250YWN0LFxuICAgICAgICAgICAgbWVzc2FnZTogXCJPS1wiLFxuICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.jsx\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "trouter":
/*!**************************!*\
  !*** external "trouter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"trouter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cm91dGVyXCI/Y2FlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0cm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///trouter\n");

/***/ })

/******/ });