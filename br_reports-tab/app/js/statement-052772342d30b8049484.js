(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statement"],{

/***/ "./src/javascript/app_2/Modules/Reports/Components/empty-statement-message.jsx":
/*!*************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/empty-statement-message.jsx ***!
  \*************************************************************************************/
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

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _iconStatement = __webpack_require__(/*! ../../../Assets/Reports/icon-statement.jsx */ "./src/javascript/app_2/Assets/Reports/icon-statement.jsx");

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app_2/Constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyStatementMessage = function EmptyStatementMessage(_ref) {
    var has_selected_date = _ref.has_selected_date;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'statement-empty' },
            _react2.default.createElement(_Common.Icon, { icon: _iconStatement.IconStatement, className: 'statement-empty__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'statement-empty__text' },
                !has_selected_date ? (0, _localize.localize)('Your account has no trading activity.') : (0, _localize.localize)('Your account has no trading activity for the selected period.')
            ),
            !has_selected_date && _react2.default.createElement(
                _Routes.ButtonLink,
                {
                    className: 'btn--secondary btn--secondary--orange',
                    to: _Constants.routes.trade
                },
                _react2.default.createElement(
                    'span',
                    null,
                    (0, _localize.localize)('Trade now')
                )
            )
        )
    );
};

EmptyStatementMessage.propTypes = {
    has_selected_date: _propTypes2.default.bool
};

exports.default = EmptyStatementMessage;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx ***!
  \***********************************************************************************/
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

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceholderComponent = function PlaceholderComponent(props) {
    var EmptyMessageComponent = props.empty_message_component;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.is_empty && _react2.default.createElement(EmptyMessageComponent, { has_selected_date: props.has_selected_date }),
        props.is_loading && _react2.default.createElement(_loading2.default, null)
    );
};

PlaceholderComponent.propTypes = {
    empty_message_component: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool
};

exports.default = PlaceholderComponent;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Containers/statement.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Containers/statement.jsx ***!
  \***********************************************************************/
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

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _emptyStatementMessage = __webpack_require__(/*! ../Components/empty-statement-message.jsx */ "./src/javascript/app_2/Modules/Reports/Components/empty-statement-message.jsx");

var _emptyStatementMessage2 = _interopRequireDefault(_emptyStatementMessage);

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js");

var _placeholderComponent = __webpack_require__(/*! ../Components/placeholder-component.jsx */ "./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx");

var _placeholderComponent2 = _interopRequireDefault(_placeholderComponent);

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statement = function (_React$Component) {
    _inherits(Statement, _React$Component);

    function Statement() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Statement);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statement.__proto__ || Object.getPrototypeOf(Statement)).call.apply(_ref, [this].concat(args))), _this), _this.getRowAction = function (row_obj) {
            var action = void 0;

            if (row_obj.id && ['buy', 'sell'].includes(row_obj.action_type)) {
                action = (0, _helpers.getContractPath)(row_obj.id);
            } else if (['deposit', 'withdrawal'].includes(row_obj.action_type)) {
                action = {
                    message: row_obj.desc
                };
            }

            return action;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Statement, [{
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
                data = _props.data,
                is_empty = _props.is_empty,
                is_loading = _props.is_loading,
                error = _props.error,
                handleScroll = _props.handleScroll,
                has_selected_date = _props.has_selected_date;


            if (error) return _react2.default.createElement(
                'p',
                null,
                error
            );

            var columns = (0, _dataTableConstants.getStatementTableColumnsTemplate)();

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Statement'),
                    i18n_message: (0, _localize.localize)('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'statement statement__content' },
                    _react2.default.createElement(
                        _DataTable2.default,
                        {
                            className: 'statement',
                            data_source: data,
                            columns: columns,
                            onScroll: handleScroll
                            // getRowAction={this.getRowAction} TODO uncomment once smart-chart component is fixed.
                            , getRowAction: undefined,
                            is_empty: is_empty
                        },
                        _react2.default.createElement(_placeholderComponent2.default, {
                            is_loading: is_loading,
                            has_selected_date: has_selected_date,
                            is_empty: is_empty,
                            empty_message_component: _emptyStatementMessage2.default
                        })
                    )
                )
            );
        }
    }]);

    return Statement;
}(_react2.default.Component);

Statement.propTypes = {
    data: _mobxReact.PropTypes.arrayOrObservableArray,
    error: _propTypes2.default.string,
    handleScroll: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules;
    return {
        data: modules.statement.data,
        error: modules.statement.error,
        handleScroll: modules.statement.handleScroll,
        has_selected_date: modules.statement.has_selected_date,
        is_empty: modules.statement.is_empty,
        is_loading: modules.statement.is_loading,
        onMount: modules.statement.onMount,
        onUnmount: modules.statement.onUnmount
    };
})((0, _reactRouterDom.withRouter)(Statement));

/***/ })

}]);