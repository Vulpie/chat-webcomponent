import { getCurrentTime } from '../../helpers/getCurrentTime'

export default class ChatEventListener {
	constructor(controller) {
		this.shadowRoot = controller.shadowRoot
		this.shadowRoot
			.querySelector('#form')
			.addEventListener('submit', (e) => {
				e.preventDefault()
				const content = e.target['user_input'].value
				let data = {
					message: content,
					sender: 'User',
				}
				controller.rasaSocket.socket.emit('user_uttered', data)
				controller.newMessage({
					author: 'User',
					content,
					createdAt: getCurrentTime(),
				})
				e.target['user_input'].value = ''
				e.target['user_input'].focus
			})

		this.shadowRoot.addEventListener('click', (e) => {
			if (
				e.target &&
				e.target.classList.contains('message__content_btn-box_button')
			) {
				const value = e.target.innerText
				const payload = e.target.getAttribute('data-payload')

				let data = {
					message: payload,
					sender: 'User',
				}
				controller.rasaSocket.socket.emit('user_uttered', data)
				controller.newMessage({
					author: 'User',
					content: value,
					createdAt: getCurrentTime(),
				})
			}
		})
	}
}
