export const getCurrentTime = () => {
	const date = new Date()
	let hour = date.getHours()
	let min = date.getMinutes()

	if (hour.length < 2) hour = '0' + hour
	if (min.length < 2) min = '0' + min
	const timestamp = `${hour}:${min}`
	return timestamp
}
