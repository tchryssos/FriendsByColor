import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RELATIONSHIP_OPTIONS } from 'constants/form'
import { submitForm } from 'logic/forms'
import { ColorInput, RelationshipCheckbox } from './components'
import './styles.scss'

const checkboxes = () => (
	RELATIONSHIP_OPTIONS.map(relObj => (
		<RelationshipCheckbox
			name={relObj.name}
			label={relObj.label}
			key={relObj.name}
		/>
	))
)

const InputForm = () => (
	<div className="formWrapper">
		<Formik
			initialValues={{
				name: '',
			}}
			onSubmit={submitForm}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className="formField">
						<Field name="name" placeholder="Name" />
						<ErrorMessage name="name" component="div" />
					</div>
					<div className="formField">
						{checkboxes()}
					</div>
					<div className="formField">
						<Field name="color" component={ColorInput} />
					</div>
					<div className="formField">
						<button
							type="submit"
							disabled={isSubmitting}
						>
							Submit
						</button>
					</div>
				</Form>
			)}
		</Formik>
	</div>
)

export default InputForm
