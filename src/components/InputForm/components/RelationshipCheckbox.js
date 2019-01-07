import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class RelationshipCheckbox extends PureComponent {
	render() {
		return (
			<>
				<input
					{...this.props.field}
					type="checkbox"
					name={this.props.value}
					id={`check-${this.props.value}`}
				/>
				<label htmlFor={`check-${this.props.value}`}>{this.props.label}</label>
			</>
		)
	}
}

RelationshipCheckbox.propTypes = {
	field: PropTypes.object, // eslint-disable-line react/forbid-prop-types
	label: PropTypes.string,
	value: PropTypes.string,
}
