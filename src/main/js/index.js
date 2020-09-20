import '../css/main.scss'
import Controller from './Controller/Controller'

class ChatWebComponent extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.app = new Controller(this.shadowRoot)
	}
}

window.customElements.define('chat-web-component', ChatWebComponent)
