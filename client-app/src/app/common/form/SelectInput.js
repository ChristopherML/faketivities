"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var SelectInput = function (_a) {
    var input = _a.input, width = _a.width, options = _a.options, placeholder = _a.placeholder, _b = _a.meta, touched = _b.touched, error = _b.error;
    return (React.createElement(semantic_ui_react_1.Form.Field, { error: touched && !!error, width: width },
        React.createElement(semantic_ui_react_1.Select, { value: input.value, onChange: function (e, data) { return input.onChange(data.value); }, placeholder: placeholder, options: options }),
        touched && error && (React.createElement(semantic_ui_react_1.Label, { basic: true, color: 'red' }, error))));
};
exports.default = SelectInput;
//# sourceMappingURL=SelectInput.js.map