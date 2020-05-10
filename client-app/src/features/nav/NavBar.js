"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_router_dom_1 = require("react-router-dom");
var NavBar = function () {
    return (React.createElement(semantic_ui_react_1.Menu, { fixed: 'top', inverted: true },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Menu.Item, { header: true, as: react_router_dom_1.NavLink, exact: true, to: '/' },
                React.createElement("img", { src: "/assets/logo.png", alt: "logo", style: { marginRight: '10px' } }),
                "Fakebooktivities"),
            React.createElement(semantic_ui_react_1.Menu.Item, { name: 'Activities', as: react_router_dom_1.NavLink, to: '/activities' }),
            React.createElement(semantic_ui_react_1.Menu.Item, null,
                React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.NavLink, to: '/createActivity', positive: true, content: 'Create Activity' })))));
};
exports.default = mobx_react_lite_1.observer(NavBar);
//# sourceMappingURL=NavBar.js.map