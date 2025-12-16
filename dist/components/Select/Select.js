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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const Select_module_scss_1 = __importDefault(require("./Select.module.scss"));
const Select = (_a) => {
    var { label, options = [], fullWidth = false, variant = 'outlined', value = '', placeholder = '' } = _a, props = __rest(_a, ["label", "options", "fullWidth", "variant", "value", "placeholder"]);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const selectRef = (0, react_1.useRef)(null);
    const hasValue = Boolean(value && value !== '');
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(Select_module_scss_1.default.wrapper, fullWidth && Select_module_scss_1.default.fullWidth, props.disabled && Select_module_scss_1.default.disabled), children: (0, jsx_runtime_1.jsxs)("div", { className: Select_module_scss_1.default.selectWrapper, children: [(0, jsx_runtime_1.jsxs)("select", Object.assign({ ref: selectRef, value: value, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), className: (0, clsx_1.default)(Select_module_scss_1.default.select, Select_module_scss_1.default[variant], fullWidth && Select_module_scss_1.default.fullWidth, (isFocused || hasValue) && Select_module_scss_1.default.hasValue) }, props, { children: [(0, jsx_runtime_1.jsx)("option", { value: "", hidden: true, children: placeholder }), options.map(({ value, label: optionLabel }) => ((0, jsx_runtime_1.jsx)("option", { value: value, children: optionLabel }, `${value}-${optionLabel}`)))] })), label && ((0, jsx_runtime_1.jsx)("label", { className: (0, clsx_1.default)(Select_module_scss_1.default.label, (isFocused || hasValue) && Select_module_scss_1.default.labelShrink), onClick: () => { var _a; return (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, children: label })), (0, jsx_runtime_1.jsx)("span", { className: Select_module_scss_1.default.arrow })] }) }));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map