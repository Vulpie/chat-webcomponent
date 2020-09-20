export const messageTemplate = (author, content, createdAt) => {
	const $author = document.createElement('p')
	$author.innerText = author
	$author.classList.add('message__author')

	const $content = document.createElement('p')
	$content.innerText = content
	$content.classList.add('message__content')

	const $createdAt = document.createElement('p')
	$createdAt.innerText = createdAt
	$createdAt.classList.add('message__created-at')

	const $message = document.createElement('div')
	$message.classList.add('message')
	if (author === 'Rasa') {
		$message.classList.add('rasa')
	} else {
		$message.classList.add('user')
	}
	$message.append($author, $content, $createdAt)

	return $message
}
