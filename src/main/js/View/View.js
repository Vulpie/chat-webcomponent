import { messageTemplate } from './templates/messageTemplate.js'
import { indexTemplate } from './templates/indexTemplate'
export default class View {
	constructor(shadowRoot) {
		this.shadowRoot = shadowRoot
		this.shadowRoot.appendChild(indexTemplate.content.cloneNode(true))
		this.chat = this.shadowRoot.querySelector('.root__chat')
		this.toggle = true
	}

	start(messages) {
		messages.forEach((msg) => {
			const new_msg = messageTemplate(msg)
			this.chat.append(new_msg)
		})
	}

	newMessage(message_object) {
		const new_msg = messageTemplate(message_object)
		this.chat.append(new_msg)
	}

	closeChat() {
		this.chat.innerHTML = ''
	}

	toggleChat() {
		this.toggle = !this.toggle
		if (this.toggle) {
			this.shadowRoot.querySelector('.root__chat').style.display = 'flex'
			this.shadowRoot.querySelector('.root__form').style.display = 'flex'
		} else {
			this.shadowRoot.querySelector('.root__chat').style.display = 'none'
			this.shadowRoot.querySelector('.root__form').style.display = 'none'
		}
	}

	showAlert() {
		this.shadowRoot.querySelector('.root__chat').style.display = 'none'
		this.shadowRoot.querySelector('.root__alert').style.display = 'block'
	}
	hideAlert() {
		this.shadowRoot.querySelector('.root__chat').style.display = 'flex'
		this.shadowRoot.querySelector('.root__alert').style.display = 'none'
	}
}
