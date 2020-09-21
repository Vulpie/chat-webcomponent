export default class ComponentEventsListener {
	constructor(controller) {
		this.shadowRoot = controller.shadowRoot
		this.shadowRoot
			.querySelector('#toggle_chat')
			.addEventListener('click', () => {
				controller.toggleChat()
			})
		this.shadowRoot
			.querySelector('#close_chat')
			.addEventListener('click', () => {
				controller.closeChat()
			})
	}
}
