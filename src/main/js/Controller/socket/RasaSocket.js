import io from 'socket.io-client'
import { getCurrentTime } from '../../helpers/getCurrentTime'

export default class RasaSocket {
	constructor(controller) {
		this.socket = io(controller.url)

		this.socket.on('bot_uttered', (rasa_response) => {
			if (rasa_response.quick_replies) {
				controller.newMessage({
					author: 'Rasa',
					content: rasa_response.text,
					createdAt: getCurrentTime(),
					buttons: rasa_response.quick_replies,
				})
			}
			controller.newMessage({
				author: 'Rasa',
				content: rasa_response.text,
				createdAt: getCurrentTime(),
			})
		})

		this.socket.on('reconnect_attempt', () => {
			controller.setConnectionStatus(false)
		})

		this.socket.on('connect', () => {
			controller.setConnectionStatus(true)
		})
	}
}
