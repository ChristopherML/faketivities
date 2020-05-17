"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_router_dom_1 = require("react-router-dom");
var date_fns_1 = require("date-fns");
var activityImageStyle = {
    filter: 'brightness(30%)'
};
var activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
var ActivityDetailedHeader = function (_a) {
    var activity = _a.activity;
    return (React.createElement(semantic_ui_react_1.Segment.Group, null,
        React.createElement(semantic_ui_react_1.Segment, { basic: true, attached: 'top', style: { padding: '0' } },
            React.createElement(semantic_ui_react_1.Image, { src: "/assets/categoryImages/" + activity.category + ".jpg", fluid: true, style: activityImageStyle }),
            React.createElement(semantic_ui_react_1.Segment, { basic: true, style: activityImageTextStyle },
                React.createElement(semantic_ui_react_1.Item.Group, null,
                    React.createElement(semantic_ui_react_1.Item, null,
                        React.createElement(semantic_ui_react_1.Item.Content, null,
                            React.createElement(semantic_ui_react_1.Header, { size: 'huge', content: activity.title, style: { color: 'white' } }),
                            React.createElement("p", null, date_fns_1.format(activity.date, 'eeee do MMMM')),
                            React.createElement("p", null,
                                "Hosted by ",
                                React.createElement("strong", null, "Bob"))))))),
        React.createElement(semantic_ui_react_1.Segment, { clearing: true, attached: 'bottom' },
            React.createElement(semantic_ui_react_1.Button, { color: 'teal' }, "Join Activity"),
            React.createElement(semantic_ui_react_1.Button, null, "Cancel attendance"),
            React.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: "/manage/" + activity.id, color: 'orange', floated: 'right' }, "Manage Event"))));
};
exports.default = mobx_react_lite_1.observer(ActivityDetailedHeader);
//# sourceMappingURL=ActivityDetailedHeader.js.map