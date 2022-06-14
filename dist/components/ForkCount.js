"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _client = require("@apollo/client");

var _client2 = require("../client");

var _ForkCountCard = _interopRequireDefault(require("../widgets/ForkCountCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ForkCount = _ref => {
  let {
    username,
    repository,
    theme = 'light',
    iconText = 'Fork',
    formatNumber = true
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
    client: _client2.client
  }, /*#__PURE__*/_react.default.createElement(_ForkCountCard.default, {
    username: username,
    repository: repository,
    theme: theme,
    iconText: iconText,
    formatNumber: formatNumber
  }));
};

ForkCount.propTypes = {
  username: _propTypes.default.string.isRequired,
  repository: _propTypes.default.string.isRequired,
  theme: _propTypes.default.string,
  iconText: _propTypes.default.string,
  formatNumber: _propTypes.default.bool
};
var _default = ForkCount;
exports.default = _default;