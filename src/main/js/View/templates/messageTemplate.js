export const messageTemplate = ({ author, content, createdAt, buttons }) => {
	const output = `<div class="message__header">
			<p class="message__header_author">${author}</p>
			<p class="message__header_created-at">${createdAt}</p>
		</div>
		<div class="message__content">${content}</div>`

	let message_type = 'user'
	if (author === 'Rasa') {
		message_type = 'rasa'
	}
	const $message = document.createElement('div')
	$message.classList.add('message')
	$message.classList.add(message_type)
	$message.innerHTML = output

	if (buttons) {
		const $button_box = document.createElement('div')
		$button_box.classList.add('message__content_btn-box')
		buttons.forEach((btn) => {
			const $new_btn = document.createElement('div')
			$new_btn.innerText = btn.title
			$new_btn.dataset.payload = btn.payload
			$new_btn.classList.add('message__content_btn-box_button')
			$button_box.append($new_btn)
		})
		$message.append($button_box)
	}

	return $message
}
