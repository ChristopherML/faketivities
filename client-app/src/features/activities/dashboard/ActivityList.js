"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList = function (_a) {
    var activities = _a.activities, selectActivity = _a.selectActivity, deleteActivity = _a.deleteActivity, submitting = _a.submitting, target = _a.target;
    return (React.createElement(semantic_ui_react_1.Segment, { clearing: true },
        React.createElement(semantic_ui_react_1.Item.Group, { divided: true }, activities.map(function (activity) { return (React.createElement(semantic_ui_react_1.Item, { key: activity.id },
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
                    React.createElement(semantic_ui_react_1.Button, { onClick: function () { return selectActivity(activity.id); }, floated: 'right', content: 'View', color: 'blue' }),
                    React.createElement(semantic_ui_react_1.Button, { name: activity.id, onClick: function (e) { return deleteActivity(e, activity.id); }, floated: 'right', loading: target === activity.id && submitting, content: 'Delete', color: 'red' }),
                    React.createElement(semantic_ui_react_1.Label, { basic: true, content: activity.category }))))); }))));
};
exports.default = ActivityList;
//# sourceMappingURL=ActivityList.js.map