import axios from 'axios'

const authAxios = () => {
	const token = sessionStorage.getItem('token')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`
		}
	})
}

export default authAxios
