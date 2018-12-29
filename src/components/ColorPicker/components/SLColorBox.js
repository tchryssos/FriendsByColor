import React, { PureComponent } from 'react'
import {
	CANVAS_HEIGHT as C_HEIGHT,
	CANVAS_COLOR_WIDTH as C_WIDTH,
} from 'constants/canvas'
import { hsvColorScale } from 'logic/color'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'

export default class SLColorBox extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
		this.pointerUp = this.pointerUp.bind(this)

		// see comments above the pointer methods below
		this.state = {
			dragging: false,
		}
	}

	componentDidMount() {
		this.canvasContext = this.canvasRef.current.getContext('2d')
		this.fillBox()
	}

	componentDidUpdate() {
		this.fillBox()
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
			this.context.setColor(e, this.canvasContext)
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
		this.context.setColor(e, this.canvasContext)
	}

	fillBox = () => {
		// Fill the SL box with selected hue
		this.canvasContext.fillStyle = hsvColorScale(this.context.hue)
		this.canvasContext.fillRect(0, 0, C_WIDTH, C_HEIGHT)

		// Fill the SL box with a gradient to white
		const grdWhite = this.canvasContext.createLinearGradient(0, 0, C_WIDTH, 0)
		grdWhite.addColorStop(0, 'hsla(0, 0%, 100%, 1)')
		grdWhite.addColorStop(1, 'hsla(0, 0%, 100%, 0)')
		this.canvasContext.fillStyle = grdWhite
		this.canvasContext.fillRect(0, 0, C_WIDTH, C_HEIGHT)

		// Fill the SL box with a gradient to black
		const grdBlack = this.canvasContext.createLinearGradient(0, 0, 0, C_HEIGHT)
		grdBlack.addColorStop(0, 'hsla(0, 0%, 0%, 0)')
		grdBlack.addColorStop(1, 'hsla(0, 0%, 0%, 1)')
		this.canvasContext.fillStyle = grdBlack
		this.canvasContext.fillRect(0, 0, C_WIDTH, C_HEIGHT)
	}

	render() {
		return (
			<>
				<canvas
					height={C_HEIGHT}
					width={C_WIDTH}
					className="sLBox"
					ref={this.canvasRef}
					onPointerDown={this.pointerDown}
					onPointerMove={this.pointerMove}
					onPointerUp={this.pointerUp}
				/>
				<ColorCursor pointerUp={this.pointerUp} />
			</>
		)
	}
}

SLColorBox.contextType = ColorContext
