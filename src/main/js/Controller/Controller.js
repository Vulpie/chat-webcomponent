import Model from '../Model/Model'
import View from '../View/View'

import ChatEventsListener from './listeners/ChatEventsListener'
import ComponentEventsListener from './listeners/ComponentEventsListener.js.js'
import RasaSocket from './socket/RasaSocket'

export default class Controller {
	constructor(shadowRoot) {
		this.url = 'http://localhost:5005'
		this.shadowRoot = shadowRoot
		this.view = new View(this.shadowRoot)
		this.model = new Model()
		this.chatEventsListener = new ChatEventsListener(this)
		this.componentEventsListener = new ComponentEventsListener(this)
		this.rasaSocket = new RasaSocket(this)
		this.start()
	}

	start() {
		this.model.start()
		if (this.model.messages) this.view.start(this.model.messages)
	}

	newMessage(message_object) {
		this.model.newMessage(message_object)
		this.view.newMessage(message_object)
	}

	closeChat() {
		this.model.closeChat()
		this.view.closeChat()
	}

	toggleChat() {
		this.view.toggleChat()
	}

	setConnectionStatus(status) {
		if (!status) {
			this.view.showAlert()
		} else {
			this.view.hideAlert()
		}
	}
}
