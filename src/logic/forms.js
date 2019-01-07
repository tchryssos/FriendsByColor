// eslint-disable-next-line import/prefer-default-export
export const submitForm = (values, formActions) => {
	console.log('submitted!', values)
	formActions.setSubmitting(false)
	formActions.resetForm()
}
