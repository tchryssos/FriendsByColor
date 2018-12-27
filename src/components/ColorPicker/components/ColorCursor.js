import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ColorContext } from '../context'
import './styles.scss'

export default class ColorCursor extends PureComponent {
	render() {
		return (
			<ColorContext.Consumer>
				{
					({ hue, color, colorX, colorY, hueY }) => (
						<div
							className={`colorCursor ${this.props.className}`}
							style={
								{
									backgroundColor: this.props.hue ? hue : color,
									// pixels are subtracted to center cursor
									top: (this.props.hue ? hueY : colorY) - 10,
									left: (this.props.hue ? undefined : colorX) - 10,
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
	className: PropTypes.string,
	hue: PropTypes.bool,
}

ColorCursor.defaultProps = {
	className: '',
	hue: false,
}
