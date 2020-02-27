export const GET_DECODED_TOKEN = 'GET_DECODED_TOKEN'

export const token = (state = {}, action) => {
	switch (action.type) {
		case GET_DECODED_TOKEN: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state
	}
}
