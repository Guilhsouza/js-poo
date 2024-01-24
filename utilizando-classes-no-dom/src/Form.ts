import Component from "./Component.js";

export default class Form extends Component {
    constructor(parent: string, options?: object) {
        super('form', parent, options)
    }

    addChildren(...children: Component[]) {
        children.forEach((child: Component) => {
            this.acessElement().appendChild(child.acessElement())
        })
    }
}  