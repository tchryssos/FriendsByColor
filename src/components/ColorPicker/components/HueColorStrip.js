import React, { PureComponent } from 'react'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'

export default class HueColorStrip extends PureComponent {
	constructor(props) {
		super(props)
		this.pointerUp = this.pointerUp.bind(this)

		// see comments above the pointer methods below
		this.state = {
			dragging: false,
		}
	}

	pointerDown = () => this.setState({ dragging: true })
	pointerMove = (e) => {
		if (this.state.dragging) {
			this.context.setHue(e)
		}
	}
	/*
		The function below is also passsed to the cursor component.
		This is because after a drag, the pointerUp action is fired on the cursor
		which tracks with the mouse drag. By passing the function,
		I make sure that "dragging" ends over the canvas or cursor.
	*/
	pointerUp = (e) => {
		this.setState({ dragging: false })
		this.context.setHue(e)
	}

	render() {
		return (
			<div
				className="hueStripContainer"
				onPointerDown={this.pointerDown}
				onPointerMove={this.pointerMove}
				onPointerUp={this.pointerUp}
			>
				<div className="hueStrip" />
				<ColorCursor hue pointerUp={this.pointerUp} />
			</div>
		)
	}
}

HueColorStrip.contextType = ColorContext
