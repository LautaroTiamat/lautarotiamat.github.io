import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import homeLogo from "./../../Assets/home-main.svg"
import Particle from "./../Particle"
import Home2 from "./Home2"
import Type from "./Type"

const Home = () => {
	const { t } = useTranslation()

	return (
		<section>
			<Container fluid id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								{t('hi')} <span className="wave">UwU</span>
							</h1>
							<h1 className="heading-name">
								{t('im')} <strong className="main-name">ROLÓN LAUTARO EMANUEL</strong>
							</h1>
							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>
						<Col md={5} style={{ paddingBottom: 20 }}>
							<img src={homeLogo} alt="home pic" className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	)
}

export default Home