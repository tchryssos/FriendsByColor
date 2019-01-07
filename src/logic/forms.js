import { FORM_INITIAL_VALUES } from 'constants/form'
// eslint-disable-next-line import/prefer-default-export
export const submitForm = (values, formActions, color) => {
	console.log('submitted!', values)
	formActions.setSubmitting(false)
	const formResetObj = Object.assign(
		FORM_INITIAL_VALUES,
		{ color },
	)
	formActions.resetForm(formResetObj)
}
