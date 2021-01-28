import React from "react"
import { useTranslation } from "react-i18next"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const ProjectCards = (props) => {
	const { t } = useTranslation()

	return (
		<Card className="project-card-view">
			<Card.Img
				variant="top"
				src={props.imgPath}
				alt="card-img"
				height="230px"
				style={{ objectFit: "cover" }}
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					{props.description}
				</Card.Text>
				{
					props.link ? (
						<Button variant="primary" href={props.link} target="_blank">
							<i className="cil-external-link">&nbsp;</i>
							{props.isBlog ? t('projectCardText-1') : t('projectCardText-2')}
						</Button>
					) : null
				}
			</Card.Body>
		</Card>
	)
}

export default ProjectCards