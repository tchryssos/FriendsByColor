import React from 'react'
import { HueColorStrip, SVColorBox, ColorDisplay } from './components'

const ColorPicker = () => (
	<div className="colorPickerCenter">
		<ColorDisplay />
		<SVColorBox />
		<HueColorStrip />
	</div>
)

export default ColorPicker
