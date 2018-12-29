import React, { PureComponent } from 'react'
import { hsvColorScale } from 'logic/color'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'

export default class SLColorBox extends PureComponent {
	constructor(props) {
		super(props)
		this.pointerUp = this.pointerUp.bind(this)

		// see comments above the pointer methods below
		this.state = {
			dragging: false,
		}
	}

	/*
		The below actions allow color change while dragging on the canvas.
		This cannot be done with an onDrag action, as that requires
		the canvas be set to "draggable", which allows it to be "lifted"
		like the user is going to drag and drop it somewhere.
		This looks bad and works bad.
	*/
	pointerDown = () => this.setState({ dragging: true })
	pointerMove = (e) => {
		if (this.state.dragging) {
			this.context.setColor(e)
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
		this.context.setColor(e)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{
					({ hue }) => (
						<div
							className="sVContainer"
							onPointerDown={this.pointerDown}
							onPointerMove={this.pointerMove}
							onPointerUp={this.pointerUp}
						>
							<div
								className="sVHueBox"
								style={{
									backgroundColor: hsvColorScale(hue),
								}}
							/>
							<div className="sVWhiteGradientBox" />
							<div className="sVBlackGradientBox" />
							<ColorCursor pointerUp={this.pointerUp} />
						</div>
					)
				}
			</ColorContext.Consumer>
		)
	}
}

SLColorBox.contextType = ColorContext
