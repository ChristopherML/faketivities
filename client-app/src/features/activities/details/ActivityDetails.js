"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityDetails = function (_a) {
    var activity = _a.activity, setEditMode = _a.setEditMode, setSelectedActivity = _a.setSelectedActivity;
    return (React.createElement(semantic_ui_react_1.Card, { fluid: true },
        React.createElement(semantic_ui_react_1.Image, { src: "/assets/categoryImages/" + activity.category + ".jpg", wrapped: true, ui: false }),
        React.createElement(semantic_ui_react_1.Card.Content, null,
            React.createElement(semantic_ui_react_1.Card.Header, null, activity.title),
            React.createElement(semantic_ui_react_1.Card.Meta, null,
                React.createElement("span", null, activity.date)),
            React.createElement(semantic_ui_react_1.Card.Description, null,
                React.createElement("div", null, activity.description),
                React.createElement("div", null,
                    activity.city,
                    ", ",
                    activity.venue))),
        React.createElement(semantic_ui_react_1.Card.Content, { extra: true },
            React.createElement(semantic_ui_react_1.Button.Group, { widths: 2 },
                React.createElement(semantic_ui_react_1.Button, { onClick: function () { return setEditMode(true); }, basic: true, color: 'blue', content: 'Edit' }),
                React.createElement(semantic_ui_react_1.Button, { onClick: function () { return setSelectedActivity(null); }, basic: true, color: 'grey', content: 'Cancel' })))));
};
exports.default = ActivityDetails;
//# sourceMappingURL=ActivityDetails.js.map