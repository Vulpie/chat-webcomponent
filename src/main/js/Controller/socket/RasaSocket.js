import io from 'socket.io-client'

export default class RasaSocket {
	constructor(controller) {
		this.socket = io(controller.url)

		this.socket.on('bot_uttered', (rasa_response) => {
			if (rasa_response.quick_replies) {
				controller.newMessage({
					author: 'Rasa',
					content: rasa_response.text,
					createdAt: Date.now(),
					buttons: rasa_response.quick_replies,
				})
			}
			controller.newMessage({
				author: 'Rasa',
				content: rasa_response.text,
				createdAt: Date.now(),
			})
		})
	}
}
