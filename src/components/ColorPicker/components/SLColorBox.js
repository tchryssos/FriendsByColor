import React, { PureComponent } from 'react'
import { HueContext } from '../context'
import './styles.scss'
// import { colorScale } from 'logic/color'

export default class SLColorBox extends PureComponent {
	constructor(props) {
		super(props)
		this.canvasRef = React.createRef()
	}

	componentDidMount() {
		this.fillBox()
	}

	componentDidUpdate() {
		this.fillBox()
	}

	fillBox = () => {
		const canvasContext = this.canvasRef.current.getContext('2d')
		// Fill the SL box with selected hue
		canvasContext.fillStyle = this.context.hue
		canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to white
		const grdWhite = canvasContext.createLinearGradient(0, 0, 300, 0)
		grdWhite.addColorStop(0, 'rgba(255,255,255,1)')
		grdWhite.addColorStop(1, 'rgba(255,255,255,0)')
		canvasContext.fillStyle = grdWhite
		canvasContext.fillRect(0, 0, 300, 300)

		// Fill the SL box with a gradient to black
		const grdBlack = canvasContext.createLinearGradient(0, 0, 0, 300)
		grdBlack.addColorStop(0, 'rgba(0,0,0,0)')
		grdBlack.addColorStop(1, 'rgba(0,0,0,1)')
		canvasContext.fillStyle = grdBlack
		canvasContext.fillRect(0, 0, 300, 300)
	}

	render() {
		return (
			<canvas
				height={300}
				width={300}
				className="sLBox"
				ref={this.canvasRef}
			/>
		)
	}
}

SLColorBox.contextType = HueContext
