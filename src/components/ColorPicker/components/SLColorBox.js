import React, { PureComponent } from 'react'
import { ColorContext } from '../context'
import { ColorCursor } from '../components'
import './styles.scss'
// import { colorScale } from 'logic/color'

export default class SLColorBox extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()

		// see comments above the mouse methods below
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

	onClick = e => this.context.setColor(e, this.canvasContext)
	/*
		The below actions allow color change while dragging on the canvas.
		This cannot be done with an onDrag action, as that requires
		the canvas be set to "draggable", which allows it to be "lifted"
		like the user is going to drag and drop it somewhere.
		This looks bad and works bad.
	*/
	mouseDown = () => this.setState({ dragging: true })
	mouseMove = (e) => {
		if (this.state.dragging) {
			this.context.setColor(e, this.canvasContext)
		}
	}
	mouseUp = () => this.setState({ dragging: false })

	fillBox = () => {
		// Fill the SL box with selected hue
		this.canvasContext.fillStyle = this.context.hue
		this.canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to white
		const grdWhite = this.canvasContext.createLinearGradient(0, 0, 300, 0)
		grdWhite.addColorStop(0, 'rgba(255,255,255,1)')
		grdWhite.addColorStop(1, 'rgba(255,255,255,0)')
		this.canvasContext.fillStyle = grdWhite
		this.canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to black
		const grdBlack = this.canvasContext.createLinearGradient(0, 0, 0, 300)
		grdBlack.addColorStop(0, 'rgba(0,0,0,0)')
		grdBlack.addColorStop(1, 'rgba(0,0,0,1)')
		this.canvasContext.fillStyle = grdBlack
		this.canvasContext.fillRect(0, 0, 300, 300)
	}

	render() {
		return (
			<>
				<canvas
					height={300}
					width={300}
					className="sLBox"
					ref={this.canvasRef}
					onClick={this.onClick}
					onMouseDown={this.mouseDown}
					onMouseMove={this.mouseMove}
					onMouseUp={this.mouseUp}
				/>
				<ColorCursor />
			</>
		)
	}
}

SLColorBox.contextType = ColorContext
