import { messageTemplate } from './templates/messageTemplate.js'
import { indexTemplate } from './templates/indexTemplate'
export default class View {
	constructor(shadowRoot) {
		this.shadowRoot = shadowRoot
		this.shadowRoot.appendChild(indexTemplate.content.cloneNode(true))
		this.chat = shadowRoot.querySelector('.root__chat')
	}

	start(messages) {
		messages.forEach((msg) => {
			const new_msg = messageTemplate(msg)
			this.chat.append(new_msg)
		})
	}
}
