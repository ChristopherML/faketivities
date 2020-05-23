"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_lite_1 = require("mobx-react-lite");
var rootStore_1 = require("../../app/stores/rootStore");
var react_1 = require("react");
var LoginForm_1 = require("../user/LoginForm");
var HomePage = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var _a = rootStore.userStore, isLoggedIn = _a.isLoggedIn, user = _a.user;
    var openModal = rootStore.modalStore.openModal;
    return (React.createElement(semantic_ui_react_1.Segment, { inverted: true, textAlign: 'center', vertical: true, className: 'masthead' },
        React.createElement(semantic_ui_react_1.Container, { text: true },
            React.createElement(semantic_ui_react_1.Header, { as: 'h1', inverted: true },
                React.createElement(semantic_ui_react_1.Image, { size: 'massive', src: '/assets/logo.png', alt: 'logo', style: { marginBottom: 12 } }),
                "Fakebooktivities"),
            isLoggedIn && user ? (React.createElement(react_1.Fragment, null,
                React.createElement(semantic_ui_react_1.Header, { as: 'h2', inverted: true, content: "Welcome back, " + user.displayName + "!" }),
                React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/activities', size: 'huge', inverted: true }, "Go to activities!"))) : (React.createElement(react_1.Fragment, null,
                React.createElement(semantic_ui_react_1.Header, { as: 'h2', inverted: true, content: 'Welcome to Fakebooktivities' }),
                React.createElement(semantic_ui_react_1.Button, { onClick: function () { return openModal(React.createElement(LoginForm_1.default, null)); }, size: 'huge', inverted: true }, "Login"),
                React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/register', size: 'huge', inverted: true }, "Register"))))));
};
exports.default = mobx_react_lite_1.observer(HomePage);
//# sourceMappingURL=HomePage.js.map