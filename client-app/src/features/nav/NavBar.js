"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var NavBar = function (_a) {
    var openCreateForm = _a.openCreateForm;
    return (React.createElement(semantic_ui_react_1.Menu, { fixed: 'top', inverted: true },
        React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Menu.Item, { header: true },
                React.createElement("img", { src: "/assets/logo.png", alt: "logo", style: { marginRight: '10px' } }),
                "Fakebooktivities"),
            React.createElement(semantic_ui_react_1.Menu.Item, { name: 'Activities' }),
            React.createElement(semantic_ui_react_1.Menu.Item, null,
                React.createElement(semantic_ui_react_1.Button, { onClick: openCreateForm, positive: true, content: 'Create Activity' })))));
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map