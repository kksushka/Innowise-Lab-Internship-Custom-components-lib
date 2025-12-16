"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const TextField_module_scss_1 = __importDefault(require("./TextField.module.scss"));
const useTextField_1 = require("./useTextField");
const TextField = (_a) => {
    var { label, error = false, fullWidth = false, variant = 'outlined', value = '' } = _a, props = __rest(_a, ["label", "error", "fullWidth", "variant", "value"]);
    const { inputRef, isFocused, hasValue, onFocus, onBlur } = (0, useTextField_1.useTextField)(String(value));
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(TextField_module_scss_1.default.wrapper, fullWidth && TextField_module_scss_1.default.fullWidth, error && TextField_module_scss_1.default.error), children: (0, jsx_runtime_1.jsxs)("div", { className: TextField_module_scss_1.default.inputWrapper, children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ ref: inputRef, value: value, className: (0, clsx_1.default)(TextField_module_scss_1.default.input, TextField_module_scss_1.default[variant], (isFocused || hasValue) && TextField_module_scss_1.default.hasValue), onFocus: onFocus, onBlur: onBlur }, props)), label && ((0, jsx_runtime_1.jsx)("label", { className: (0, clsx_1.default)(TextField_module_scss_1.default.label, (isFocused || hasValue) && TextField_module_scss_1.default.labelShrink), onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, children: label }))] }) }));
};
exports.TextField = TextField;
//# sourceMappingURL=TextField.js.map