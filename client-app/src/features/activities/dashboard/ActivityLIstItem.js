"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_lite_1 = require("mobx-react-lite");
var date_fns_1 = require("date-fns");
var ActivityListItem = function (_a) {
    var activity = _a.activity;
    return (React.createElement(semantic_ui_react_1.Segment.Group, null,
        React.createElement(semantic_ui_react_1.Segment, null,
            React.createElement(semantic_ui_react_1.Item.Group, null,
                React.createElement(semantic_ui_react_1.Item, null,
                    React.createElement(semantic_ui_react_1.Item.Image, { size: 'tiny', circular: true, src: 'assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Item.Content, null,
                        React.createElement(semantic_ui_react_1.Item.Header, { as: 'a' }, activity.title),
                        React.createElement(semantic_ui_react_1.Item.Description, null, "Hosted by Bob"))))),
        React.createElement(semantic_ui_react_1.Segment, null,
            React.createElement(semantic_ui_react_1.Icon, { name: 'clock' }),
            " ",
            date_fns_1.format(activity.date, 'h:mm a'),
            React.createElement(semantic_ui_react_1.Icon, { name: 'marker' }),
            " ",
            activity.venue,
            ", ",
            activity.city),
        React.createElement(semantic_ui_react_1.Segment, { secondary: true }, "Attendees will go here"),
        React.createElement(semantic_ui_react_1.Segment, { clearing: true },
            React.createElement("span", null, activity.description),
            React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: "/activities/" + activity.id, floated: 'right', content: 'View', color: 'blue' }))));
};
exports.default = mobx_react_lite_1.observer(ActivityListItem);
//# sourceMappingURL=ActivityLIstItem.js.map