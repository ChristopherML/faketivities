"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activityStore_1 = require("../../../app/stores/activityStore");
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var ActivityDetails = function () {
    var activityStore = react_1.useContext(activityStore_1.default);
    var activity = activityStore.selectedActivity, openEditForm = activityStore.openEditForm, cancelSelectedActivity = activityStore.cancelSelectedActivity;
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
                React.createElement(semantic_ui_react_1.Button, { onClick: function () { return openEditForm(activity.id); }, basic: true, color: 'blue', content: 'Edit' }),
                React.createElement(semantic_ui_react_1.Button, { onClick: function () { return cancelSelectedActivity; }, basic: true, color: 'grey', content: 'Cancel' })))));
};
exports.default = mobx_react_lite_1.observer(ActivityDetails);
//# sourceMappingURL=ActivityDetails.js.map