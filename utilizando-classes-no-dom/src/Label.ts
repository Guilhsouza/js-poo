import Component from "./Component.js";

export default class Label extends Component {
    constructor(public innerText: string, parent: Component | string, options: object) {
        super('label', parent, Object.assign({}, options, { textContent: innerText }))
    }
}  