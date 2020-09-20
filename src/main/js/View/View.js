import { messageTemplate } from './templates/messageTemplate.js'
import { indexTemplate } from './templates/indexTemplate'
export default class View {
	constructor(shadowRoot) {
		this.shadowRoot = shadowRoot
		this.shadowRoot.appendChild(indexTemplate.content.cloneNode(true))
		this.chat = shadowRoot.querySelector('.root__chat')
		this.start()
	}

	start() {
		const msg = messageTemplate('vulpie', 'Hejo elo', '14:15')
		const msg2 = messageTemplate('Rasa', 'No cześć', '14:15')
		this.chat.append(msg, msg2)
	}
}
