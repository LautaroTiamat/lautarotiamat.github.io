import React from "react"
import { useTranslation } from "react-i18next"
import { Container, Row, Col } from "react-bootstrap"
import Github from "./Github";
import Techstack from "./Techstack"
import Aboutcard from "./AboutCard"
import Particle from "./../Particle"
import laptopImg from "./../../Assets/about.png"
import { SkillsetItems, ToolsItems } from "./TechstackItems"

const About = () => {
	const { t } = useTranslation()

	return (
		<Container fluid className="about-section">
			<div style={{ marginTop: '-130px' }}>
				<Particle />
			</div>
			<Container style={{ marginTop: '100px' }}>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
							{t('aboutMe-1')} <strong className="purple">{t('aboutMe-2')}</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "120px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img src={laptopImg} alt="about" className="img-fluid" />
					</Col>
				</Row>
				<h1 className="project-heading">
					{t('aboutSkill-1')} <strong className="purple">{t('aboutSkill-2')} </strong>
				</h1>
				<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
					{SkillsetItems.map((e, key) => <Techstack key={key} iconName={e.iconName} />)}
				</Row>
				<h1 className="project-heading">
					<strong className="purple">{t('aboutTools-1')}</strong> {t('aboutTools-2')}
				</h1>
				<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
					{ToolsItems.map((e, key) => <Techstack key={key} iconName={e.iconName} />)}
				</Row>
				<Github />
			</Container>
		</Container>
	)
}

export default About