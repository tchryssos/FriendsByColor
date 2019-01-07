import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ColorContext } from 'logic/contexts/color'
import './styles.scss'

export default class ColorInput extends PureComponent {
	constructor(props, context) {
		super(props)
		this.state = {
			color: context.color,
		}
	}

	componentDidUpdate() {
		if (this.state.color !== this.context.color) {
			/*
				Per https://reactjs.org/docs/react-component.html#componentdidupdate,
				it is acceptable to call 'setState' inside componentDidUpdate
				as long as it is wrapped in some kind of conditional.
				This _does_ cause an additional render, but given the size of this app
				that shouldn't be an issue.

				"You may call setState() immediately in componentDidUpdate()
				but note that it must be wrapped in a condition".

				Here, we're using it to update the form value for 'color' in response to
				context changes. Unfortunately, onChange doesn't fire
				for programatic value changes, so we need a workaround.
				This is that workaround.
			*/
			this.setState({ // eslint-disable-line react/no-did-update-set-state
				color: this.context.color,
			})
			this.props.form.setFieldValue('color', this.context.color)
		}
	}

	render() {
		return (
			<ColorContext.Consumer>
				{
					({ color }) => (
						<>
							<div
								style={{
									backgroundColor: color,
								}}
								className="colorInputPreview"
							/>
							<input
								{...this.props.field}
								type="text"
								value={this.state.color}
								readOnly
								disabled
							/>
						</>
					)
				}
			</ColorContext.Consumer>
		)
	}
}

ColorInput.contextType = ColorContext

ColorInput.propTypes = {
	/* eslint-disable react/forbid-prop-types */
	field: PropTypes.object,
	form: PropTypes.object,
	/* eslint-enable */
}
