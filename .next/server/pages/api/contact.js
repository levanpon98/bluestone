"use strict";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);


const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(MONGODB_DB);
  return next();
}

const middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();
middleware.use(database);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);

/***/ }),

/***/ "./pages/api/contact.jsx":
/*!*******************************!*\
  !*** ./pages/api/contact.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/mongodb */ "./lib/mongodb.js");



const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.default);
handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  await req.db.collection('config').updateOne({
    name: 'contact'
  }, {
    $set: data
  });
  return res.status(200).json({
    message: "OK",
    status: 200,
    success: true
  });
});
handler.get(async (req, res) => {
  const contact = await req.db.collection('config').findOne({
    name: 'contact'
  });

  if (contact) {
    return res.status(200).json({
      data: contact,
      message: "OK",
      status: 200,
      success: true
    });
  } else {
    return res.status(400).json({
      status: 400,
      success: false
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUl4QkcsTUFBQUEsT0FBTyxFQUFFO0FBSmUsS0FBckIsQ0FBUDtBQU1ILEdBUEQsTUFPTztBQUNILFdBQU94QixHQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJELE1BQUFBLE1BQU0sRUFBRSxHQURnQjtBQUV4QkcsTUFBQUEsT0FBTyxFQUFFO0FBRmUsS0FBckIsQ0FBUDtBQUlIO0FBRUosQ0FqQkQ7QUFvQkEsaUVBQWViLE9BQWY7Ozs7Ozs7Ozs7QUN6Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9obXNwX3JlYWN0Ly4vbGliL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vaG1zcF9yZWFjdC8uL3BhZ2VzL2FwaS9jb250YWN0LmpzeCIsIndlYnBhY2s6Ly9obXNwX3JlYWN0L2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9obXNwX3JlYWN0L2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vaG1zcF9yZWFjdC9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly9obXNwX3JlYWN0L2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREJcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG5pZiAoIU1PTkdPREJfREIpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UocmVxLCByZXMsIG5leHQpIHtcclxuICBpZiAoIWNsaWVudC5pc0Nvbm5lY3RlZCgpKSBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gIHJlcS5kYkNsaWVudCA9IGNsaWVudDtcclxuICByZXEuZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XHJcbiAgcmV0dXJuIG5leHQoKTtcclxufVxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxubWlkZGxld2FyZS51c2UoZGF0YWJhc2UpO1xyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlOyIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICd+L2xpYi9tb25nb2RiJztcclxuXHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5cclxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ2NvbmZpZycpLnVwZGF0ZU9uZSh7bmFtZTogJ2NvbnRhY3QnfSwgeyRzZXQ6ZGF0YX0pXHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiBcIk9LXCIsXHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgIH0pXHJcbn0pXHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignY29uZmlnJykuZmluZE9uZSh7bmFtZTogJ2NvbnRhY3QnfSlcclxuXHJcbiAgICBpZiAoY29udGFjdCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIGRhdGE6IGNvbnRhY3QsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiT0tcIixcclxuICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIm5leHRDb25uZWN0IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkVycm9yIiwiY2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiZGJDbGllbnQiLCJkYiIsIm1pZGRsZXdhcmUiLCJ1c2UiLCJiY3J5cHQiLCJyZXF1aXJlIiwiand0IiwiaGFuZGxlciIsInBvc3QiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImNvbGxlY3Rpb24iLCJ1cGRhdGVPbmUiLCJuYW1lIiwiJHNldCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsImdldCIsImNvbnRhY3QiLCJmaW5kT25lIl0sInNvdXJjZVJvb3QiOiIifQ==