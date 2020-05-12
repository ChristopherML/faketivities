"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var ActivityDetailedSidebar = function (_a) {
    var activity = _a.activity;
    return (React.createElement(react_1.Fragment, null,
        React.createElement(semantic_ui_react_1.Segment, { textAlign: 'center', style: { border: 'none' }, attached: 'top', secondary: true, inverted: true, color: 'teal' }, "3 People Going"),
        React.createElement(semantic_ui_react_1.Segment, { attached: true },
            React.createElement(semantic_ui_react_1.List, { relaxed: true, divided: true },
                React.createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    React.createElement(semantic_ui_react_1.Label, { style: { position: 'absolute' }, color: 'orange', ribbon: 'right' }, "Host"),
                    React.createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        React.createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            React.createElement(react_router_dom_1.Link, { to: "#" }, "Bob")),
                        React.createElement(semantic_ui_react_1.Item.Extra, { style: { color: 'orange' } }, "Following"))),
                React.createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    React.createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        React.createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            React.createElement(react_router_dom_1.Link, { to: "#" }, "Tom")),
                        React.createElement(semantic_ui_react_1.Item.Extra, { style: { color: 'orange' } }, "Following"))),
                React.createElement(semantic_ui_react_1.Item, { style: { position: 'relative' } },
                    React.createElement(semantic_ui_react_1.Image, { size: 'tiny', src: '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Item.Content, { verticalAlign: 'middle' },
                        React.createElement(semantic_ui_react_1.Item.Header, { as: 'h3' },
                            React.createElement(react_router_dom_1.Link, { to: "#" }, "Sally"))))))));
};
exports.default = ActivityDetailedSidebar;
//# sourceMappingURL=ActivityDetailedSidebar.js.map