import stylesheet from '../css/main.scss'
import Controller from './Controller/Controller'
import Model from './Model/Model'
import View from './View/View'

class ChatWebComponent extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.app = new Controller(new View(this.shadowRoot), new Model())
	}
}

window.customElements.define('chat-web-component', ChatWebComponent)
