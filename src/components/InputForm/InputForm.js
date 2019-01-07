import React, { PureComponent } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import { ColorContext } from 'logic/contexts/color'
import { RELATIONSHIP_OPTIONS, FORM_INITIAL_VALUES } from 'constants/form'
import { submitForm } from 'logic/forms'
import { ColorInput, RelationshipCheckbox } from './components'
import './styles.scss'

export default class InputForm extends PureComponent {

	onSubmit = (values, formActions) => (
		submitForm(values, formActions, this.context.color)
	)

	checkboxes = () => (
		RELATIONSHIP_OPTIONS.map(relObj => (
			<RelationshipCheckbox
				name={relObj.name}
				label={relObj.label}
				key={relObj.name}
			/>
		))
	)

	render() {
		return (
			<div className="formWrapper">
				<Formik
					initialValues={FORM_INITIAL_VALUES}
					onSubmit={this.onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className="formField">
								<Field name="name" placeholder="Name" />
								<ErrorMessage name="name" component="div" />
							</div>
							<div className="formField">
								<FieldArray
									name="relationship"
									render={this.checkboxes}
								/>
							</div>
							<div className="formField">
								<Field name="color" component={ColorInput} />
							</div>
							<div className="formField">
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		)
	}
}

InputForm.contextType = ColorContext
