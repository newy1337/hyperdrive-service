import { useState } from 'react'

import BookingModal from '@/components/modals/BookingModal'

import { ModalContext } from './ModalContext'

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [isBookingOpen, setBookingOpen] = useState(false)

	const openBooking = () => setBookingOpen(true)
	const closeBooking = () => setBookingOpen(false)

	return (
		<ModalContext.Provider value={{ openBooking, closeBooking }}>
			{children}
			<BookingModal open={isBookingOpen} onClose={closeBooking} />
		</ModalContext.Provider>
	)
}
