import axios from 'axios'

const authAxios = () => {
	const token = localStorage.getItem('uid')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`
		}
	})
}

export default authAxios
