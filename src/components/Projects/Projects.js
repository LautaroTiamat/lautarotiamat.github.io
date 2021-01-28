import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Particle from "./../Particle"
import ProjectCard from "./ProjectCards"
//import BlogCard from "./BlogsCards"
import stelarIMG from "./../../Assets/Projects/stelar.jpg"
import sigestIMG from "./../../Assets/Projects/sigest.png"
import noIMG from "./../../Assets/Projects/noImage.png"

const Projects = () => {
	const { t } = useTranslation()

	return (
		<Container fluid className="project-section">
			<div style={{ marginTop: '-130px' }}>
				<Particle />
			</div>
			<Container style={{ marginTop: '130px' }}>
				<h1 className="project-heading">
					{t('projectsText-1')} <strong className="purple">{t('projectsText-1-1')} </strong>
				</h1>
				<p style={{ color: "white" }}>
					{t('projectsText-2')}
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={stelarIMG}
							isBlog={false}
							title="eSTELAR"
							description={t('projectsProD-1')}
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sigestIMG}
							isBlog={false}
							title="SIGEST"
							description={t('projectsProD-2')}
							link="http://sigest.ml/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={noIMG}
							isBlog={false}
							title="MyMOMO"
							description={t('projectsProD-3')}
						/>
					</Col>
				</Row>
				{ /*
				<h1 className="project-heading">
					My Recent <strong className="purple">Blog </strong> Posts
				</h1>
				<p style={{ color: "white" }}>Do give a read to some of my blogs</p>
				<Row style={{ justifyContent: "center" }}>
					<Col md={4} className="blog-card">
						<BlogCard
							imgPath={algo}
							link=""
							title="Cracking Interview"
							site="gitbook.com"
						/>
					</Col>
					<Col md={4} className="blog-card">
						<BlogCard
							imgPath={plant}
							link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
							title="Plant AI"
							site="medium.com"
						/>
					</Col>
				</Row>
				*/ }
			</Container>
		</Container>
	)
}

export default Projects