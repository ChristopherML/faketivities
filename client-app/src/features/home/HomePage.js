"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_lite_1 = require("mobx-react-lite");
var HomePage = function () {
    return (React.createElement(semantic_ui_react_1.Segment, { inverted: true, textAlign: 'center', vertical: true, className: 'masthead' },
        React.createElement(semantic_ui_react_1.Container, { text: true },
            React.createElement(semantic_ui_react_1.Header, { as: 'h1', inverted: true },
                React.createElement(semantic_ui_react_1.Image, { size: 'massive', src: '/assets/logo.png', alt: 'logo', style: { marginBottom: 12 } }),
                "Fakebooktivities"),
            React.createElement(semantic_ui_react_1.Header, { as: 'h2', inverted: true, content: 'Welcome to Fakebooktivities' }),
            React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/activities', size: 'huge', inverted: true }, "Take me to the activities!"))));
};
exports.default = mobx_react_lite_1.observer(HomePage);
//# sourceMappingURL=HomePage.js.map