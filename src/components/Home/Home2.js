import React from "react"
import { useTranslation } from "react-i18next"
import { Container, Row, Col } from "react-bootstrap"
import Tilt from "react-parallax-tilt"
import myImg from "../../Assets/avatar.svg"
import { Links } from "../../utils/sources"

const Home2 = () => {
	const { t } = useTranslation()

	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							{t('littleIntroduce1')} <span className="purple">{t('littleIntroduce2')}</span> {t('littleIntroduce3')}
						</h1>
						<p className="home-about-body">
							{t('introText-1')}
							<br />
							<br />{t('introText-2')}
							<i>
								<b className="purple"> {t('introText-2-1')} </b>
							</i>
							<br />
							<br />
							{t('introText-3')}
							<i>
								<b className="purple"> {t('introText-3-1')} </b>
							</i>
							{t('introText-3-2')}
							<i>
								<b className="purple"> {t('introText-3-3')}</b>
							</i>
							<br />
							<br />
							{t('introText-4')}
							<i>
								<b className="purple"> {t('introText-4-1')} </b>
							</i>
							{t('introText-4-2')}
							<i>
								<b className="purple"> {t('introText-4-3')}</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>{t('findMeOn')}</h1>
						<p>
							{t('findMeOn2')} <span className='purple'>{t('findMeOn21')}</span> {t('findMeOn22')}
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href={ Links.githubLink }
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<i className="fab fa-github"></i>
								</a>
							</li>
							<li className="social-icons">
								<a
									href={ Links.linkedinLink }
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li className="social-icons">
								<a
									href={ Links.instagramLink }
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<i className="fab fa-instagram"></i>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Home2