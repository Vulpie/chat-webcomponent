export default class Model {
	constructor() {
		this.store = localStorage
		this.messages = []
	}

	start() {
		const local_sotrage_messages = JSON.parse(
			this.store.getItem('messages')
		)
		if (local_sotrage_messages) {
			local_sotrage_messages.forEach((msg) => {
				this.messages.push(msg)
			})
		}
	}

	newMessage(message_object) {
		this.messages.push(message_object)
		this.store.setItem('messages', JSON.stringify(this.messages))
	}

	closeChat() {
		this.store.setItem('messages', '')
		this.messages = []
	}
}
