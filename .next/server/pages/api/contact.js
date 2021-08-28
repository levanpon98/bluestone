"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.MONGODB_DB;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\nasync function database(req, res, next) {\n  if (!client.isConnected()) await client.connect();\n  req.dbClient = client;\n  req.db = client.db(MONGODB_DB);\n  return next();\n}\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddleware.use(database);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQS9COztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlJLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEOztBQUVELE1BQU1DLE1BQU0sR0FBRyxJQUFJUCxnREFBSixDQUFnQkUsV0FBaEIsRUFBNkI7QUFDMUNNLEVBQUFBLGVBQWUsRUFBRSxJQUR5QjtBQUUxQ0MsRUFBQUEsa0JBQWtCLEVBQUU7QUFGc0IsQ0FBN0IsQ0FBZjs7QUFLQSxlQUFlQyxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0NDLElBQWxDLEVBQXdDO0FBQ3RDLE1BQUksQ0FBQ04sTUFBTSxDQUFDTyxXQUFQLEVBQUwsRUFBMkIsTUFBTVAsTUFBTSxDQUFDUSxPQUFQLEVBQU47QUFDM0JKLEVBQUFBLEdBQUcsQ0FBQ0ssUUFBSixHQUFlVCxNQUFmO0FBQ0FJLEVBQUFBLEdBQUcsQ0FBQ00sRUFBSixHQUFTVixNQUFNLENBQUNVLEVBQVAsQ0FBVVosVUFBVixDQUFUO0FBQ0EsU0FBT1EsSUFBSSxFQUFYO0FBQ0Q7O0FBQ0QsTUFBTUssVUFBVSxHQUFHakIsbURBQVcsRUFBOUI7QUFDQWlCLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlVCxRQUFmO0FBQ0EsaUVBQWVRLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9obXNwX3JlYWN0Ly4vbGliL21vbmdvZGIuanM/ZmI2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREJcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbmlmICghTU9OR09EQl9EQikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KE1PTkdPREJfVVJJLCB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRhdGFiYXNlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIGlmICghY2xpZW50LmlzQ29ubmVjdGVkKCkpIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIHJlcS5kYkNsaWVudCA9IGNsaWVudDtcbiAgcmVxLmRiID0gY2xpZW50LmRiKE1PTkdPREJfREIpO1xuICByZXR1cm4gbmV4dCgpO1xufVxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XG5taWRkbGV3YXJlLnVzZShkYXRhYmFzZSk7XG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIm5leHRDb25uZWN0IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkVycm9yIiwiY2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiZGJDbGllbnQiLCJkYiIsIm1pZGRsZXdhcmUiLCJ1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./pages/api/contact.jsx":
/*!*******************************!*\
  !*** ./pages/api/contact.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/mongodb */ \"./lib/mongodb.js\");\n\n\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.default);\nhandler.post(async (req, res) => {\n  let data = req.body;\n  data = JSON.parse(data);\n  await req.db.collection('config').updateOne({\n    name: 'contact'\n  }, {\n    $set: data\n  });\n  return res.status(200).json({\n    message: \"OK\",\n    status: 200,\n    success: true\n  });\n});\nhandler.get(async (req, res) => {\n  const contact = await req.db.collection('config').findOne({\n    name: 'contact'\n  });\n\n  if (contact) {\n    return res.status(200).json({\n      data: contact,\n      message: \"OK\",\n      status: 200,\n      success: true\n    });\n  } else {\n    return res.status(400).json({\n      status: 400,\n      success: false\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXRCOztBQUNBLE1BQU1DLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFuQjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdMLG1EQUFXLEVBQTNCO0FBRUFLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxpREFBWjtBQUVBSSxPQUFPLENBQUNFLElBQVIsQ0FBYSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDN0IsTUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWY7QUFDQUQsRUFBQUEsSUFBSSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBWCxDQUFQO0FBQ0EsUUFBTUYsR0FBRyxDQUFDTSxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsUUFBbEIsRUFBNEJDLFNBQTVCLENBQXNDO0FBQUNDLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQXRDLEVBQXlEO0FBQUNDLElBQUFBLElBQUksRUFBQ1I7QUFBTixHQUF6RCxDQUFOO0FBRUEsU0FBT0QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJDLElBQUFBLE9BQU8sRUFBRSxJQURlO0FBRXhCRixJQUFBQSxNQUFNLEVBQUUsR0FGZ0I7QUFHeEJHLElBQUFBLE9BQU8sRUFBRTtBQUhlLEdBQXJCLENBQVA7QUFLSCxDQVZEO0FBWUFqQixPQUFPLENBQUNrQixHQUFSLENBQVksT0FBT2YsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzVCLFFBQU1lLE9BQU8sR0FBRyxNQUFNaEIsR0FBRyxDQUFDTSxFQUFKLENBQU9DLFVBQVAsQ0FBa0IsUUFBbEIsRUFBNEJVLE9BQTVCLENBQW9DO0FBQUNSLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQXBDLENBQXRCOztBQUVBLE1BQUlPLE9BQUosRUFBYTtBQUNULFdBQU9mLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3hCVixNQUFBQSxJQUFJLEVBQUVjLE9BRGtCO0FBRXhCSCxNQUFBQSxPQUFPLEVBQUUsSUFGZTtBQUd4QkYsTUFBQUEsTUFBTSxFQUFFLEdBSGdCO0FBSXhCRyxNQUFBQSxPQUFPLEVBQUU7QUFKZSxLQUFyQixDQUFQO0FBTUgsR0FQRCxNQU9PO0FBQ0gsV0FBT2IsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJELE1BQUFBLE1BQU0sRUFBRSxHQURnQjtBQUV4QkcsTUFBQUEsT0FBTyxFQUFFO0FBRmUsS0FBckIsQ0FBUDtBQUlIO0FBRUosQ0FqQkQ7QUFvQkEsaUVBQWVqQixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG1zcF9yZWFjdC8uL3BhZ2VzL2FwaS9jb250YWN0LmpzeD8yZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnfi9saWIvbW9uZ29kYic7XG5cbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xuXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKTtcblxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBkYXRhID0gcmVxLmJvZHk7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ2NvbmZpZycpLnVwZGF0ZU9uZSh7bmFtZTogJ2NvbnRhY3QnfSwgeyRzZXQ6ZGF0YX0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcIk9LXCIsXG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgIH0pXG59KVxuXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ2NvbmZpZycpLmZpbmRPbmUoe25hbWU6ICdjb250YWN0J30pXG5cbiAgICBpZiAoY29udGFjdCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgZGF0YTogY29udGFjdCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsibmV4dENvbm5lY3QiLCJtaWRkbGV3YXJlIiwiYmNyeXB0IiwicmVxdWlyZSIsImp3dCIsImhhbmRsZXIiLCJ1c2UiLCJwb3N0IiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJ1cGRhdGVPbmUiLCJuYW1lIiwiJHNldCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsImdldCIsImNvbnRhY3QiLCJmaW5kT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.jsx\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.jsx"));
module.exports = __webpack_exports__;

})();