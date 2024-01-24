import Component from "./Component.js";
export default class Label extends Component {
    constructor(innerText, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent: innerText }));
        this.innerText = innerText;
    }
}
