"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityDetailedChat = function (_a) {
    var activity = _a.activity;
    return (React.createElement(react_1.Fragment, null,
        React.createElement(semantic_ui_react_1.Segment, { textAlign: 'center', attached: 'top', inverted: true, color: 'teal', style: { border: 'none' } },
            React.createElement(semantic_ui_react_1.Header, null, "Chat about this event")),
        React.createElement(semantic_ui_react_1.Segment, { attached: true },
            React.createElement(semantic_ui_react_1.Comment.Group, null,
                React.createElement(semantic_ui_react_1.Comment, null,
                    React.createElement(semantic_ui_react_1.Comment.Avatar, { src: '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Comment.Content, null,
                        React.createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Matt"),
                        React.createElement(semantic_ui_react_1.Comment.Metadata, null,
                            React.createElement("div", null, "Today at 5:42PM")),
                        React.createElement(semantic_ui_react_1.Comment.Text, null, "How artistic!"),
                        React.createElement(semantic_ui_react_1.Comment.Actions, null,
                            React.createElement(semantic_ui_react_1.Comment.Action, null, "Reply")))),
                React.createElement(semantic_ui_react_1.Comment, null,
                    React.createElement(semantic_ui_react_1.Comment.Avatar, { src: '/assets/user.png' }),
                    React.createElement(semantic_ui_react_1.Comment.Content, null,
                        React.createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Joe Henderson"),
                        React.createElement(semantic_ui_react_1.Comment.Metadata, null,
                            React.createElement("div", null, "5 days ago")),
                        React.createElement(semantic_ui_react_1.Comment.Text, null, "Dude, this is awesome. Thanks so much"),
                        React.createElement(semantic_ui_react_1.Comment.Actions, null,
                            React.createElement(semantic_ui_react_1.Comment.Action, null, "Reply")))),
                React.createElement(semantic_ui_react_1.Form, { reply: true },
                    React.createElement(semantic_ui_react_1.Form.TextArea, null),
                    React.createElement(semantic_ui_react_1.Button, { content: 'Add Reply', labelPosition: 'left', icon: 'edit', primary: true }))))));
};
exports.default = ActivityDetailedChat;
//# sourceMappingURL=ActivityDetailedChat.js.map