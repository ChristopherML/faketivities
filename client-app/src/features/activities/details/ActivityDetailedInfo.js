"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var date_fns_1 = require("date-fns");
var ActivityDetailedInfo = function (_a) {
    var activity = _a.activity;
    return (React.createElement(semantic_ui_react_1.Segment.Group, null,
        React.createElement(semantic_ui_react_1.Segment, { attached: 'top' },
            React.createElement(semantic_ui_react_1.Grid, null,
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 1 },
                    React.createElement(semantic_ui_react_1.Icon, { size: 'large', color: 'teal', name: 'info' })),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 15 },
                    React.createElement("p", null, activity.description)))),
        React.createElement(semantic_ui_react_1.Segment, { attached: true },
            React.createElement(semantic_ui_react_1.Grid, { verticalAlign: 'middle' },
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 1 },
                    React.createElement(semantic_ui_react_1.Icon, { name: 'calendar', size: 'large', color: 'teal' })),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 15 },
                    React.createElement("span", null,
                        date_fns_1.format(activity.date, 'eeee do MMMM'),
                        " at ",
                        date_fns_1.format(activity.date, 'h:mm a'))))),
        React.createElement(semantic_ui_react_1.Segment, { attached: true },
            React.createElement(semantic_ui_react_1.Grid, { verticalAlign: 'middle' },
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 1 },
                    React.createElement(semantic_ui_react_1.Icon, { name: 'marker', size: 'large', color: 'teal' })),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 11 },
                    React.createElement("span", null,
                        activity.venue,
                        ", ",
                        activity.city))))));
};
exports.default = ActivityDetailedInfo;
//# sourceMappingURL=ActivityDetailedInfo.js.map