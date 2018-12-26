import React, { PureComponent } from 'react'
import { HueColorStrip, SLColorStrip } from './components'
import './styles.scss'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	constructor(props) {
		super(props)
		this.setHue = this.setHue.bind(this)
		this.state = {
			hue: 'rgb(255, 0, 0)',
		}
	}

	setHue = (e, ctx) => {
		const x = e.nativeEvent.offsetX
		const y = e.nativeEvent.offsetY
		const canvasData = ctx.getImageData(x, y, 1, 1).data
		debugger
		this.setState({
			hue: `rgb(${canvasData[0]}), ${canvasData[1]}, ${canvasData[2]}`,
		})
	}

	render() {
		return (
			<>
				<SLColorStrip />
				<HueColorStrip
					hue={this.state.hue}
					setHue={this.setHue}
				/>
			</>
		)
	}
}
