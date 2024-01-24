import Component from "./Component.js";

export default class Inputs extends Component {
    constructor(parent: Component | string, options?: object) {
        super('input', parent, options)
    }
}

