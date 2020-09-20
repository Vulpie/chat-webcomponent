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
}

// const messages = [
// 	{ author: 'vulpie', content: 'Hej', createdAt: '15:14' },
// 	{ author: 'Rasa', content: 'Cześć', createdAt: '15:14' },
// 	{
// 		author: 'vulpie',
// 		content: 'Jaki jest limit miejsc na informatyce',
// 		createdAt: '15:14',
// 	},
// 	{
// 		author: 'Rasa',
// 		content: '80 na stacjonarnych',
// 		createdAt: '15:14',
// 	},
// 	{ author: 'Rasa', content: '50 na zaocznych', createdAt: '15:14' },
// ]
