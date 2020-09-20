import io from 'socket.io-client'

export default class RasaSocket {
	constructor(controller) {
		this.socket = io(controller.url)

		this.socket.on('bot_uttered', (rasa_response) => {
			console.log(rasa_response)
			controller.newMessage({
				author: 'Rasa',
				content: rasa_response.text,
				createdAt: Date.now(),
			})
		})
	}
}
