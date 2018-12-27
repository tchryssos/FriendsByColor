import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ColorContext } from '../context'
import './styles.scss'

export default class ColorCursor extends PureComponent {
	render() {
		return (
			<ColorContext.Consumer>
				{
					({ hue, color }) => (
						<div
							className="colorCursor"
							style={
								{
									backgroundColor: this.props.type === 'hue' ? hue : color,
								}
							}
						/>
					)
				}
			</ColorContext.Consumer>
		)
	}
}

ColorCursor.propTypes = {
	type: PropTypes.oneOf(['hue', 'color']),
}

ColorCursor.defaultProps = {
	type: 'hue',
}
