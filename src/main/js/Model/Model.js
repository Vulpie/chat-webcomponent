export default class Model {
	constructor() {
		this.store = localStorage
	}

	start() {
		//const messages = this.store.getItem(messages)
		const messages = [
			{ author: 'vulpie', content: 'Hej', createdAt: '15:14' },
			{ author: 'Rasa', content: 'Cześć', createdAt: '15:14' },
			{
				author: 'vulpie',
				content: 'Jaki jest limit miejsc na informatyce',
				createdAt: '15:14',
			},
			{
				author: 'Rasa',
				content: '80 na stacjonarnych',
				createdAt: '15:14',
			},
			{ author: 'Rasa', content: '50 na zaocznych', createdAt: '15:14' },
		]
		if (messages) {
			return messages
		} else return []
	}
}
