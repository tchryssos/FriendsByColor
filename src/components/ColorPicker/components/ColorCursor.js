import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { hsvColorScale } from 'logic/color'
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
							onPointerUp={this.props.pointerUp}
							style={
								{
									// pixels are subtracted to center cursor
									marginTop: (this.props.hue ? hueY : colorY) - 13,
									marginLeft: (this.props.hue ? -5 : colorX - 13),
									backgroundColor: (
										this.props.hue ? hsvColorScale(hue) : color
									),
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
