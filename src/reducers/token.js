export const token = (state = {}, action) => {
	switch (action.type) {
		case GET_DECODED_TOKEN: {
			return {
				...state,
				decoded: action.payload
			}
		}
		default:
			return state
	}
}
