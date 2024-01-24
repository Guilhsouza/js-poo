var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Component_genericElement;
class Component {
    constructor(tagName, parent, options) {
        this.tagName = tagName;
        this.parent = parent;
        this.options = options;
        _Component_genericElement.set(this, document.createElement('div'));
        this.tagName = tagName;
        this.parent = parent;
        this.options = options;
        this.buildElement();
    }
    acessElement() {
        return __classPrivateFieldGet(this, _Component_genericElement, "f");
    }
    buildElement() {
        __classPrivateFieldSet(this, _Component_genericElement, document.createElement(this.tagName), "f");
        Object.assign(__classPrivateFieldGet(this, _Component_genericElement, "f"), this.options);
        return this;
    }
    render() {
        var _a;
        if (this.parent instanceof Component) {
            return this.parent.acessElement().append(__classPrivateFieldGet(this, _Component_genericElement, "f"));
        }
        (_a = document.querySelector(this.parent)) === null || _a === void 0 ? void 0 : _a.append(__classPrivateFieldGet(this, _Component_genericElement, "f"));
    }
}
_Component_genericElement = new WeakMap();
export default Component;
