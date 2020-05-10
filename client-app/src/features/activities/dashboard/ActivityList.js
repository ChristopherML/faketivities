"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var activityStore_1 = require("../../../app/stores/activityStore");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ActivityList = function () {
    var activityStore = react_1.useContext(activityStore_1.default);
    var activitiesByDate = activityStore.activitiesByDate, deleteActivity = activityStore.deleteActivity, submitting = activityStore.submitting, target = activityStore.target;
    return (React.createElement(semantic_ui_react_1.Segment, { clearing: true },
        React.createElement(semantic_ui_react_1.Item.Group, { divided: true }, activitiesByDate.map(function (activity) { return (React.createElement(semantic_ui_react_1.Item, { key: activity.id },
            React.createElement(semantic_ui_react_1.Item.Content, null,
                React.createElement(semantic_ui_react_1.Item.Header, { as: 'a' }, activity.title),
                React.createElement(semantic_ui_react_1.Item.Meta, null, activity.date),
                React.createElement(semantic_ui_react_1.Item.Description, null,
                    React.createElement("div", null, activity.description),
                    React.createElement("div", null,
                        activity.city,
                        ", ",
                        activity.venue)),
                React.createElement(semantic_ui_react_1.Item.Extra, null,
                    React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: "/activities/" + activity.id, floated: 'right', content: 'View', color: 'blue' }),
                    React.createElement(semantic_ui_react_1.Button, { name: activity.id, onClick: function (e) { return deleteActivity(e, activity.id); }, floated: 'right', loading: target === activity.id && submitting, content: 'Delete', color: 'red' }),
                    React.createElement(semantic_ui_react_1.Label, { basic: true, content: activity.category }))))); }))));
};
exports.default = mobx_react_lite_1.observer(ActivityList);
//# sourceMappingURL=ActivityList.js.map