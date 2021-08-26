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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.MONGODB_DB;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](MONGODB_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\nasync function database(req, res, next) {\n  if (!client.isConnected()) await client.connect();\n  req.dbClient = client;\n  req.db = client.db(MONGODB_DB);\n  return next();\n}\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddleware.use(database);\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9mYjY2Il0sIm5hbWVzIjpbIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREIiLCJFcnJvciIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiZGJDbGllbnQiLCJkYiIsIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQS9COztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlJLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEOztBQUVELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFnQk4sV0FBaEIsRUFBNkI7QUFDMUNPLGlCQUFlLEVBQUUsSUFEeUI7QUFFMUNDLG9CQUFrQixFQUFFO0FBRnNCLENBQTdCLENBQWY7O0FBS0EsZUFBZUMsUUFBZixDQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUN0QyxNQUFJLENBQUNQLE1BQU0sQ0FBQ1EsV0FBUCxFQUFMLEVBQTJCLE1BQU1SLE1BQU0sQ0FBQ1MsT0FBUCxFQUFOO0FBQzNCSixLQUFHLENBQUNLLFFBQUosR0FBZVYsTUFBZjtBQUNBSyxLQUFHLENBQUNNLEVBQUosR0FBU1gsTUFBTSxDQUFDVyxFQUFQLENBQVViLFVBQVYsQ0FBVDtBQUNBLFNBQU9TLElBQUksRUFBWDtBQUNEOztBQUNELE1BQU1LLFVBQVUsR0FBR0MsbURBQVcsRUFBOUI7QUFDQUQsVUFBVSxDQUFDRSxHQUFYLENBQWVWLFFBQWY7QUFDZVEseUVBQWYiLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQlxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoTU9OR09EQl9VUkksIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKCFjbGllbnQuaXNDb25uZWN0ZWQoKSkgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgcmVxLmRiQ2xpZW50ID0gY2xpZW50O1xuICByZXEuZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG4gIHJldHVybiBuZXh0KCk7XG59XG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcbm1pZGRsZXdhcmUudXNlKGRhdGFiYXNlKTtcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./pages/api/contact.jsx":
/*!*******************************!*\
  !*** ./pages/api/contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/mongodb */ \"./lib/mongodb.js\");\n\n\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.post(async (req, res) => {\n  let data = req.body;\n  data = JSON.parse(data);\n  await req.db.collection('config').updateOne({\n    name: 'contact'\n  }, {\n    $set: data\n  });\n  return res.status(200).json({\n    message: \"OK\",\n    status: 200,\n    success: true\n  });\n});\nhandler.get(async (req, res) => {\n  const contact = await req.db.collection('config').findOne({\n    name: 'contact'\n  });\n\n  if (contact) {\n    return res.status(200).json({\n      data: contact,\n      message: \"OK\",\n      status: 200,\n      success: true\n    });\n  } else {\n    return res.status(400).json({\n      status: 400,\n      success: false\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qc3g/MmQ3ZCJdLCJuYW1lcyI6WyJiY3J5cHQiLCJyZXF1aXJlIiwiand0IiwiaGFuZGxlciIsIm5leHRDb25uZWN0IiwidXNlIiwibWlkZGxld2FyZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImRiIiwiY29sbGVjdGlvbiIsInVwZGF0ZU9uZSIsIm5hbWUiLCIkc2V0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZ2V0IiwiY29udGFjdCIsImZpbmRPbmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUNBLE1BQU1FLE9BQU8sR0FBR0MsbURBQVcsRUFBM0I7QUFFQUQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLG9EQUFaO0FBRUFILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUM3QixNQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBZjtBQUNBRCxNQUFJLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDQSxRQUFNRixHQUFHLENBQUNNLEVBQUosQ0FBT0MsVUFBUCxDQUFrQixRQUFsQixFQUE0QkMsU0FBNUIsQ0FBc0M7QUFBQ0MsUUFBSSxFQUFFO0FBQVAsR0FBdEMsRUFBeUQ7QUFBQ0MsUUFBSSxFQUFDUjtBQUFOLEdBQXpELENBQU47QUFFQSxTQUFPRCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QkMsV0FBTyxFQUFFLElBRGU7QUFFeEJGLFVBQU0sRUFBRSxHQUZnQjtBQUd4QkcsV0FBTyxFQUFFO0FBSGUsR0FBckIsQ0FBUDtBQUtILENBVkQ7QUFZQW5CLE9BQU8sQ0FBQ29CLEdBQVIsQ0FBWSxPQUFPZixHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDNUIsUUFBTWUsT0FBTyxHQUFHLE1BQU1oQixHQUFHLENBQUNNLEVBQUosQ0FBT0MsVUFBUCxDQUFrQixRQUFsQixFQUE0QlUsT0FBNUIsQ0FBb0M7QUFBQ1IsUUFBSSxFQUFFO0FBQVAsR0FBcEMsQ0FBdEI7O0FBRUEsTUFBSU8sT0FBSixFQUFhO0FBQ1QsV0FBT2YsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJWLFVBQUksRUFBRWMsT0FEa0I7QUFFeEJILGFBQU8sRUFBRSxJQUZlO0FBR3hCRixZQUFNLEVBQUUsR0FIZ0I7QUFJeEJHLGFBQU8sRUFBRTtBQUplLEtBQXJCLENBQVA7QUFNSCxHQVBELE1BT087QUFDSCxXQUFPYixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QkQsWUFBTSxFQUFFLEdBRGdCO0FBRXhCRyxhQUFPLEVBQUU7QUFGZSxLQUFyQixDQUFQO0FBSUg7QUFFSixDQWpCRDtBQW9CZW5CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICd+L2xpYi9tb25nb2RiJztcblxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XG5cbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IGRhdGEgPSByZXEuYm9keTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignY29uZmlnJykudXBkYXRlT25lKHtuYW1lOiAnY29udGFjdCd9LCB7JHNldDpkYXRhfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgfSlcbn0pXG5cbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignY29uZmlnJykuZmluZE9uZSh7bmFtZTogJ2NvbnRhY3QnfSlcblxuICAgIGlmIChjb250YWN0KSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiBjb250YWN0LFxuICAgICAgICAgICAgbWVzc2FnZTogXCJPS1wiLFxuICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.jsx\n");

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

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });