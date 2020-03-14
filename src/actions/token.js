import { GET_DECODED_TOKEN } from '../reducers/token'

export const decodeToken = () => dispatch => {
	const token = JSON.parse(atob(localStorage.getItem('uid').split('.')[1]))

	dispatch({ type: GET_DECODED_TOKEN, payload: token })
}
