import React, { PureComponent } from 'react'
import { colorScale } from 'logic/color'
import './styles.scss'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	render() {
		return (
			<>
				<div className="colorpicker" style={{ backgroundColor: colorScale(200) }} />
			</>
		)
	}
}
