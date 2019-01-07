import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import './styles.scss'

export default class RelationshipCheckbox extends PureComponent {
	render() {
		return (
			<Field
				key={`${this.props.name}`}
				name={this.props.name}
				render={
					({ field }) => (
						<>
							<input
								{...field}
								type="checkbox"
								name={`relationship.${this.props.name}`}
								id={`check-${this.props.name}`}
							/>
							<label
								htmlFor={`check-${this.props.name}`}
								className="checkboxLabel"
							>
								{this.props.label}
							</label>
						</>
					)
				}
			/>
		)
	}
}

RelationshipCheckbox.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
}
