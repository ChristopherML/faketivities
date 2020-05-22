"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var rootStore_1 = require("../../app/stores/rootStore");
var NavBar = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var _a = rootStore.userStore, user = _a.user, logout = _a.logout;
    return (React.createElement(semantic_ui_react_1.Menu, { fixed: 'top', inverted: true },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Menu.Item, { header: true, as: react_router_dom_1.NavLink, exact: true, to: '/' },
                React.createElement("img", { src: "/assets/logo.png", alt: "logo", style: { marginRight: '10px' } }),
                "Fakebooktivities"),
            React.createElement(semantic_ui_react_1.Menu.Item, { name: 'Activities', as: react_router_dom_1.NavLink, to: '/activities' }),
            React.createElement(semantic_ui_react_1.Menu.Item, null,
                React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.NavLink, to: '/createActivity', positive: true, content: 'Create Activity' })),
            user &&
                React.createElement(semantic_ui_react_1.Menu.Item, { position: 'right' },
                    React.createElement(semantic_ui_react_1.Image, { avatar: true, spaced: 'right', src: user.image || '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Dropdown, { pointing: 'top left', text: user.displayName },
                        React.createElement(semantic_ui_react_1.Dropdown.Menu, null,
                            React.createElement(semantic_ui_react_1.Dropdown.Item, { as: react_router_dom_1.Link, to: "/profile/username", text: 'My profile', icon: 'user' }),
                            React.createElement(semantic_ui_react_1.Dropdown.Item, { onClick: logout, text: 'Logout', icon: 'power' })))))));
};
exports.default = mobx_react_lite_1.observer(NavBar);
//# sourceMappingURL=NavBar.js.map