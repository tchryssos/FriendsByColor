export const RELATIONSHIP_OPTIONS = [ // eslint-disable-line import/prefer-default-export
	{ label: 'Friend', name: 'frd' },
	{ label: 'Family', name: 'fam' },
	{ label: 'Co-worker', name: 'wrk' },
	{ label: 'Classmate (≤ High School)', name: 'chs' },
	{ label: 'Classmate (≥ College)', name: 'cco' },
	{ label: 'Romantic Partner', name: 'rom' },
	{ label: 'Sexual Partner', name: 'sex' },
	{ label: 'Other', name: 'oth' },
]

export const RELATIONSHIP_INIT_VALUES = RELATIONSHIP_OPTIONS.reduce((acc, obj) => {
	acc[obj.name] = false
	return acc
}, {})

export const FORM_INITIAL_VALUES = {
	name: '',
	color: '',
	relationship: {
		...RELATIONSHIP_INIT_VALUES,
	},
}
