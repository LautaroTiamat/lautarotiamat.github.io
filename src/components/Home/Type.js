import React from "react"
import { useTranslation } from "react-i18next"
import Typewriter from "typewriter-effect"

const Type = () => {
	const { i18n } = useTranslation()
	const thisLang = () => /es/.test(i18n.language) ? 'es' : 'en'
	const itemsES = [
		"Desarrollador Web",
		"Desarrollador con el Stack MERNG",
		"Estudiante",
		"Freelancer"
	]
	const itemsEN = [
		"Web Developer",
		"MERNG Stack Developer",
		"Student",
		"Freelancer",
	]
	const strings = thisLang() === 'es' ? itemsES : itemsEN

	return (
		<Typewriter
			options={{
				strings: strings,
				autoStart: true,
				loop: true,
				deleteSpeed: 50
			}}
		/>
	)
}

export default Type