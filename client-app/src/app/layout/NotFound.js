"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var NotFound = function () {
    return (React.createElement(semantic_ui_react_1.Segment, { placeholder: true },
        React.createElement(semantic_ui_react_1.Header, { icon: true },
            React.createElement(semantic_ui_react_1.Icon, { name: 'search' }),
            "Oops - we've looked everywhere but couldn't find this."),
        React.createElement(semantic_ui_react_1.Segment.Inline, null,
            React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/activities', primary: true }, "Return to Activities page"))));
};
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map