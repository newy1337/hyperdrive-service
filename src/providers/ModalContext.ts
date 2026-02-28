import { createContext, useContext } from 'react'

export type ModalContextType = {
	openBooking: () => void
	closeBooking: () => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

export function useModal() {
	const ctx = useContext(ModalContext)
	if (!ctx) throw new Error('useModal must be used inside ModalProvider')
	return ctx
}
