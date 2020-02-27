import axios from 'axios'

const submitUserForAuth = async (url, user, props) => {
	try {
		const response = await axios.post(url, user, props)

		if (response.data.token) {
			localStorage.setItem('uid', response.data.token)
			props.history.push('/')
		}

		return response
	} catch (err) {
		console.log(err)
	}
}

export default submitUserForAuth
