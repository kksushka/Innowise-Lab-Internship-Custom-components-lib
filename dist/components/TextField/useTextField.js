"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextField = void 0;
const react_1 = require("react");
const useTextField = (value) => {
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const hasValue = Boolean(value && value !== '');
    return {
        inputRef,
        isFocused,
        hasValue,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
    };
};
exports.useTextField = useTextField;
//# sourceMappingURL=useTextField.js.map