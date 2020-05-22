"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_final_form_1 = require("react-final-form");
var semantic_ui_react_1 = require("semantic-ui-react");
var TextInput_1 = require("../../app/common/form/TextInput");
var rootStore_1 = require("../../app/stores/rootStore");
var react_1 = require("react");
var final_form_1 = require("final-form");
var revalidate_1 = require("revalidate");
var validate = revalidate_1.combineValidators({
    email: revalidate_1.isRequired('email'),
    password: revalidate_1.isRequired('password')
});
var LoginForm = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var login = rootStore.userStore.login;
    return (React.createElement(react_final_form_1.Form, { onSubmit: function (values) { return login(values).catch(function (error) {
            var _a;
            return (_a = {},
                _a[final_form_1.FORM_ERROR] = error,
                _a);
        }); }, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit, submitting = _a.submitting, form = _a.form, submitError = _a.submitError, invalid = _a.invalid, pristine = _a.pristine, dirtySinceLastSubmit = _a.dirtySinceLastSubmit;
            return (React.createElement(semantic_ui_react_1.Form, { onSubmit: handleSubmit },
                React.createElement(react_final_form_1.Field, { name: 'email', component: TextInput_1.default, placeholder: 'Email' }),
                React.createElement(react_final_form_1.Field, { name: 'password', component: TextInput_1.default, placeholder: 'Password', type: 'password' }),
                submitError && !dirtySinceLastSubmit && (React.createElement(semantic_ui_react_1.Label, { color: 'red', basic: true, content: submitError.statusText })),
                React.createElement("br", null),
                React.createElement(semantic_ui_react_1.Button, { disabled: invalid && !dirtySinceLastSubmit || pristine, loading: submitting, positive: true, content: 'Login' }),
                React.createElement("pre", null, JSON.stringify(form.getState(), null, 2))));
        } }));
};
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map