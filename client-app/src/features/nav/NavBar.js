"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_1 = require("react");
var activityStore_1 = require("../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var NavBar = function () {
    var activityStore = react_1.useContext(activityStore_1.default);
    return (React.createElement(semantic_ui_react_1.Menu, { fixed: 'top', inverted: true },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Menu.Item, { header: true },
                React.createElement("img", { src: "/assets/logo.png", alt: "logo", style: { marginRight: '10px' } }),
                "Fakebooktivities"),
            React.createElement(semantic_ui_react_1.Menu.Item, { name: 'Activities' }),
            React.createElement(semantic_ui_react_1.Menu.Item, null,
                React.createElement(semantic_ui_react_1.Button, { onClick: activityStore.openCreateForm, positive: true, content: 'Create Activity' })))));
};
exports.default = mobx_react_lite_1.observer(NavBar);
//# sourceMappingURL=NavBar.js.map