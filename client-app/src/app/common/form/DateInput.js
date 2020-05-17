"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_widgets_1 = require("react-widgets");
var DateInput = function (_a) {
    var input = _a.input, width = _a.width, _b = _a.date, date = _b === void 0 ? false : _b, _c = _a.time, time = _c === void 0 ? false : _c, placeholder = _a.placeholder, _d = _a.meta, touched = _d.touched, error = _d.error;
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return (React.createElement(semantic_ui_react_1.Form.Field, { error: touched && !!error, width: width },
        React.createElement(react_widgets_1.DateTimePicker, __assign({ placeholder: placeholder, value: input.value || null, onChange: input.onChange, onKeyDown: function (e) { return e.preventDefault(); }, onBlur: input.onBlur, date: date, time: time }, rest)),
        touched && error && (React.createElement(semantic_ui_react_1.Label, { basic: true, color: 'red' }, error))));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map