import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ColorContext } from 'logic/contexts/color'

const InputForm = () => (
	<ColorContext.Consumer>
		{
			({ color }) => (
				<Formik
					initialValues={{
						color,
						name: '',
						relationship: 'frd',
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<div>
								<Field name="name" />
								<ErrorMessage name="name" component="div" />
							</div>
							<div>
								<Field component="select" name="relationship">
									<option value={'frd'}>Friend</option>
									<option value={'fam'}>Family</option>
									<option value={'rom'}>Romantic Partner</option>
									<option value={'sex'}>Sexual Partner</option>
									<option value={'acq'}>Acquaintance</option>
								</Field>
								<ErrorMessage name="relationship" component="div" />
							</div>
							<div>
								<Field
									name="color"
									render={({ field }) => (
										<>
											<input
												{...field}
												type="text"
												value={color}
												readOnly
											/>
											<div
												style={{
													backgroundColor: color,
													height: 18,
													width: 50,
												}}
											/>
										</>
									)}
								/>
							</div>
						</Form>
					)}
				</Formik>
			)
		}
	</ColorContext.Consumer>
)

export default InputForm
