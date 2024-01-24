export default class Component {
    #genericElement: HTMLElement = document.createElement('div');

    constructor(public tagName: string, public parent: Component | string, public options?: object) {
        this.tagName = tagName
        this.parent = parent
        this.options = options
        this.buildElement()
    }

    acessElement() {
        return this.#genericElement
    }

    buildElement() {
        this.#genericElement = document.createElement(this.tagName)
        Object.assign(this.#genericElement, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component) {
            return this.parent.acessElement().append(this.#genericElement)
        }
        document.querySelector(this.parent)?.append(this.#genericElement)
    }
}