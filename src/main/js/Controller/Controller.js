export default class Controller {
	constructor(view, model) {
		console.log('Controller')
		this.view = view
		this.model = model
		this.start()
	}

	start() {
		const messages = this.model.start()
		if (messages) this.view.start(messages)
	}
	newMessage() {}
}
