import React, { PureComponent } from 'react'
import * as d3 from 'd3'
import './styles.scss'

const colorScale = d3.scaleLinear()
	.domain([-100, 0, +100])
	.range(['red', 'white', 'green'])

export default class ColorPicker extends PureComponent { // eslint-disable-line

	render() {
		return (
			<div className="colorpicker">
				{colorScale(65)}
			</div>
		)
	}
}
