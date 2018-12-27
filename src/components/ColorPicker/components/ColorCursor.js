import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ColorContext } from '../context'
import './styles.scss'

export default class ColorCursor extends PureComponent {
	render() {
		return (
			<ColorContext.Consumer>
				{
					({ colorX, colorY, hueY }) => (
						<div
							className={`colorCursor ${this.props.className}`}
							onPointerUp={this.props.pointerUp}
							style={
								{
									// pixels are subtracted to center cursor
									top: (this.props.hue ? hueY : colorY) - 10,
									left: (this.props.hue ? 314 : colorX - 10),
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
	pointerUp: PropTypes.func,
}
