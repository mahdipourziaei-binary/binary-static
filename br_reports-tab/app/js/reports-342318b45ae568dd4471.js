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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _verticalTab = __webpack_require__(/*! ../../../App/Components/Elements/VerticalTabs/vertical-tab.jsx */ "./src/javascript/app_2/App/Components/Elements/VerticalTabs/vertical-tab.jsx");

var _verticalTab2 = _interopRequireDefault(_verticalTab);

var _Settings = __webpack_require__(/*! ../../../Assets/Settings */ "./src/javascript/app_2/Assets/Settings/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app_2/Constants/routes.js");

var AppRoutes = _interopRequireWildcard(_routes);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reports = function Reports(_ref) {
    var routes = _ref.routes,
        location = _ref.location,
        history = _ref.history;

    var menu_options = function menu_options() {
        var options = [];

        routes.forEach(function (route) {
            options.push({
                default: route.default,
                icon: route.icon_component,
                label: route.title,
                value: route.component,
                path: route.path
            });
        });

        return options;
    };

    var action_bar_items = [{
        onClick: function onClick() {
            history.push(AppRoutes.trade);
        },
        icon: _Settings.IconClose,
        title: (0, _localize.localize)('Close')
    }];

    return _react2.default.createElement(
        'div',
        { className: 'reports' },
        _react2.default.createElement(_verticalTab2.default, {
            header_title: (0, _localize.localize)('Reports'),
            action_bar: action_bar_items,
            alignment: 'center',
            classNameHeader: 'reports__tab-header',
            current_path: location.pathname,
            is_routed: true,
            is_full_width: true,
            list: menu_options()
        })
    );
};

Reports.propTypes = {
    history: _propTypes2.default.object,
    location: _propTypes2.default.object,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = (0, _reactRouterDom.withRouter)(Reports);

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