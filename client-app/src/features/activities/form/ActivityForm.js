"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_1 = require("react");
var uuid_1 = require("uuid");
var activityStore_1 = require("../../../app/stores/activityStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var ActivityForm = function (_a) {
    var match = _a.match, history = _a.history;
    var activityStore = react_1.useContext(activityStore_1.default);
    var createActivity = activityStore.createActivity, editActivity = activityStore.editActivity, submitting = activityStore.submitting, intialFormState = activityStore.activity, loadActivity = activityStore.loadActivity, clearActivity = activityStore.clearActivity;
    var _b = react_1.useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }), activity = _b[0], setActivity = _b[1];
    react_1.useEffect(function () {
        if (match.params.id && activity.id.length === 0) {
            loadActivity(match.params.id).then(function () { return intialFormState && setActivity(intialFormState); });
        }
        return function () {
            clearActivity();
        };
    }, [loadActivity, match.params.id, clearActivity, intialFormState, activity.id.length]);
    var handleSubmit = function () {
        if (activity.id.length === 0) {
            var newActivity_1 = __assign(__assign({}, activity), { id: uuid_1.v4() });
            createActivity(newActivity_1).then(function () { return history.push("/activities/" + newActivity_1.id); });
        }
        else {
            editActivity(activity).then(function () { return history.push("/activities/" + activity.id); });
        }
    };
    var handleInputChange = function (event) {
        var _a;
        var _b = event.currentTarget, name = _b.name, value = _b.value;
        setActivity(__assign(__assign({}, activity), (_a = {}, _a[name] = value, _a)));
    };
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(semantic_ui_react_1.Segment, { clearing: true },
                React.createElement(semantic_ui_react_1.Form, { onSubmit: handleSubmit },
                    React.createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'title', placeholder: 'Title', value: activity.title }),
                    React.createElement(semantic_ui_react_1.Form.TextArea, { onChange: handleInputChange, name: 'description', rows: 2, placeholder: 'Description', value: activity.description }),
                    React.createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'category', placeholder: 'Category', value: activity.category }),
                    React.createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'date', type: 'datetime-local', placeholder: 'Date', value: activity.date }),
                    React.createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'city', placeholder: 'City', value: activity.city }),
                    React.createElement(semantic_ui_react_1.Form.Input, { onChange: handleInputChange, name: 'venue', placeholder: 'Veneu', value: activity.venue }),
                    React.createElement(semantic_ui_react_1.Button, { loading: submitting, floated: 'right', positive: true, type: 'submit', content: 'Submit' }),
                    React.createElement(semantic_ui_react_1.Button, { onClick: function () { return history.push('/activities'); }, type: 'button', floated: 'right', content: 'Cancel' }))))));
};
exports.default = mobx_react_lite_1.observer(ActivityForm);
//# sourceMappingURL=ActivityForm.js.map