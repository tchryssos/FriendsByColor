import React, { PureComponent } from 'react'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'

export default class HueColorStrip extends PureComponent {
	onClick = e => this.context.setHue(e)

	render() {
		return (
			<div
				className="hueStripContainer"
			>
				<div className="hueStrip" />
				<ColorCursor hue className="hueCursor" />
			</div>
		)
	}
}

HueColorStrip.contextType = ColorContext
