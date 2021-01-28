import React from "react"
import { useTranslation } from "react-i18next"
import Card from "react-bootstrap/Card"

const AboutCard = () => {
	const { t } = useTranslation()
	
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						{t('aboutText-1')} <span className="purple">{t('aboutText-1-1')} </span>
						{t('aboutText-1-2')} <span className="purple"> {t('aboutText-1-3')}</span>
						<br />{t('aboutText-2')}
						<br />
						<br />
						{t('aboutText-3')}
					</p>
					<ul>
						<li className="about-activity">
							<i className="far fa-hand-point-right"></i> {t('aboutText-4')}
						</li>
						<li className="about-activity">
							<i className="far fa-hand-point-right"></i> {t('aboutText-4-1')}
						</li>
						<li className="about-activity">
							<i className="far fa-hand-point-right"></i> {t('aboutText-4-2')}
						</li>
					</ul>

					<p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
						"{t('aboutText-5')}"
					</p>
					{/*<footer className="blockquote-footer">Soumyajit</footer>*/}
				</blockquote>
			</Card.Body>
		</Card>
	)
}

export default AboutCard