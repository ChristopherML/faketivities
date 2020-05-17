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
var TextAreaInput = function (_a) {
    var input = _a.input, width = _a.width, rows = _a.rows, placeholder = _a.placeholder, _b = _a.meta, touched = _b.touched, error = _b.error;
    return (React.createElement(semantic_ui_react_1.Form.Field, { error: touched && !!error, width: width },
        React.createElement("textarea", __assign({ rows: rows }, input, { placeholder: placeholder })),
        touched && error && (React.createElement(semantic_ui_react_1.Label, { basic: true, color: 'red' }, error))));
};
exports.default = TextAreaInput;
//# sourceMappingURL=TextAreaInput.js.map