import React from 'react'

export function renderTokens(text: string) {
	const parts = text.split('{euro}')
	if (parts.length === 1) return text

	return (
		<>
			{parts.map((p, i) => (
				<React.Fragment key={i}>
					{p}
					{i !== parts.length - 1 && <span className='euro'>€</span>}
				</React.Fragment>
			))}
		</>
	)
}
