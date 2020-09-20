import Model from '../Model/Model'
import View from '../View/View'

import ChatEventsListener from './listeners/ChatEventsListener'

export default class Controller {
	constructor(shadowRoot) {
		this.shadowRoot = shadowRoot
		this.view = new View(this.shadowRoot)
		this.model = new Model()
		this.chatEventsListener = new ChatEventsListener(this)
		this.start()
	}

	start() {
		this.model.start()
		if (this.model.messages) this.view.start(this.model.messages)
	}
	newMessage(message_object) {
		console.log(message_object)
		this.model.newMessage(message_object)
	}
}
