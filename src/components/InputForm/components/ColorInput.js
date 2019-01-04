import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ColorContext } from 'logic/contexts/color'
import './styles.scss'

export default class ColorInput extends PureComponent {
	render() {
		return (
			<ColorContext.Consumer>
				{
					({ color }) => (
						<>
							<input
								{...this.props.field}
								type="text"
								value={color}
								readOnly
								disabled
							/>
							<div
								style={{
									backgroundColor: color,
								}}
								className="colorInputPreview"
							/>
						</>
					)
				}
			</ColorContext.Consumer>
		)
	}
}

ColorInput.propTypes = {
	field: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}
