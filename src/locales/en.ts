export default {
	hero: {
		titleTop: 'HYPER',
		titleBottom: 'DRIVE',
		subtitle: 'From daily cars to high-performance builds in Portugal',
		description: 'Transparent pricing • Same approach for every client',
		services: ['Diagnostics', 'Maintenance', 'Suspension', 'Brake Service'],
		priceFrom: 'FROM 50{euro}',
		book: 'Book Appointment',
		whatsapp: 'WhatsApp booking'
	},
	whyChoose: {
		title: 'Why drivers choose ',
		items: [
			{
				title: 'Fixed prices',
				text: 'No hidden fees. Transparent pricing.'
			},
			{
				title: 'Professional diagnostics',
				text: 'Latest equipment & best practice.'
			},
			{
				title: 'Warranty on repairs',
				text: 'Quality guaranteed work.'
			},
			{
				title: 'Free consultation',
				text: 'Call us anytime for advice.'
			},
			{
				title: 'Honest recommendations',
				text: 'Only what your car needs.'
			}
		]
	},
	services: {
		title: {
			main: 'Popular Services &',
			accent: 'Prices'
		},
		list: {
			diagnostics: {
				price: '70{euro}',
				title: 'Computer Diagnostics',
				bullets: ['Full electronic scan', 'Error reading & explanation', 'Service reset']
			},
			maintenance: {
				price: 'FROM 50{euro}',
				title: 'Maintenance Service',
				bullets: [
					'Oil + filter replacement — 50€',
					'Gearbox service — 150–250€',
					'Filters / spark plugs / fluids — 50–200€'
				]
			},
			brake: {
				price: 'FROM 70{euro}',
				title: 'Brake System',
				bullets: ['Brake fluid replacement — 70€', 'Pads & discs replacement — 140–250€']
			},
			suspension: {
				price: 'FROM 70{euro}',
				title: 'Suspension',
				bullets: ['Suspension diagnostics — 70€', 'Repair & parts replacement']
			},
			custom: {
				price: '50{euro}/HOUR',
				title: 'Custom Work',
				bullets: ['Individual repairs', 'Special projects', 'Labour rate — 50€/hour']
			}
		},
		cta: {
			button: 'Book your service today',
			note: 'Free consultation included'
		}
	},
	carProblems: {
		title: {
			main: 'CAR PROBLEMS',
			accent: 'WE SOLVE'
		},
		items: {
			warningLights: 'WARNING LIGHTS ON DASHBOARD',
			strangeNoises: 'STRANGE NOISES WHILE DRIVING',
			vibration: 'VIBRATION OR INSTABILITY',
			brake: 'BRAKE PROBLEMS',
			maintenance: 'REGULAR MAINTENANCE',
			preInspection: 'PRE-INSPECTION CHECK',
			ecuTuning: 'ENGINE ECU TUNING',
			ecoRemoval: 'ECO SYSTEM REMOVAL',
			coding: 'VEHICLE CODING & FEATURE UNLOCK'
		}
	},
	howItWorks: {
		title: {
			main: 'HOW IT',
			accent: 'WORKS'
		},
		steps: [
			['INSPECT', 'ION'],
			['DIAGNOSTICS'],
			['PRICE', 'CONFIRMATION'],
			['REPAIR'],
			['QUALITY', 'CHECK'],
			['WARRANTY', 'DELIVERY']
		]
	},
	ourTeams: {
		title: {
			main: 'OUR',
			accent: 'TEAMS'
		},
		members: {
			james: {
				name: 'JAMES WHITMORE',
				role: 'Sales Manager'
			},
			oliver: {
				name: 'OLIVER BENNETT',
				role: 'Automotive Sales Consultant'
			},
			miguel: {
				name: 'MIGUEL FERREIRA',
				role: 'Service Manager'
			}
		}
	},
	ourService: {
		title: {
			main: 'OUR',
			accent: 'PROMO'
		},
		slides: {
			workshop: {
				title: 'OIL + FILTER CHANGE — 50.00{euro}',
				subtitle: 'Free car diagnostics included',
				book: 'Book Appointment'
			},
			diagnostics: {
				title: 'SPECIAL OFFER FOR LADIES',
				subtitle: 'Car diagnostics — 58.00€ (instead of 70.00€) • 8% discount on next service • 4.03 – 11.03',
				book: 'Book Appointment'
			}
		}
	},
	locationContact: {
		title: {
			main: 'Location &',
			accent: 'Contact'
		},
		address: {
			label: 'ADDRESS',
			value: 'Lisbon, Portugal'
		},
		parking: {
			label: 'PARKING',
			value: 'Free parking available on site'
		},
		workingHours: {
			label: 'WORKING HOURS',
			value: 'Mon-Fri: 9:00 - 18:00   Sat: 9:00 - 14:00   Sun: Closed'
		},
		phone: {
			label: 'PHONE',
			value: '+351 000 000 000'
		},
		whatsapp: 'CHAT ON WHATSAPP'
	},
	footer: {
		tagline: 'Professional Car Service in Portugal since 2025'
	},
	booking: {
		title: 'Enter your details',
		name: 'Name',
		surname: 'Surname',
		phone: 'Phone',
		auto: 'Auto',
		works: 'Type of works',
		send: 'Send',

		worksOptions: {
			diagnostics: 'Diagnostics',
			maintenance: 'Maintenance',
			brakes: 'Brake Service',
			suspension: 'Suspension',
			custom: 'Custom Work'
		},

		sending: 'Sending...',
		successTitle: 'Thank you!',
		successText: 'We received your request. Our manager will contact you soon.',
		successButton: 'OK',

		errors: {
			nameRequired: 'Name is required',
			surnameRequired: 'Surname is required',
			phoneRequired: 'Phone is required',
			phoneInvalid: 'Invalid phone number'
		}
	}
}
