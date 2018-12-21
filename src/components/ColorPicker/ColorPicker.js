import React, { PureComponent } from 'react'
import { HueColorStrip } from './components'
import './styles.scss'

export default class ColorPicker extends PureComponent { // eslint-disable-line
	render() {
		return (
			<>
				<HueColorStrip />
			</>
		)
	}
}
