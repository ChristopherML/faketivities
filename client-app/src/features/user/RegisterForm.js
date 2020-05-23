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
var ErrorMessage_1 = require("../../app/common/form/ErrorMessage");
var validate = revalidate_1.combineValidators({
    username: revalidate_1.isRequired('username'),
    displayName: revalidate_1.isRequired('display name'),
    email: revalidate_1.isRequired('Email'),
    password: revalidate_1.isRequired('Password')
});
var RegisterForm = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var register = rootStore.userStore.register;
    return (React.createElement(react_final_form_1.Form, { onSubmit: function (values) { return register(values).catch(function (error) {
            var _a;
            return (_a = {},
                _a[final_form_1.FORM_ERROR] = error,
                _a);
        }); }, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit, submitting = _a.submitting, submitError = _a.submitError, invalid = _a.invalid, pristine = _a.pristine, dirtySinceLastSubmit = _a.dirtySinceLastSubmit;
            return (React.createElement(semantic_ui_react_1.Form, { onSubmit: handleSubmit, error: true },
                React.createElement(semantic_ui_react_1.Header, { as: 'h2', content: 'Sign up to Fakebooktivities', color: 'teal', textAlign: 'center' }),
                React.createElement(react_final_form_1.Field, { name: 'username', component: TextInput_1.default, placeholder: 'Username' }),
                React.createElement(react_final_form_1.Field, { name: 'displayName', component: TextInput_1.default, placeholder: 'Display Name' }),
                React.createElement(react_final_form_1.Field, { name: 'email', component: TextInput_1.default, placeholder: 'Email' }),
                React.createElement(react_final_form_1.Field, { name: 'password', component: TextInput_1.default, placeholder: 'Password', type: 'password' }),
                submitError && !dirtySinceLastSubmit && (React.createElement(ErrorMessage_1.default, { error: submitError })),
                React.createElement("br", null),
                React.createElement(semantic_ui_react_1.Button, { disabled: (invalid && !dirtySinceLastSubmit) || pristine, loading: submitting, color: 'teal', content: 'Register', fluid: true })));
        } }));
};
exports.default = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map