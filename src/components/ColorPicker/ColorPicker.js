import React, { PureComponent } from 'react'
import { hsvColorScale, coordinatesToColor, coordinatesToHue } from 'logic/color'
import {
	CANVAS_COLOR_WIDTH as CC_WIDTH,
} from 'constants/canvas'
import { ColorContext } from 'logic/contexts/color'
import { HueColorStrip, SVColorBox, ColorDisplay } from './components'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	constructor(props) {
		super(props)

		const setHue = (e) => {
			const y = e.nativeEvent.offsetY
			const hue = coordinatesToHue(y)
			this.setState({
				hue,
				hueY: e.clientY,
			})
			const colorString = coordinatesToColor(
				hue,
				this.state.colorX,
				this.state.colorY,
			)
			this.setState({ color: colorString })
		}

		const setColor = (e) => {
			const xOffset = e.nativeEvent.offsetX
			const yOffset = e.nativeEvent.offsetY
			const colorString = coordinatesToColor(this.state.hue, xOffset, yOffset)
			this.setState({
				color: colorString,
				colorX: xOffset,
				colorY: yOffset,
			})
		}

		this.state = {
			hue: 180,
			color: `${hsvColorScale(180)}`,
			colorX: CC_WIDTH,
			colorY: 0,
			hueY: 150,
			setHue,
			setColor,
		}
	}

	render() {
		return (
			<ColorContext.Provider value={this.state}>
				<ColorDisplay />
				<SVColorBox />
				<HueColorStrip />
			</ColorContext.Provider>
		)
	}
}
