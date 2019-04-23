(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open_positions"],{

/***/ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReportsMeta = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportsMeta = function ReportsMeta(_ref) {
    var i18n_heading = _ref.i18n_heading,
        i18n_message = _ref.i18n_message;
    return _react2.default.createElement(
        'div',
        { className: 'reports__meta' },
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-description' },
            _react2.default.createElement(
                'h1',
                { className: 'reports__meta-description--heading' },
                i18n_heading
            ),
            _react2.default.createElement(
                'p',
                { className: 'reports__meta-description--paragraph' },
                i18n_message
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-filter' },
            '[FILTER COMPONENT]'
        )
    );
};

exports.ReportsMeta = ReportsMeta;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Containers/open-positions.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Containers/open-positions.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Add proper messages before the PR
var OpenPositions = function OpenPositions() {
    return _react2.default.createElement(_reportsMeta.ReportsMeta, {
        i18n_heading: (0, _localize.localize)('Open Positions'),
        i18n_message: (0, _localize.localize)('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')
    });
};

exports.default = OpenPositions;

/***/ })

}]);