"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ErrorMessage = function (_a) {
    var error = _a.error, text = _a.text;
    return (React.createElement(semantic_ui_react_1.Message, { error: true },
        React.createElement(semantic_ui_react_1.Message.Header, null, error.statusText),
        text && React.createElement(semantic_ui_react_1.Message.Content, { content: text })));
};
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map