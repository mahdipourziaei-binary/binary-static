(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statement"],{

/***/ "./src/javascript/app_2/App/Components/Elements/Label/index.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Label/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _label = __webpack_require__(/*! ./label.jsx */ "./src/javascript/app_2/App/Components/Elements/Label/label.jsx");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _label2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Label/label.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Label/label.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var available_modes = ['default', 'success', 'warn', 'danger'];

var Label = function Label(_ref) {
    var mode = _ref.mode,
        children = _ref.children;

    var type = available_modes.some(function (m) {
        return m === mode;
    }) ? mode : 'default';

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('label', _defineProperty({}, 'label--' + type, type))
        },
        children
    );
};
Label.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    mode: _propTypes2.default.string
};
exports.default = Label;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/amount-cell.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/amount-cell.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmountCell = function AmountCell(_ref) {
    var value = _ref.value;

    var status = +value.replace(/,/g, '') >= 0 ? 'profit' : 'loss';

    return _react2.default.createElement(
        'span',
        { className: 'amount--' + status },
        value
    );
};

AmountCell.propTypes = {
    value: _propTypes2.default.string
};

exports.default = AmountCell;

/***/ }),

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

/***/ "./src/javascript/app_2/Modules/Reports/Components/statement-row-icon.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/statement-row-icon.jsx ***!
  \********************************************************************************/
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

var _Types = __webpack_require__(/*! ../../../Assets/Trading/Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const getIconNameForCategory = (category) => {
//     const map = [
//         { key: 'rise_fall', value: ['put'] },
//         { key: 'rise_fall_equal', value: [] },
//         { key: 'high_low', value: [] },
//         { key: 'end', value: [] },
//         { key: 'stay', value: [] },
//         { key: 'match_diff', value: ['digitmatch', 'digitdiff'] },
//         { key: 'even_odd', value: ['digiteven', 'digitodd'] },
//         { key: 'over_under', value: ['digitover', 'digitunder'] },
//         { key: 'touch', value: [] },
//         { key: 'asian', value: [] },
//         { key: 'lb_call', value: [] },
//         { key: 'lb_put', value: ['put'] },
//         { key: 'lb_high_low', value: [] },
//     ];
//
//     const found = map.find(item => item.value.includes(category));
//     return found ? found.key : category;
// };

var getMarketInformation = function getMarketInformation(payload) {
    var shortcode = payload.shortcode;

    var pattern = new RegExp('(^[A-Z]+)_((R_\\d{2,3})|[A-Z]+)');
    var extracted = pattern.exec(shortcode);
    if (extracted !== null) {
        return {
            category: extracted[1].toLowerCase(),
            underlying: extracted[2].toLowerCase()
        };
    }
    return null;
};
// import { IconTradeCategory } from '../../../Assets/Trading/Categories';


var StatementRowIcon = function StatementRowIcon(_ref) {
    var payload = _ref.payload;

    var should_show_category_icon = typeof payload.shortcode === 'string';
    var market_information = getMarketInformation(payload);
    if (should_show_category_icon && market_information) {
        return _react2.default.createElement(_Types.IconTradeType, { type: market_information.category });
        // return <div>Category: {market_information.category} | Underlying: {market_information.underlying}</div>;
    }
    // TODO check all the markets and statement action types
    return _react2.default.createElement(
        'div',
        null,
        JSON.stringify(payload)
    );
};

StatementRowIcon.propTypes = {
    action: _propTypes2.default.string,
    payload: _propTypes2.default.object
};

exports.default = StatementRowIcon;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTableColumnsTemplate = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Label = __webpack_require__(/*! ../../../App/Components/Elements/Label */ "./src/javascript/app_2/App/Components/Elements/Label/index.js");

var _Label2 = _interopRequireDefault(_Label);

var _amountCell = __webpack_require__(/*! ../Components/amount-cell.jsx */ "./src/javascript/app_2/Modules/Reports/Components/amount-cell.jsx");

var _amountCell2 = _interopRequireDefault(_amountCell);

var _statementRowIcon = __webpack_require__(/*! ../Components/statement-row-icon.jsx */ "./src/javascript/app_2/Modules/Reports/Components/statement-row-icon.jsx");

var _statementRowIcon2 = _interopRequireDefault(_statementRowIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModeFromValue = function getModeFromValue(key) {
    var map = {
        deposit: 'warn',
        sell: 'danger',
        buy: 'success',
        default: 'default'
    };

    if (Object.keys(map).find(function (x) {
        return x === key;
    })) {
        return map[key];
    }

    return map.default;
};
/* eslint-disable react/display-name, react/prop-types */
var getTableColumnsTemplate = exports.getTableColumnsTemplate = function getTableColumnsTemplate() {
    return [{
        key: 'icon',
        title: '',
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value,
                row_obj = _ref.row_obj;
            return _react2.default.createElement(_statementRowIcon2.default, {
                action: cell_value,
                key: row_obj.transaction_id,
                payload: row_obj
            });
        }
    }, {
        title: (0, _localize.localize)('Date'),
        col_index: 'date'
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'refid'
    }, {
        key: 'mode',
        title: (0, _localize.localize)('Action'),
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref2) {
            var cell_value = _ref2.cell_value,
                row_obj = _ref2.row_obj;
            return _react2.default.createElement(
                _Label2.default,
                { mode: getModeFromValue(cell_value) },
                row_obj.action
            );
        }
    }, {
        title: (0, _localize.localize)('Credit/Debit'),
        col_index: 'amount',
        renderCellContent: function renderCellContent(_ref3) {
            var cell_value = _ref3.cell_value;
            return _react2.default.createElement(_amountCell2.default, { value: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Balance'),
        col_index: 'balance'
    }];
};
/* eslint-enable react/display-name, react/prop-types */

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

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx");

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaceholderComponent = function PlaceholderComponent(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.is_empty && _react2.default.createElement(_emptyStatementMessage2.default, { has_selected_date: props.has_selected_date }),
        props.is_loading && _react2.default.createElement(_loading2.default, null)
    );
};

var Statement = function (_React$Component) {
    _inherits(Statement, _React$Component);

    function Statement() {
        _classCallCheck(this, Statement);

        return _possibleConstructorReturn(this, (Statement.__proto__ || Object.getPrototypeOf(Statement)).apply(this, arguments));
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

            var columns = (0, _dataTableConstants.getTableColumnsTemplate)();

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Statement'),
                    i18n_message: (0, _localize.localize)('Vestibulum rutrum quam fringilla tincidunt. Suspendisse nec tortor.')
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'statement__content' },
                    _react2.default.createElement(
                        _DataTable2.default,
                        {
                            className: 'statement',
                            data_source: data,
                            columns: columns,
                            onScroll: handleScroll,
                            getRowLink: function getRowLink(row_obj) {
                                return row_obj.id ? (0, _helpers.getContractPath)(row_obj.id) : undefined;
                            },
                            is_empty: is_empty
                        },
                        _react2.default.createElement(PlaceholderComponent, {
                            is_loading: is_loading,
                            has_selected_date: has_selected_date,
                            is_empty: is_empty
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

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules;
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