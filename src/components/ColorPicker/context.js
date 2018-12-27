import React from 'react'

// eslint-disable-next-line import/prefer-default-export
export const ColorContext = React.createContext({
	hue: '',
	color: '',
	colorX: undefined,
	colorY: undefined,
	hueY: undefined,
	setHue: () => {},
	setColor: () => {},
})
