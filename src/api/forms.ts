export type SubmitServiceFormPayload = {
	name: string
	surname: string
	phone: string
	auto: string
	type_of_works: string
}

export async function submitServiceForm(payload: SubmitServiceFormPayload) {
	const response = await fetch(`https://api.hyperdrive.services/forms/service/submit`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data: payload})
	})

	const data = await response.json().catch(() => null)

	if (!response.ok) {
		throw new Error(data?.message || 'Failed to submit service form')
	}

	return data
}
