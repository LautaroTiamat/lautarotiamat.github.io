import React from "react"
import { useTranslation } from "react-i18next"
import { Container, Row, Col } from "react-bootstrap"
import { Links } from "./../utils/sources"

const Footer = () => {
	const { t } = useTranslation()

	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>{t('footer-1')}</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>{t('footer-2')}</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a href={ Links.githubLink } style={{ color: "white" }}>
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li className="social-icons">
							<a href={ Links.linkedinLink } style={{ color: "white" }}>
								<i className="fab fa-linkedin-in"></i>
							</a>
						</li>
						<li className="social-icons">
							<a href={ Links.instagramLink } style={{ color: "white" }}>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
