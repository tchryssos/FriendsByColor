import React, { PureComponent } from 'react'
import { hsvColorScale, coordinatesToColor, coordinatesToHue } from 'logic/color'
import { ColorContext } from './context'
import { HueColorStrip, SLColorBox, ColorDisplay } from './components'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	constructor(props) {
		super(props)

		const setHue = (e) => {
			const y = e.nativeEvent.offsetY
			const hue = coordinatesToHue(y)
			this.setState({
				hue,
			})
		}

		const setColor = (e) => {
			const xOffset = e.nativeEvent.offsetX
			const yOffset = e.nativeEvent.offsetY
			const colorString = coordinatesToColor(this.state.hue, xOffset, yOffset)
			this.setState({
				color: colorString,
				colorX: e.clientX,
				colorY: e.clientY,
			})
		}

		this.state = {
			hue: 0,
			color: `${hsvColorScale(0)}`,
			colorX: undefined,
			colorY: undefined,
			hueY: undefined,
			setHue,
			setColor,
		}
	}

	render() {
		return (
			<ColorContext.Provider value={this.state}>
				<ColorDisplay />
				<SLColorBox />
				<HueColorStrip />
			</ColorContext.Provider>
		)
	}
}
