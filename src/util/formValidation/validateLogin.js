const validateLogin = values => {
	let errors = {}

	if (!values.username) errors.username = 'Please enter a username or email address'
	else if (values.username.length < 5) errors.username = 'Username must contain at least 5 characters'

	if (!values.password) errors.password = 'Please enter a password'
	else if (values.password.length < 7) errors.password = 'Password must contain at least 7 characters'

	return errors
}

export default validateLogin
