import React, { PureComponent } from 'react'
import * as d3 from 'd3'
import './styles.scss'

const colorScale = d3.scaleLinear()
	.domain([0, 360])
	.range([d3.hsl(0, 1, 0.5), d3.hsl(360, 1, 0.5)])
	.interpolate(d3.interpolateHslLong)

export default class ColorPicker extends PureComponent { // eslint-disable-line
	render() {
		return (
			<div className="colorpicker" style={{ backgroundColor: colorScale(150) }} />
		)
	}
}
