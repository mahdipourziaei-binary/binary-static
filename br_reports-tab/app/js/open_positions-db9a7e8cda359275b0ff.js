(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open_positions"],{

/***/ "./src/javascript/app_2/Modules/Reports/Components/empty-open-positions-message.jsx":
/*!******************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/empty-open-positions-message.jsx ***!
  \******************************************************************************************/
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

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app_2/Constants/index.js");

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _localize2 = __webpack_require__(/*! ../../../App/Components/Elements/localize.jsx */ "./src/javascript/app_2/App/Components/Elements/localize.jsx");

var _localize3 = _interopRequireDefault(_localize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyOpenPositionsMessage = function EmptyOpenPositionsMessage(_ref) {
    var has_selected_date = _ref.has_selected_date;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'empty-open-positions' },
            _react2.default.createElement(
                'span',
                { className: 'empty-open-positions__text' },
                !has_selected_date ? (0, _localize.localize)('Your account has no trading activity.') : (0, _localize.localize)('Your account has no trading activity for the selected period.')
            ),
            !has_selected_date && _react2.default.createElement(
                _Routes.ButtonLink,
                {
                    className: 'btn--secondary btn--secondary--orange',
                    to: _Constants.routes.trade
                },
                _react2.default.createElement(_localize3.default, { str: 'Trade now' })
            )
        )
    );
};

EmptyOpenPositionsMessage.propTypes = {
    has_selected_date: _propTypes2.default.bool
};

exports.default = EmptyOpenPositionsMessage;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _emptyOpenPositionsMessage = __webpack_require__(/*! ../Components/empty-open-positions-message.jsx */ "./src/javascript/app_2/Modules/Reports/Components/empty-open-positions-message.jsx");

var _emptyOpenPositionsMessage2 = _interopRequireDefault(_emptyOpenPositionsMessage);

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js");

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { getContractPath }                 from 'App/Components/Routes/helpers';


var OpenPositions = function (_React$Component) {
    _inherits(OpenPositions, _React$Component);

    function OpenPositions() {
        _classCallCheck(this, OpenPositions);

        return _possibleConstructorReturn(this, (OpenPositions.__proto__ || Object.getPrototypeOf(OpenPositions)).apply(this, arguments));
    }

    _createClass(OpenPositions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                active_positions = _props.active_positions,
                is_loading = _props.is_loading,
                error = _props.error,
                is_empty = _props.is_empty,
                currency = _props.currency,
                totals = _props.totals;


            if (error) {
                return _react2.default.createElement(
                    'p',
                    null,
                    error
                );
            }

            if (is_loading || !active_positions) {
                return _react2.default.createElement(_loading2.default, null);
            }

            if (is_empty) {
                return _react2.default.createElement(_emptyOpenPositionsMessage2.default, null);
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Open Positions'),
                    i18n_message: (0, _localize.localize)('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'open-positions open-positions__content' },
                    currency && active_positions.length > 0 && _react2.default.createElement(_DataTable2.default, {
                        className: 'open-positions',
                        columns: (0, _dataTableConstants.getOpenPositionsColumnsTemplate)(currency),
                        footer: totals,
                        data_source: active_positions,
                        getRowAction: undefined
                        // getRowAction={(row_obj) => getContractPath(row_obj.id)} TODO uncomment once smart-chart component is fixed.
                    })
                )
            );
        }
    }]);

    return OpenPositions;
}(_react2.default.Component);

OpenPositions.propTypes = {
    active_positions: _mobxReact.PropTypes.arrayOrObservableArray,
    currency: _propTypes2.default.string,
    error: _propTypes2.default.string,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_tablet: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    totals: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        client = _ref.client;
    return {
        currency: client.currency,
        active_positions: modules.portfolio.active_positions,
        error: modules.portfolio.error,
        is_empty: modules.portfolio.is_empty,
        is_loading: modules.portfolio.is_loading,
        onMount: modules.portfolio.onMount,
        onUnmount: modules.portfolio.onUnmount,
        totals: modules.portfolio.totals
    };
})((0, _reactRouterDom.withRouter)(OpenPositions));

/***/ })

}]);