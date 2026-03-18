export default {
	hero: {
		titleTop: 'HYPER',
		titleBottom: 'DRIVE',
		subtitle: 'De carros do dia a dia a projetos de alta performance em Portugal',
		description: 'Preços transparentes • A mesma abordagem para cada cliente',
		services: ['Diagnóstico', 'Manutenção', 'Suspensão', 'Serviço de travões'],
		priceFrom: 'DESDE 50{euro}',
		book: 'Marcar atendimento',
		whatsapp: 'Marcação via WhatsApp'
	},
	whyChoose: {
		title: 'Por que os condutores escolhem ',
		items: [
			{
				title: 'Preços fixos',
				text: 'Sem custos escondidos. Preços transparentes.'
			},
			{
				title: 'Diagnóstico profissional',
				text: 'Equipamento moderno e melhores práticas.'
			},
			{
				title: 'Garantia nas reparações',
				text: 'Trabalho de qualidade com garantia.'
			},
			{
				title: 'Consulta gratuita',
				text: 'Ligue-nos a qualquer momento para aconselhamento.'
			},
			{
				title: 'Recomendações honestas',
				text: 'Apenas o que o seu carro precisa.'
			}
		]
	},
	services: {
		title: {
			main: 'Serviços populares &',
			accent: 'Preços'
		},
		list: {
			diagnostics: {
				price: '70{euro}',
				title: 'Diagnóstico computadorizado',
				bullets: ['Scan eletrónico completo', 'Leitura e explicação de erros', 'Reset de manutenção']
			},
			maintenance: {
				price: 'DESDE 50{euro}',
				title: 'Serviço de manutenção',
				bullets: [
					'Troca de óleo + filtro — 50€',
					'Serviço de caixa de velocidades — 150–250€',
					'Filtros / velas / fluidos — 50–200€'
				]
			},
			brake: {
				price: 'DESDE 70{euro}',
				title: 'Sistema de travões',
				bullets: ['Troca do fluido de travões — 70€', 'Substituição de pastilhas e discos — 140–250€']
			},
			suspension: {
				price: 'DESDE 70{euro}',
				title: 'Suspensão',
				bullets: ['Diagnóstico de suspensão — 70€', 'Reparação e substituição de peças']
			},
			custom: {
				price: '50{euro}/HORA',
				title: 'Trabalhos personalizados',
				bullets: ['Reparações individuais', 'Projetos especiais', 'Mão de obra — 50€/hora']
			}
		},
		cta: {
			button: 'Marque o seu serviço hoje',
			note: 'Consulta gratuita incluída'
		}
	},
	carProblems: {
		title: {
			main: 'PROBLEMAS DO CARRO',
			accent: 'RESOLVEMOS'
		},
		items: {
			warningLights: 'LUZES DE AVISO NO PAINEL',
			strangeNoises: 'RUÍDOS ESTRANHOS AO CONDUZIR',
			vibration: 'VIBRAÇÃO OU INSTABILIDADE',
			brake: 'PROBLEMAS DE TRAVÕES',
			maintenance: 'MANUTENÇÃO REGULAR',
			preInspection: 'CHECK-UP PRÉ-INSPEÇÃO',
			ecuTuning: 'AFINAÇÃO DA ECU DO MOTOR',
			ecoRemoval: 'REMOÇÃO DO SISTEMA ECO',
			coding: 'CODIFICAÇÃO E ATIVAÇÃO DE FUNÇÕES'
		}
	},
	howItWorks: {
		title: {
			main: 'COMO',
			accent: 'FUNCIONA'
		},
		steps: [
			['INSPEÇÃO', ''],
			['DIAGNÓSTICO'],
			['CONFIRMAÇÃO', 'DE PREÇO'],
			['REPARAÇÃO'],
			['CONTROLO', 'DE QUALIDADE'],
			['GARANTIA', 'E ENTREGA']
		]
	},
	ourTeams: {
		title: {
			main: 'A NOSSA',
			accent: 'EQUIPA'
		},
		members: {
			james: {
				name: 'JAMES WHITMORE',
				role: 'Gestor de vendas'
			},
			oliver: {
				name: 'OLIVER BENNETT',
				role: 'Consultor de vendas automóvel'
			},
			miguel: {
				name: 'MIGUEL FERREIRA',
				role: 'Gestor de serviço'
			}
		}
	},
	ourService: {
		title: {
			main: 'AS NOSSAS',
			accent: 'PROMOÇÕES'
		},
		slides: {
			workshop: {
				title: 'TROCA DE ÓLEO + FILTRO — 50.00{euro}',
				subtitle: 'Diagnóstico gratuito do carro incluído',
				book: 'Marcar atendimento'
			},
			diagnostics: {
				title: 'OFERTA ESPECIAL PARA SENHORAS',
				subtitle: 'Diagnóstico do carro — 58.00€ (em vez de 70.00€) • 8% de desconto no próximo serviço • 4.03 – 11.03',
				book: 'Marcar atendimento'
			}
		}
	},
	locationContact: {
		title: {
			main: 'Localização &',
			accent: 'Contacto'
		},
		address: {
			label: 'MORADA',
			value: 'Av. Dr. Francisco Sá Carneiro, Massamá, 2735-600 Queluz, Portugal'
		},
		parking: {
			label: 'ESTACIONAMENTO',
			value: 'Estacionamento gratuito no local'
		},
		workingHours: {
			label: 'HORÁRIO',
			value: 'Seg-Sex: 10:00 - 19:00'
		},
		phone: {
			label: 'TELEFONE',
			value: '+351 938 826 858'
		},
		whatsapp: 'CHAT NO WHATSAPP'
	},
	footer: {
		tagline: 'Serviço automóvel profissional em Portugal desde 2025'
	},
	booking: {
		title: 'Introduza os seus dados',
		name: 'Nome',
		surname: 'Apelido',
		phone: 'Telefone',
		auto: 'Carro',
		works: 'Tipo de serviço',
		send: 'Enviar',

		worksOptions: {
			diagnostics: 'Diagnóstico',
			maintenance: 'Manutenção',
			brakes: 'Serviço de travões',
			suspension: 'Suspensão',
			custom: 'Trabalhos personalizados'
		},

		sending: 'A enviar...',
		successTitle: 'Obrigado!',
		successText: 'Recebemos o seu pedido. O nosso gestor entrará em contacto consigo em breve.',
		successButton: 'OK',

		errors: {
			nameRequired: 'O nome é obrigatório',
			surnameRequired: 'O apelido é obrigatório',
			phoneRequired: 'O telefone é obrigatório',
			phoneInvalid: 'Número de telefone inválido'
		}
	}
}
