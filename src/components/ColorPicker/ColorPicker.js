import React, { PureComponent } from 'react'
import { HueColorStrip, SLColorStrip } from './components'
import './styles.scss'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	constructor(props) {
		super(props)
		this.state = {
			hue: 'hsl(180, 1, 0.5)',
		}
	}

	render() {
		return (
			<>
				<SLColorStrip />
				<HueColorStrip hue={this.state.hue} />
			</>
		)
	}
}
