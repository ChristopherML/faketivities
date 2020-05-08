"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var LoadingComponent = function (_a) {
    var _b = _a.inverted, inverted = _b === void 0 ? true : _b, content = _a.content;
    return (React.createElement(semantic_ui_react_1.Dimmer, { active: true, inverted: inverted },
        React.createElement(semantic_ui_react_1.Loader, { content: content })));
};
exports.default = LoadingComponent;
//# sourceMappingURL=LoadingComponent.js.map