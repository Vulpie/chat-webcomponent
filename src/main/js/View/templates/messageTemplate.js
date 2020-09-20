export const messageTemplate = (author, content, createdAt) => {
	const $author = document.createElement('p')
	$author.innerText = author
	$author.classList.add('message__header_author')

	const $createdAt = document.createElement('p')
	$createdAt.innerText = createdAt
	$createdAt.classList.add('message__header_created-at')

	const $message_header = document.createElement('div')
	$message_header.classList.add('message__header')
	$message_header.append($author, $createdAt)

	const $content = document.createElement('p')
	$content.innerText = content
	$content.classList.add('message__content')

	const $message = document.createElement('div')
	$message.classList.add('message')
	if (author === 'Rasa') {
		$message.classList.add('rasa')
	} else {
		$message.classList.add('user')
	}
	$message.append($message_header, $content)

	return $message
}
