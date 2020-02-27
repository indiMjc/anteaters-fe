import { combineReducers } from 'redux'
import { token } from './token'
import { tickets } from './tickets'
import { replies } from './replies'
import { projects } from './projects'

const reducer = combineReducers({
	token,
	tickets,
	replies,
	projects
})

export default reducer
