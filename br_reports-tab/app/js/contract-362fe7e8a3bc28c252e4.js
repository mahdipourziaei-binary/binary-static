(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contract"],{

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _uiLoader = __webpack_require__(/*! ../../../App/Components/Elements/ui-loader.jsx */ "./src/javascript/app_2/App/Components/Elements/ui-loader.jsx");

var _uiLoader2 = _interopRequireDefault(_uiLoader);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _logic = __webpack_require__(/*! ../../../Stores/Modules/Contract/Helpers/logic */ "./src/javascript/app_2/Stores/Modules/Contract/Helpers/logic.js");

var _digits = __webpack_require__(/*! ./digits.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/digits.jsx");

var _digits2 = _interopRequireDefault(_digits);

var _infoBox = __webpack_require__(/*! ./info-box.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/info-box.jsx");

var _infoBox2 = _interopRequireDefault(_infoBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractReplay = function (_React$Component) {
    _inherits(ContractReplay, _React$Component);

    function ContractReplay() {
        _classCallCheck(this, ContractReplay);

        return _possibleConstructorReturn(this, (ContractReplay.__proto__ || Object.getPrototypeOf(ContractReplay)).apply(this, arguments));
    }

    _createClass(ContractReplay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount(this.props.contract_id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var SmartChart = _react2.default.lazy(function () {
                return Promise.all(/*! import() | smart_chart */[__webpack_require__.e("vendors~smart_chart"), __webpack_require__.e("smart_chart")]).then(__webpack_require__.t.bind(null, /*! ../../SmartChart */ "./src/javascript/app_2/Modules/SmartChart/index.js", 7));
            });
            var status = this.props.contract_info.status;


            if (status) {
                return _react2.default.createElement(
                    _react2.default.Suspense,
                    { fallback: _react2.default.createElement(_uiLoader2.default, null) },
                    _react2.default.createElement(SmartChart, {
                        chart_id: 1,
                        is_contract_mode: true,
                        Digits: _react2.default.createElement(_digits2.default, null),
                        InfoBox: _react2.default.createElement(_infoBox2.default, null),
                        is_ended: (0, _logic.isEnded)(this.props.contract_info),
                        end_epoch: this.props.contract_info.date_start,
                        start_epoch: this.props.contract_info.date_expiry
                    })
                );
            }
            return _react2.default.createElement(_uiLoader2.default, null);
        }
    }]);

    return ContractReplay;
}(_react2.default.Component);

ContractReplay.propTypes = {
    chart_id: _propTypes2.default.number,
    contract_id: _propTypes2.default.string,
    contract_info: _propTypes2.default.object,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    symbol: _propTypes2.default.string
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules;
    return {
        contract_info: modules.contract.contract_info,
        chart_id: modules.trade.chart_id,
        onMount: modules.contract.onMount,
        onUnmount: modules.contract.onUnmount
    };
})(ContractReplay);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/Containers/contract.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/Containers/contract.jsx ***!
  \***********************************************************************/
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

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Errors = __webpack_require__(/*! ../../../App/Components/Elements/Errors */ "./src/javascript/app_2/App/Components/Elements/Errors/index.js");

var _Errors2 = _interopRequireDefault(_Errors);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _contractReplay = __webpack_require__(/*! ./contract-replay.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract-replay.jsx");

var _contractReplay2 = _interopRequireDefault(_contractReplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contract = function Contract(_ref) {
    var error_message = _ref.error_message,
        has_error = _ref.has_error,
        match = _ref.match;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        has_error ? _react2.default.createElement(_Errors2.default, { message: error_message }) : _react2.default.createElement(
            'div',
            { className: 'trade-container' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactTransitionGroup.CSSTransition,
                    {
                        'in': !has_error,
                        timeout: 400,
                        classNames: {
                            enter: 'contract--enter',
                            enterDone: 'contract--enter-done',
                            exit: 'contract--exit'
                        },
                        unmountOnExit: true
                    },
                    _react2.default.createElement(_contractReplay2.default, { contract_id: match.params.contract_id, key: match.params.contract_id })
                )
            )
        )
    );
};

Contract.propTypes = {
    error_message: _propTypes2.default.string,
    has_error: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    match: _propTypes2.default.object,
    symbol: _propTypes2.default.string
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        ui = _ref2.ui;
    return {
        error_message: modules.contract.error_message,
        has_error: modules.contract.has_error,
        is_mobile: ui.is_mobile,
        symbol: modules.contract.contract_info.underlying
    };
})(Contract);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Contract/index.js":
/*!********************************************************!*\
  !*** ./src/javascript/app_2/Modules/Contract/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _contract = __webpack_require__(/*! ./Containers/contract.jsx */ "./src/javascript/app_2/Modules/Contract/Containers/contract.jsx");

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contract2.default;

/***/ })

}]);