const validateRegistration = values => {
	let errors = {}

	if (!values.email) errors.email = 'Please enter an email address'
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
		errors.email = 'Must be a valid email address'

	if (!values.username) errors.username = 'Please enter a username'
	else if (values.username.length < 5) errors.username = 'Username must contain at least 5 characters'

	if (!values.password) errors.password = 'Please enter a password'
	else if (values.password.length < 7) errors.password = 'Password must contain at least 7 characters'

	if (!values.role) errors.role = 'Please select a user role'

	return errors
}

export default validateRegistration
