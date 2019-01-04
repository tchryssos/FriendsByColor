import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ColorContext } from 'logic/contexts/color'
import { ColorInput } from './components'
import './styles.scss'

const InputForm = () => (
	<ColorContext.Consumer>
		{
			({ color }) => (
				<div className="formWrapper">
					<Formik
						initialValues={{
							color,
							name: '',
							relationship: 'def',
						}}
					>
						{({ isSubmitting }) => (
							<Form>
								<div>
									<Field name="name" placeholder="Name" />
									<ErrorMessage name="name" component="div" />
								</div>
								<div>
									<Field component="select" name="relationship">
										<option
											disabled
											value="def"
										>
												--Relationship--
										</option>
										<option value="frd">Friend</option>
										<option value="fam">Family</option>
										<option value="rom">Romantic Partner</option>
										<option value="sex">Sexual Partner</option>
										<option value="acq">Acquaintance</option>
									</Field>
									<ErrorMessage name="relationship" component="div" />
								</div>
								<div>
									<Field name="color" component={ColorInput} />
								</div>
							</Form>
						)}
					</Formik>
				</div>
			)
		}
	</ColorContext.Consumer>
)

export default InputForm
