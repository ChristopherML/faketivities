"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var HomePage = function () {
    return (React.createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
        React.createElement("h1", null, "Home page"),
        React.createElement("h3", null,
            "Go to ",
            React.createElement(react_router_dom_1.Link, { to: '/activities' }, " Activities"))));
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map