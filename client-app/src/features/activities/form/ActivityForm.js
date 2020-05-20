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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activity_1 = require("../../../app/models/activity");
var react_1 = require("react");
var uuid_1 = require("uuid");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_final_form_1 = require("react-final-form");
var TextInput_1 = require("../../../app/common/form/TextInput");
var TextAreaInput_1 = require("../../../app/common/form/TextAreaInput");
var categoryOptions_1 = require("../../../app/common/options/categoryOptions");
var SelectInput_1 = require("../../../app/common/form/SelectInput");
var DateInput_1 = require("../../../app/common/form/DateInput");
var util_1 = require("../../../app/common/util/util");
var revalidate_1 = require("revalidate");
var rootStore_1 = require("../../../app/stores/rootStore");
var validate = revalidate_1.combineValidators({
    title: revalidate_1.isRequired({ message: 'The event title is required' }),
    category: revalidate_1.isRequired('Category'),
    description: revalidate_1.composeValidators(revalidate_1.isRequired('Description'), revalidate_1.hasLengthGreaterThan(4)({ message: 'Description needs to be at least 5 characters' }))(),
    city: revalidate_1.isRequired('City'),
    venue: revalidate_1.isRequired('Venue'),
    date: revalidate_1.isRequired('Date'),
    time: revalidate_1.isRequired('Time')
});
var ActivityForm = function (_a) {
    var match = _a.match, history = _a.history;
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var _b = rootStore.activityStore, createActivity = _b.createActivity, editActivity = _b.editActivity, submitting = _b.submitting, loadActivity = _b.loadActivity;
    var _c = react_1.useState(new activity_1.ActivityFormValues()), activity = _c[0], setActivity = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    react_1.useEffect(function () {
        if (match.params.id) {
            setLoading(true);
            loadActivity(match.params.id)
                .then(function (activity) { return setActivity(new activity_1.ActivityFormValues(activity)); })
                .finally(function () { return setLoading(false); });
        }
    }, [
        loadActivity,
        match.params.id,
    ]);
    var handleFinalFormSubmit = function (values) {
        var dateAndTime = util_1.combineDateAndTime(values.date, values.time);
        var date = values.date, time = values.time, activity = __rest(values, ["date", "time"]);
        activity.date = dateAndTime;
        if (!activity.id) {
            var newActivity = __assign(__assign({}, activity), { id: uuid_1.v4() });
            createActivity(newActivity);
        }
        else {
            editActivity(activity);
        }
    };
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(semantic_ui_react_1.Segment, { clearing: true },
                React.createElement(react_final_form_1.Form, { validate: validate, initialValues: activity, onSubmit: handleFinalFormSubmit, render: function (_a) {
                        var handleSubmit = _a.handleSubmit, invalid = _a.invalid, pristine = _a.pristine;
                        return (React.createElement(semantic_ui_react_1.Form, { onSubmit: handleSubmit, loading: loading },
                            React.createElement(react_final_form_1.Field, { name: 'title', placeholder: 'Title', value: activity.title, component: TextInput_1.default }),
                            React.createElement(react_final_form_1.Field, { component: TextAreaInput_1.default, placeholder: 'Description', rows: 3, name: 'description', value: activity.description }),
                            React.createElement(react_final_form_1.Field, { component: SelectInput_1.default, name: 'category', placeholder: 'Category', options: categoryOptions_1.category, value: activity.category }),
                            React.createElement(semantic_ui_react_1.Form.Group, { widths: 'equal' },
                                React.createElement(react_final_form_1.Field, { component: DateInput_1.default, name: 'date', date: true, placeholder: 'Date', value: activity.date }),
                                React.createElement(react_final_form_1.Field, { component: DateInput_1.default, name: 'time', time: true, placeholder: 'Time', value: activity.time })),
                            React.createElement(react_final_form_1.Field, { component: TextInput_1.default, name: 'city', placeholder: 'City', value: activity.city }),
                            React.createElement(react_final_form_1.Field, { component: TextInput_1.default, name: 'venue', placeholder: 'Venue', value: activity.venue }),
                            React.createElement(semantic_ui_react_1.Button, { loading: submitting, disabled: loading || invalid || pristine, floated: 'right', positive: true, type: 'submit', content: 'Submit' }),
                            React.createElement(semantic_ui_react_1.Button, { onClick: activity.id ?
                                    function () { return history.push("/activities/" + activity.id); } :
                                    function () { return history.push('/activities'); }, disabled: loading, type: 'button', floated: 'right', content: 'Cancel' })));
                    } })))));
};
exports.default = mobx_react_lite_1.observer(ActivityForm);
//# sourceMappingURL=ActivityForm.js.map