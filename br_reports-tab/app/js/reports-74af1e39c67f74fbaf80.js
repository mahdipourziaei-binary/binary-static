(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports"],{

/***/ "./src/javascript/app_2/Modules/Reports/Containers/reports.jsx":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Containers/reports.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _verticalTab = __webpack_require__(/*! ../../../App/Components/Elements/VerticalTabs/vertical-tab.jsx */ "./src/javascript/app_2/App/Components/Elements/VerticalTabs/vertical-tab.jsx");

var _verticalTab2 = _interopRequireDefault(_verticalTab);

var _Settings = __webpack_require__(/*! ../../../Assets/Settings */ "./src/javascript/app_2/Assets/Settings/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_React$Component) {
    _inherits(Reports, _React$Component);

    function Reports() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Reports);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reports.__proto__ || Object.getPrototypeOf(Reports)).call.apply(_ref, [this].concat(args))), _this), _this.menu_options = function () {
            var options = [];

            _this.props.routes.forEach(function (route) {
                options.push({
                    default: route.default,
                    icon: route.icon_component,
                    label: route.title,
                    value: route.component,
                    path: route.path
                });
            });

            return options;
        }, _this.action_bar_items = [{
            onClick: function onClick() {
                _this.props.history.push(_routes2.default.trade);
            },
            icon: _Settings.IconClose,
            title: (0, _localize.localize)('Close')
        }], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Reports, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'reports' },
                _react2.default.createElement(_verticalTab2.default, {
                    header_title: (0, _localize.localize)('Reports'),
                    action_bar: this.action_bar_items,
                    alignment: 'center',
                    classNameHeader: 'reports__tab-header',
                    current_path: this.props.location.pathname,
                    is_routed: true,
                    is_full_width: true,
                    list: this.menu_options()
                })
            );
        }
    }]);

    return Reports;
}(_react2.default.Component);

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        is_mobile: ui.is_mobile
    };
})((0, _reactRouterDom.withRouter)(Reports));

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/index.js":
/*!*******************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reports = __webpack_require__(/*! ./Containers/reports.jsx */ "./src/javascript/app_2/Modules/Reports/Containers/reports.jsx");

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reports2.default;

/***/ })

}]);